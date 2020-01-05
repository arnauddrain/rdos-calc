import { Component, Input, OnChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Form } from 'src/app/entities/form';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnChanges {

  @Input() form: Form;

  public score = 0;

  constructor(public modalController: ModalController) { }

  ngOnChanges() {
    this.calculateScore();
  }

  calculateScore() {
    this.score = 0;
    this.form.questions.forEach(q => {
      if (q.selectedAnswer) {
        this.score += q.selectedAnswer.value;
      } else {
        this.score += q.numericAnswer / q.numericDivisor;
      }
    });
    this.score = this.form.base + Math.round(this.score * 100) / 100;
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
