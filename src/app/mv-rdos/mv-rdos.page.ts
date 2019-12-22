import { Component } from '@angular/core';

import { Form } from '../entities/form';

@Component({
  selector: 'app-mv-rdos',
  templateUrl: './mv-rdos.page.html',
  styleUrls: ['./mv-rdos.page.css'],
})
export class MvRdosPage {

  public form: Form = {
    treshold: 2.6,
    statements: [
      {
        quote: 'La valeur seuil retenue pour fortement suspecter une dyspnée significative EVA-Dyspnée ≥ 4, est IC-RDOS ≥ 2,6. La dyspnée est évaluée par les patient(e)s au moyen d’une échelle visuelle analogique (EVA-Dyspnée) allant de 0 (pas de dyspnée) à 10cm (dyspnée maximale imaginable).',
        src: '(Decavèle M, et al. The Mechanical Ventilation-Respiratory Distress Observation Scale as a surrogate of selfreported dyspnoea in intubated patients. Eur Respir J 2018; 52.)'
      }
    ],
    questions: [
      {
        title: 'Fréquence cardiaque',
        answers: [
          { text: '< 90/min', value: 0 },
          { text: '90 - 109/min', value: 1 },
          { text: '> 110/min', value: 2 }
        ]
      },
      {
        title: 'Fréquence respiratoire',
        answers: [
          { text: '< 19/min', value: 0 },
          { text: '19 - 30/min', value: 1 },
          { text: '> 30/min', value: 2 }
        ]
      },
      {
        title: 'Respiration abdominale paradoxale',
        answers: [
          { text: 'Non', value: -1 },
          { text: 'Oui', value: 1 }
        ]
      },
      {
        title: 'Contraction des muscles du cou à l\'inspiration',
        answers: [
          { text: 'Non', value: -1 },
          { text: 'Oui', value: 1 }
        ]
      },
      {
        title: 'Expression faciale de peur',
        answers: [
          { text: 'Non', value: -1 },
          { text: 'Oui', value: 1 }
        ]
      }
    ]
  };

  constructor() { }
}
