import { Component } from '@angular/core';

import { Form } from '../entities/form';

@Component({
  selector: 'app-ic-rdos',
  templateUrl: './ic-rdos.page.html',
  styleUrls: ['./ic-rdos.page.css'],
})
export class IcRdosPage {

  public form: Form = {
    treshold: 4,
    statements: [
      {
        quote: 'RDOS ≥ 4 prédit dyspnée modérée à sévère avec une sensibilité de 36% et une spécificité de 94% (AUC courbe ROC : 0.795). Les catégories de dyspnée sont déterminées par les patient(e)s eux(elles)-même.',
        src: '(Campbell ML, et al. Mild, moderate, and severe intensity cut-points for the Respiratory Distress Observation Scale. Heart Lung. 2017;46:14-17.)'
      }
    ],
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
}
