import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FormModule } from '../form/form.module';
import { FormHeaderModule } from '../form-header/form-header.module';

import { MvRdosPage } from './mv-rdos.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormModule,
    FormHeaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: MvRdosPage
      }
    ])
  ],
  declarations: [MvRdosPage]
})
export class MvRdosPageModule { }
