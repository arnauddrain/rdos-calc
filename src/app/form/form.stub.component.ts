import { Component, Input } from '@angular/core';

import { Form } from '../entities/form';

@Component({
  selector: 'app-form',
  template: ''
})
export class FormStubComponent {
  @Input() form: Form;
}
