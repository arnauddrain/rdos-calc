import { Component, Input, OnChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ScoreComponent } from './score/score.component';
import { Form } from '../entities/form';
import { Answer, Question } from '../entities/question';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnChanges {

  @Input() form: Form;

  constructor(public modalController: ModalController) { }

  ngOnChanges() {
    this.form.questions.forEach(q => {
      q.numericAnswer = null;
      q.selectedAnswer = null;
    });
  }

  updateNumericAnswer() {
    this.checkForFinish();
  }

  selectAnswer(question: Question, answer: Answer = null) {
    question.selectedAnswer = answer;
    this.checkForFinish();
  }

  checkForFinish() {
    const notAnsweredQuestions = this.form.questions.filter(q => !q.selectedAnswer && !q.numericAnswer);
    if (!notAnsweredQuestions.length) {
      this.presentScore();
    }
  }

  async presentScore() {
    const modal = await this.modalController.create({
      component: ScoreComponent,
      componentProps: {
        form: this.form
      },
      cssClass: 'score-modal'
    });
    return await modal.present();
  }
}
