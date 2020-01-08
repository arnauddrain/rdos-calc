import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AboutPage } from './about.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutPage
      }
    ])
  ],
  declarations: [AboutPage]
})
export class AboutPageModule { }
