import { withForm, WithFormOption } from 'hoc/withForm'
import Alcohol from './Alcohol'

const option: WithFormOption = {
  values: [
    {
      name: 'qty',
      defaultValue: '0',
      validate: () => ''
    },
    {
      name: 'degree',
      defaultValue: '0',
      validate: () => ''
    }
  ]
}

const AlcoholHoc = withForm(Alcohol, option)

export default AlcoholHoc
