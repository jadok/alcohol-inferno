// import { linkEvent } from 'inferno'
import Component from 'inferno-component'

import InputForm from 'component/FormField/InputForm/InputForm'
import SelectForm from 'component/FormField/SelectForm/SelectForm'

import gender from './constant.ts'

const toto = () => null

export default class Person extends Component<any, any> {
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
