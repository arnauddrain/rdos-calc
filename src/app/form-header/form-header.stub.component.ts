import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-header',
  template: ''
})
export class FormHeaderStubComponent {
  @Input() title: string;
  @Input() color: string;
}
