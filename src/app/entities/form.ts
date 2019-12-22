import { Question } from './question';

export class Form {
  statements: {
    quote: string;
    src: string;
  }[];
  treshold: number;
  questions: Question[];
}
