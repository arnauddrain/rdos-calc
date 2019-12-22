export class Answer {
  value: number;
  text: string;
}

export class Question {
  title: string;
  answers: Answer[];
  selectedAnswer?: Answer = null;
}
