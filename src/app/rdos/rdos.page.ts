import { Component, OnInit } from '@angular/core';

import { Form } from '../entities/form';

@Component({
  selector: 'app-rdos',
  templateUrl: './rdos.page.html',
  styleUrls: ['./rdos.page.css'],
})
export class RdosPage implements OnInit {

  public form: Form = {
    questions: [
      {
        title: 'Fréquence cardiaque',
        answers: [
          {
            text: '< 90/min',
            value: 0
          },
          {
            text: '90 - 109/min',
            value: 1
          },
          {
            text: '> 110/min',
            value: 2
          }
        ]
      },
      {
        title: 'Fréquence respiratoire',
        answers: [
          {
            text: '< 19/min',
            value: 0
          },
          {
            text: '19 - 30/min',
            value: 1
          },
          {
            text: '> 30/min',
            value: 2
          }
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
