import { Form } from '../entities/form';

export const RdosForm: Form = {
  treshold: 4,
  base: 0,
  statements: [
    {
      quote: 'Un RDOS ≥ 4 prédit une dyspnée modérée à sévère avec une sensibilité de 97% et une spécificité de 80% (AUC courbe ROC : 0.948). Les catégories de dyspnée sont déterminées par l’IDE. Les patient(e)s ne sont pas sollicité(e)s. Les IDE sont qualifiées experte dans l’évaluation de la dyspnée en soin palliatif.',
      src: '(Campbell ML, et al. Intensity cut-points for the Respiratory Distress Observation Scale. Palliat Med. 2015;29:436-42.)'
    },
    {
      quote: 'Un RDOS ≥ 4 prédit une dyspnée modérée à sévère avec une sensibilité de 36% et une spécificité de 94% (AUC courbe ROC : 0.795). Les catégories de dyspnée sont déterminées par les patient(e)s eux(elles)-même.',
      src: '(Campbell ML, et al. Mild, moderate, and severe intensity cut-points for the Respiratory Distress Observation Scale. Heart Lung. 2017;46:14-17.)'
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
      title: 'Agitation, mouvements non intentionnels',
      answers: [
        { text: 'Non', value: 0 },
        { text: 'Occasionnels', value: 1 },
        { text: 'Fréquents', value: 2 }
      ]
    },
    {
      title: 'Respiration abdominale paradoxale',
      answers: [
        { text: 'Non', value: 0 },
        { text: 'Oui', value: 2 }
      ]
    },
    {
      title: 'Contraction des muscles du cou à l\'inspiration',
      answers: [
        { text: 'Non', value: 0 },
        { text: 'Modérée', value: 1 },
        { text: 'Intense', value: 2 }
      ]
    },
    {
      title: 'Gémissement en fin d\'expiration',
      answers: [
        { text: 'Non', value: 0 },
        { text: 'Oui', value: 2 }
      ]
    },
    {
      title: 'Battement des ailes du nez',
      answers: [
        { text: 'Non', value: 0 },
        { text: 'Oui', value: 2 }
      ]
    },
    {
      title: 'Expression faciale de peur',
      answers: [
        { text: 'Non', value: 0 },
        { text: 'Oui', value: 2 }
      ]
    }
  ]
};
