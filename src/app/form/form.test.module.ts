import { NgModule } from '@angular/core';

import { FormStubComponent } from './form.stub.component';
import { FormHeaderStubComponent } from './form-header/form-header.stub.component';

@NgModule({
  exports: [
    FormStubComponent,
    FormHeaderStubComponent
  ],
  declarations: [
    FormStubComponent,
    FormHeaderStubComponent
  ]
})
export class FormTestModule { }
