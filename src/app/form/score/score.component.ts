import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Form } from 'src/app/entities/form';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnChanges, OnInit {

  @Input() form: Form;

  public score = 0;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.calculateScore();
  }

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
    this.score = Math.round((this.form.base + this.score) * 100) / 100;
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
