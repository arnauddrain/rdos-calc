import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FormComponent } from './form.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    FormComponent
  ],
  entryComponents: [
    ScoreComponent
  ],
  declarations: [
    FormComponent,
    ScoreComponent
  ]
})
export class FormModule { }
