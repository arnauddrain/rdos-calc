import { Component } from '@angular/core';

import { Form } from '../entities/form';

@Component({
  selector: 'app-ic-rdos',
  templateUrl: './ic-rdos.page.html',
  styleUrls: ['./ic-rdos.page.css'],
})
export class IcRdosPage {

  public form: Form = {
    treshold: 2.6,
    base: 3.3,
    statements: [
      {
        quote: 'La valeur seuil retenue pour fortement suspecter une dyspnée significative EVA-Dyspnée ≥ 4, est IC-RDOS ≥ 2,4. La dyspnée est évaluée par les patient(e)s au moyen d’une échelle visuelle analogique (EVA-Dyspnée) allant de 0 (pas de dyspnée) à 10cm (dyspnée maximale imaginable).',
        src: '(Persichini R, et al. Diagnostic Accuracy of Respiratory Distress Observation Scales as Surrogates of Dyspnea Self-report in Intensive Care Unit Patients. Anesthesiology. 2015;123:830-37.)'
      }
    ],
    questions: [
      {
        title: 'Fréquence cardiaque',
        numericDivisor: 65,
        placeholder: 'Renseignez votre valeur batt/min'
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
      },
      {
        title: 'Besoin en oxygène',
        answers: [
          { text: 'Non', value: -0.7 },
          { text: 'Oui', value: 0.7 }
        ]
      }
    ]
  };

  constructor() { }
}
