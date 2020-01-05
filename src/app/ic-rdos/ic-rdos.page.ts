import { Component } from '@angular/core';

import { IcRdosForm } from './ic-rdos.form';
import { Form } from '../entities/form';

@Component({
  selector: 'app-ic-rdos',
  templateUrl: './ic-rdos.page.html',
  styleUrls: ['./ic-rdos.page.css'],
})
export class IcRdosPage {

  public form: Form = IcRdosForm;

  constructor() { }
}
