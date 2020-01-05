import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FormHeaderComponent } from './form-header.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    FormHeaderComponent
  ],
  declarations: [
    FormHeaderComponent
  ]
})
export class FormHeaderModule { }
