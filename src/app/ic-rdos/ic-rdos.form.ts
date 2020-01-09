import { Form } from '../entities/form';

export const IcRdosForm: Form = {
  treshold: 2.6,
  base: 3.3,
  statements: [
    {
      quote: 'Form.IC-RDOS.quote',
      src: 'Form.IC-RDOS.src'
    }
  ],
  questions: [
    {
      title: 'Form.Title.CardiacFrequency',
      numericDivisor: 65,
      placeholder: 'Form.Title.CardiacFrequencyPlaceholder'
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
    },
    {
      title: 'Form.Title.Oxygen',
      answers: [
        { text: 'Form.Answer.No', value: -0.7 },
        { text: 'Form.Answer.Yes', value: 0.7 }
      ]
    }
  ]
};
