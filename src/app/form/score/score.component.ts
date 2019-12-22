import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Form } from 'src/app/entities/form';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {

  @Input() form: Form;

  public score = 0;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.form.questions.forEach(q => this.score += q.selectedAnswer.value);
    console.log('form', this.form);
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
