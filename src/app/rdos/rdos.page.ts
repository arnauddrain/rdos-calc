import { Component } from '@angular/core';

import { RdosForm } from './rdos.form';
import { Form } from '../entities/form';

@Component({
  selector: 'app-rdos',
  templateUrl: './rdos.page.html',
  styleUrls: ['./rdos.page.css'],
})
export class RdosPage {

  public form: Form = RdosForm;

  constructor() { }
}
