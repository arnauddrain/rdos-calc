export class Answer {
  value: number;
  text: string;
}

export class Question {
  title: string;
  placeholder?: string;
  answers?: Answer[];
  numericDivisor?: number;
  numericAnswer?: number;
  selectedAnswer?: Answer;
}
