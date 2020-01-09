import { Form } from '../entities/form';

export const MvRdosForm: Form = {
  treshold: 2.6,
  base: 3.3,
  statements: [
    {
      quote: 'Form.MV-RDOS.quote',
      src: 'Form.MV-RDOS.src'
    }
  ],
  questions: [
    {
      title: 'Form.Title.CardiacFrequency',
      numericDivisor: 65,
      placeholder: 'Form.Title.CardiacFrequencyPlaceholder'
    },
    {
      title: 'Form.Title.BreathingFrequency',
      numericDivisor: 50,
      placeholder: 'Form.Title.BreathingFrequencyPlaceholder'
    },
    {
      title: 'Form.Title.ParadoxicalBreathing',
      answers: [
        { text: 'Form.Answer.No', value: -1 },
        { text: 'Form.Answer.Yes', value: 1 }
      ]
    },
    {
      title: 'Form.Title.NeckUsage',
      answers: [
        { text: 'Form.Answer.No', value: -1 },
        { text: 'Form.Answer.Yes', value: 1 }
      ]
    },
    {
      title: 'Form.Title.Fear',
      answers: [
        { text: 'Form.Answer.No', value: -1 },
        { text: 'Form.Answer.Yes', value: 1 }
      ]
    }
  ]
};
