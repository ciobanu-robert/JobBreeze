import {
  Component,
  ElementRef,
  OnInit,
  afterNextRender,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { Job } from '../../models/job';

const SWIPE_THRESHOLD = 120;
const SWIPE_UP_THRESHOLD = 100;
const MAX_ROTATION = 12;
const EXIT_MARGIN = 48;
const EXIT_DURATION_MS = 520;
const ENTER_DURATION_MS = 380;

export type SwipeDirection = 'like' | 'reject' | 'save';

@Component({
  imports: [],
  selector: 'app-job-swipe-card',
  styleUrl: './job-swipe-card.scss',
  templateUrl: './job-swipe-card.html',
})
export class JobSwipeCard implements OnInit {
  readonly job = input.required<Job>();
  readonly interactive = input(true);
  readonly enterFrom = input<SwipeDirection | null>(null);
  readonly swiped = output<SwipeDirection>();

  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  protected readonly exitDuration = `${EXIT_DURATION_MS}ms`;
  private readonly host = inject(ElementRef<HTMLElement>);

  protected readonly dragX = signal(0);
  protected readonly dragY = signal(0);
  protected readonly dragging = signal(false);
  readonly exiting = signal<SwipeDirection | null>(null);
  readonly entering = signal(false);

  readonly activeDirection = computed(
    () =>
      this.exiting() ??
      (this.dragging() && !this.entering()
        ? this.releaseDirection()
        : null),
  );

  private pointerId: number | null = null;
  private startX = 0;
  private startY = 0;

  constructor() {
    afterNextRender(() => {
      if (!this.enterFrom()) {
        return;
      }
      void (this.host.nativeElement as HTMLElement)
        .offsetWidth;
      this.dragging.set(false);
      this.dragX.set(0);
      this.dragY.set(0);
      setTimeout(
        () => this.entering.set(false),
        ENTER_DURATION_MS,
      );
    });
  }

  ngOnInit(): void {
    const from = this.enterFrom();
    if (!from || typeof window === 'undefined') {
      return;
    }
    this.entering.set(true);
    this.dragging.set(true);
    if (from === 'save') {
      this.dragY.set(-window.innerHeight);
    } else {
      this.dragX.set(
        from === 'like'
          ? window.innerWidth
          : -window.innerWidth,
      );
    }
  }

  protected get rotation(): number {
    return Math.max(
      -MAX_ROTATION,
      Math.min(MAX_ROTATION, this.dragX() / 12),
    );
  }

  private get dominantDirection(): SwipeDirection | null {
    const dx = this.dragX();
    const dy = this.dragY();
    if (dx === 0 && dy === 0) {
      return null;
    }
    if (dy < 0 && Math.abs(dy) >= Math.abs(dx)) {
      return 'save';
    }
    return dx > 0 ? 'like' : dx < 0 ? 'reject' : null;
  }

  protected get likeOpacity(): number {
    if (this.dominantDirection !== 'like') {
      return 0;
    }
    return Math.max(
      0,
      Math.min(1, this.dragX() / SWIPE_THRESHOLD),
    );
  }

  protected get rejectOpacity(): number {
    if (this.dominantDirection !== 'reject') {
      return 0;
    }
    return Math.max(
      0,
      Math.min(1, -this.dragX() / SWIPE_THRESHOLD),
    );
  }

  protected get saveOpacity(): number {
    if (this.dominantDirection !== 'save') {
      return 0;
    }
    return Math.max(
      0,
      Math.min(1, -this.dragY() / SWIPE_UP_THRESHOLD),
    );
  }

  protected onPointerDown(event: PointerEvent): void {
    if (!this.interactive() || this.exiting()) {
      return;
    }
    if ((event.target as HTMLElement).closest('button')) {
      return;
    }
    event.preventDefault();
    this.pointerId = event.pointerId;
    this.startX = event.clientX - this.dragX();
    this.startY = event.clientY - this.dragY();
    this.dragging.set(true);
    (event.currentTarget as HTMLElement).setPointerCapture(
      event.pointerId,
    );
  }

  protected onPointerMove(event: PointerEvent): void {
    if (
      !this.dragging() ||
      event.pointerId !== this.pointerId
    ) {
      return;
    }
    event.preventDefault();
    this.dragX.set(event.clientX - this.startX);
    this.dragY.set(
      Math.min(0, event.clientY - this.startY),
    );
  }

  protected onPointerUp(event: PointerEvent): void {
    if (
      !this.dragging() ||
      event.pointerId !== this.pointerId
    ) {
      return;
    }
    this.dragging.set(false);
    this.pointerId = null;

    const direction = this.releaseDirection();
    if (direction) {
      this.launch(direction);
    } else {
      this.dragX.set(0);
      this.dragY.set(0);
    }
  }

  private releaseDirection(): SwipeDirection | null {
    const dx = this.dragX();
    const dy = this.dragY();

    if (
      dy < -SWIPE_UP_THRESHOLD &&
      Math.abs(dy) > Math.abs(dx)
    ) {
      return 'save';
    }
    if (dx > SWIPE_THRESHOLD) {
      return 'like';
    }
    if (dx < -SWIPE_THRESHOLD) {
      return 'reject';
    }
    return null;
  }

  triggerSwipe(direction: SwipeDirection): void {
    if (this.exiting()) {
      return;
    }
    this.launch(direction);
  }

  private launch(direction: SwipeDirection): void {
    this.exiting.set(direction);

    const rect = (
      this.host.nativeElement as HTMLElement
    ).getBoundingClientRect();
    const angle = (MAX_ROTATION * Math.PI) / 180;
    const halfWidth =
      (rect.width * Math.cos(angle) +
        rect.height * Math.sin(angle)) /
      2;
    const centerX = rect.left + rect.width / 2;

    if (direction === 'save') {
      this.dragX.set(0);
      this.dragY.set(-(rect.bottom + EXIT_MARGIN));
    } else if (direction === 'like') {
      this.dragX.set(
        window.innerWidth -
          centerX +
          halfWidth +
          EXIT_MARGIN,
      );
    } else {
      this.dragX.set(-(centerX + halfWidth + EXIT_MARGIN));
    }
    setTimeout(
      () => this.swiped.emit(direction),
      EXIT_DURATION_MS,
    );
  }
}
