// import { linkEvent } from 'inferno'
import Component from 'inferno-component'

import InputForm from 'component/FormField/InputForm/InputForm'
import SelectForm from 'component/FormField/SelectForm/SelectForm'

import gender from './constant'

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
        <InputForm id="weight" title="Weight" name="weight" type="number" handleChange={this.props.onChangeWeight} value={this.props.weight} />
        <SelectForm id="gender" name="gender" options={gender} handleChange={this.props.onChangeSex} value={this.props.gender} />
      </div>
    )
  }
}
