import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.scss'],
})
export class FieldInputComponent {

  @Input() label: string;
  @Input() type: string = "text";

  focused: boolean;

  onBlur(event: any) {
    const value = event.target.value;
    if (!value) {
      this.focused = false;
    }
  }

}