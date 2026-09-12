import { 
  Component, 
  inject, 
  input, 
  output, 
  signal 
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { Job } from '../../models/job';

const SWIPE_THRESHOLD = 120;
const SWIPE_UP_THRESHOLD = 100;
const MAX_ROTATION = 12;
const FLY_OUT_DISTANCE = 640;
const FLY_UP_DISTANCE = 700;
const EXIT_DURATION_MS = 260;

export type SwipeDirection = 'like' | 'reject' | 'save';

@Component({
  imports: [],
  selector: 'app-job-swipe-card',
  styleUrl: './job-swipe-card.scss',
  templateUrl: './job-swipe-card.html',
})
export class JobSwipeCard {
  readonly job = input.required<Job>();
  readonly interactive = input(true);
  readonly swiped = output<SwipeDirection>();

  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);

  protected readonly dragX = signal(0);
  protected readonly dragY = signal(0);
  protected readonly dragging = signal(false);
  protected readonly exiting = 
  signal<SwipeDirection | null>(null);

  private pointerId: number | null = null;
  private startX = 0;
  private startY = 0;

  protected get rotation(): number {
    return Math.max(-MAX_ROTATION, Math.min(
      MAX_ROTATION, this.dragX() / 12
    ));
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
      0, Math.min(1, this.dragX() / SWIPE_THRESHOLD
    ));
  }

  protected get rejectOpacity(): number {
    if (this.dominantDirection !== 'reject') {
      return 0;
    }
    return Math.max(
      0, Math.min(1, -this.dragX() / SWIPE_THRESHOLD)
    );
  }

  protected get saveOpacity(): number {
    if (this.dominantDirection !== 'save') {
      return 0;
    }
    return Math.max(
      0, Math.min(1, -this.dragY() / SWIPE_UP_THRESHOLD
    ));
  }

  protected onPointerDown(event: PointerEvent): void {
    if (!this.interactive() || this.exiting()) {
      return;
    }
    this.pointerId = event.pointerId;
    this.startX = event.clientX - this.dragX();
    this.startY = event.clientY - this.dragY();
    this.dragging.set(true);
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  }

  protected onPointerMove(event: PointerEvent): void {
    if (!this.dragging() || event.pointerId !== this.pointerId) {
      return;
    }
    this.dragX.set(event.clientX - this.startX);
    this.dragY.set(Math.min(0, event.clientY - this.startY));
  }

  protected onPointerUp(event: PointerEvent): void {
    if (!this.dragging() || event.pointerId !== this.pointerId) {
      return;
    }
    this.dragging.set(false);
    this.pointerId = null;

    const dx = this.dragX();
    const dy = this.dragY();

    if (dy < -SWIPE_UP_THRESHOLD && Math.abs(dy) > Math.abs(dx)) {
      this.launch('save');
    } else if (dx > SWIPE_THRESHOLD) {
      this.launch('like');
    } else if (dx < -SWIPE_THRESHOLD) {
      this.launch('reject');
    } else {
      this.dragX.set(0);
      this.dragY.set(0);
    }
  }

  triggerSwipe(direction: SwipeDirection): void {
    if (this.exiting()) {
      return;
    }
    this.launch(direction);
  }

  private launch(direction: SwipeDirection): void {
    this.exiting.set(direction);
    if (direction === 'save') {
      this.dragX.set(0);
      this.dragY.set(-FLY_UP_DISTANCE);
    } else {
      this.dragX.set(
        direction === 'like' ? FLY_OUT_DISTANCE : -FLY_OUT_DISTANCE
      );
    }
    setTimeout(() => this.swiped.emit(direction), EXIT_DURATION_MS);
  }
}
