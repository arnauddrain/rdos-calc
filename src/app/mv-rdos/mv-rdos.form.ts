import { Form } from '../entities/form';

export const MvRdosForm: Form = {
  treshold: 2.4,
  base: 3.3,
  statements: [
    {
      quote: 'Un MV-RDOS ≥ 2,4 prédit une dyspnée EVA ≥ 4 (dyspnée significative) avec une sensibilité de 57% et une spécificité de 94% (AUC courbe ROC : 0.78).',
      src: '(Decavèle M, et al. The Mechanical Ventilation-Respiratory Distress Observation Scale as a surrogate of selfreported dyspnoea in intubated patients. Eur Respir J 2018; 52.)'
    }
  ],
  questions: [
    {
      title: 'Fréquence cardiaque',
      numericDivisor: 65,
      placeholder: 'Renseignez votre valeur batt/min'
    },
    {
      title: 'Fréquence respiratoire',
      numericDivisor: 50,
      placeholder: 'Renseignez votre valeur cycles/min'
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
