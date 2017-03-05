import {linkEvent, Props} from 'inferno';
import Component from 'inferno-component';

import { calcDose } from '../models/alcohol.model';

export class AlcoholDose extends Component<Props, any> {
	constructor(props, context) {
		super(props, context);
		this.state = {
			quantity: 0,
			degree: 0,
			dose: props.dose
		};
	}
	handleQuantity(instance, event) {
		instance.setStateSync({quantity: event.target.value});
		instance.state.quantity = event.target.value;
		// dont write to own props
		let newDose = calcDose(event.target.value, instance.state.degree);
		instance.props.changeDose(instance.props.id, newDose);
	}
	handleDegree(instance, event) {
		instance.setStateSync({degree: event.target.value});
		// dont write to own props
		let newDose = calcDose(instance.state.quantity, event.target.value);
		instance.props.changeDose(instance.props.id, newDose);
	}
	deleteClick(instance, event) {
		instance.deleteDose(instance.id);
	}
	render(props) {
		console.log("alcoholdose", props.id, props.dose, this.state.quantity, this.state.degree);
		return (
			<div className="dose" id={props.id}>
				<div className="quantity">
					<label for="QuantityInput">Quantity (ml)</label>
					<input id="QuantityInput" name="quantity" type="number" value={ this.state.quantity } onInput={ linkEvent(this, this.handleQuantity) } />
				</div>
				<div className="degree">
					<label for="DegreeInput">Degree of the alcohol (°)</label>
					<input id="DegreeInput" type="number" value={ this.state.degree } onInput={ linkEvent(this, this.handleDegree) } />
				</div>
				<button className="no-drink" onClick={ linkEvent(props, this.deleteClick) } type="button">Not my drink man!</button>
			</div>
		);
	}
}

