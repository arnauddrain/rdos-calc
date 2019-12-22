import { Component, Input } from '@angular/core';

import { Form } from '../entities/form';
import { Answer, Question } from '../entities/question';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

  @Input() form: Form;

  constructor() { }

  selectAnswer(question: Question, answer: Answer) {
    question.selectedAnswer = answer;
    const notAnsweredQuestions = this.form.questions.filter(q => !q.selectedAnswer);
    if (!notAnsweredQuestions.length) {
      ;
    }
  }

}
