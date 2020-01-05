import { Form } from '../entities/form';

export const IcRdosForm: Form = {
  treshold: 2.6,
  base: 3.3,
  statements: [
    {
      quote: 'Un IC-RDOS ≥ 2,4 prédit une dyspnée EVA ≥ 4 (dyspnée significative) avec une sensibilité de 72% et une spécificité de 72% (AUC courbe ROC : 0.83).',
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
