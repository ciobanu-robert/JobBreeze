import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  imports: [],
  styleUrl: './toggle-switch.scss',
  templateUrl: './toggle-switch.html',
})
export class ToggleSwitch {
  readonly checked = input(false);
  readonly label = input('');
  readonly toggled = output<void>();
}
