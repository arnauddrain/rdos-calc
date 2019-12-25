import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ScoreComponent } from './score/score.component';
import { Form } from '../entities/form';
import { Answer, Question } from '../entities/question';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

  @Input() form: Form;

  constructor(public modalController: ModalController) { }

  updateNumericAnswer(question: Question, e: any) {
    // TODO: should probably use ngmodel instead
    question.numericAnswer = e.detail.value;
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
