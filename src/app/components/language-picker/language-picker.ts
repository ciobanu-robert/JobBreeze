import {
  Component,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import {
  ConnectedPosition,
  Overlay,
  OverlayRef,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { LanguageCode } from '../../i18n/translations';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

// Tried below the trigger first, flipping to above/left as needed — CDK
// picks whichever actually fits the viewport, recomputing live.
const MENU_POSITIONS: ConnectedPosition[] = [
  {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'top',
    offsetY: 14,
  },
  {
    originX: 'end',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'bottom',
    offsetY: -14,
  },
  {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
    offsetY: 14,
  },
  {
    originX: 'start',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'bottom',
    offsetY: -14,
  },
];

@Component({
  imports: [],
  selector: 'app-language-picker',
  styleUrl: './language-picker.scss',
  templateUrl: './language-picker.html',
})
export class LanguagePicker {
  protected readonly language = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  protected readonly isOpen = signal(false);

  private readonly elementRef = inject(
    ElementRef<HTMLElement>,
  );
  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(
    ViewContainerRef,
  );
  private readonly menuTemplate =
    viewChild.required<TemplateRef<unknown>>(
      'menuTemplate',
    );

  // CDK's overlay container is a single element appended directly to
  // <body>, outside the app's own component tree entirely — that's what
  // actually fixes the popup rendering under the swipe cards on iOS
  // Safari (a transform-compositing quirk in WebKit), and unlike moving
  // the DOM node by hand, CDK creates it through Angular's own
  // ViewContainerRef machinery, so bindings/change detection keep working.
  private overlayRef: OverlayRef | null = null;

  protected toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.openMenu();
    }
  }

  private openMenu(): void {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.elementRef)
      .withPositions(MENU_POSITIONS)
      .withPush(true)
      .withViewportMargin(16);

    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'language-backdrop',
      panelClass: 'language-overlay-panel',
      scrollStrategy:
        this.overlay.scrollStrategies.reposition(),
    });
    this.overlayRef = overlayRef;

    overlayRef
      .backdropClick()
      .subscribe(() => this.close());
    overlayRef.keydownEvents().subscribe((event) => {
      if (event.key === 'Escape') {
        this.close();
      }
    });
    overlayRef
      .detachments()
      .subscribe(() => this.isOpen.set(false));

    const portal = new TemplatePortal(
      this.menuTemplate(),
      this.viewContainerRef,
    );
    overlayRef.attach(portal);
    this.isOpen.set(true);
  }

  private close(): void {
    this.overlayRef?.dispose();
    this.overlayRef = null;
  }

  protected select(code: LanguageCode): void {
    this.language.setLanguage(code);
    this.close();
  }
}
