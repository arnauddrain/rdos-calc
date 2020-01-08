import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { FormComponent } from './form.component';
import { FormHeaderComponent } from './form-header/form-header.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    TranslateModule
  ],
  exports: [
    FormComponent,
    FormHeaderComponent
  ],
  entryComponents: [
    ScoreComponent
  ],
  declarations: [
    FormComponent,
    FormHeaderComponent,
    ScoreComponent
  ]
})
export class FormModule { }
