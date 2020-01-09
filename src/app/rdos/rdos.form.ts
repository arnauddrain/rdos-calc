import { Form } from '../entities/form';

export const RdosForm: Form = {
  treshold: 4,
  base: 0,
  statements: [
    {
      quote: 'Form.RDOS.quote1',
      src: 'Form.RDOS.src1'
    },
    {
      quote: 'Form.RDOS.quote2',
      src: 'Form.RDOS.src2'
    }
  ],
  questions: [
    {
      title: 'Form.Title.CardiacFrequency',
      answers: [
        { text: '< 90/min', value: 0 },
        { text: '90 - 109/min', value: 1 },
        { text: '> 110/min', value: 2 }
      ]
    },
    {
      title: 'Form.Title.BreathingFrequency',
      answers: [
        { text: '< 19/min', value: 0 },
        { text: '19 - 30/min', value: 1 },
        { text: '> 30/min', value: 2 }
      ]
    },
    {
      title: 'Form.Title.Restlessness',
      answers: [
        { text: 'Form.Answer.No', value: 0 },
        { text: 'Form.Answer.Casual', value: 1 },
        { text: 'Form.Answer.Frequent', value: 2 }
      ]
    },
    {
      title: 'Form.Title.ParadoxicalBreathing',
      answers: [
        { text: 'Form.Answer.No', value: 0 },
        { text: 'Form.Answer.Yes', value: 2 }
      ]
    },
    {
      title: 'Form.Title.NeckUsage',
      answers: [
        { text: 'Form.Answer.No', value: 0 },
        { text: 'Form.Answer.Moderate', value: 1 },
        { text: 'Form.Answer.Intense', value: 2 }
      ]
    },
    {
      title: 'Form.Title.Grunting',
      answers: [
        { text: 'Form.Answer.No', value: 0 },
        { text: 'Form.Answer.Yes', value: 2 }
      ]
    },
    {
      title: 'Form.Title.NasalFlarring',
      answers: [
        { text: 'Form.Answer.No', value: 0 },
        { text: 'Form.Answer.Yes', value: 2 }
      ]
    },
    {
      title: 'Form.Title.Fear',
      answers: [
        { text: 'Form.Answer.No', value: 0 },
        { text: 'Form.Answer.Yes', value: 2 }
      ]
    }
  ]
};
