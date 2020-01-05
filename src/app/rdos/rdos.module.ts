import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FormModule } from '../form/form.module';

import { RdosPage } from './rdos.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormModule,
    RouterModule.forChild([
      {
        path: '',
        component: RdosPage
      }
    ])
  ],
  declarations: [RdosPage]
})
export class RdosPageModule { }
