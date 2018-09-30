import { FormControl, Validators } from '@angular/forms';

export class InputValidator extends Validators {

  static validateInput(control: FormControl) {
    if (control.value && control.value.length < 4) {
      return { error: 'Input has to be min 4 chars long.' };
    } else {
      return null;
    }
  }
}
