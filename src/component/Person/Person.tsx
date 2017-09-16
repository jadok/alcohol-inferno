import Component from 'inferno-component';

import { InputForm, SelectForm } from '../InputForm/InputForm'
import gender from './constant'

class Person extends Component<any, any> {
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
				<InputForm id="weight" name="weight" type="number" />
				<SelectForm id="gender" name="gender" options={gender} />
			</div>
		)
	}
}
