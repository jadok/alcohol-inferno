// import { linkEvent } from 'inferno'
import Component from 'inferno-component'

import InputForm from 'component/FormField/InputForm/InputForm.jsx'
import SelectForm from 'component/FormField/SelectForm/SelectForm.jsx'

import gender from './constant.js'

const toto = () => null

export default class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gender: 0,
      weight: 0
    }
  }
  render() {
    return (
      <div className="person">
        <InputForm id="weight" title="Weight" name="weight" type="number" handleChange={toto} value={this.props.weight} />
        <SelectForm id="gender" name="gender" options={gender} handleChange={toto} value={this.props.gender} />
      </div>
    )
  }
}
