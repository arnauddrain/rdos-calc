import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FormComponent } from './form.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FormComponent
  ],
  declarations: [FormComponent]
})
export class FormModule { }
