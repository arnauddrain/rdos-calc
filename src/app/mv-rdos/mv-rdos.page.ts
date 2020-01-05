import { Component } from '@angular/core';

import { MvRdosForm } from './mv-rdos.form';
import { Form } from '../entities/form';

@Component({
  selector: 'app-mv-rdos',
  templateUrl: './mv-rdos.page.html',
  styleUrls: ['./mv-rdos.page.css'],
})
export class MvRdosPage {

  public form: Form = MvRdosForm;

  constructor() { }
}
