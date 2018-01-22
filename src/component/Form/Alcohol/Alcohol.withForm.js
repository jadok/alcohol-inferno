import { withForm } from 'hoc/withForm.jsx'
import Alcohol from './Alcohol.jsx'

const option = {
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
