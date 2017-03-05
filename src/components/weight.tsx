import { linkEvent } from 'inferno';
import Component from 'inferno-component';

export default class Weight extends Component<Props, any> {
	constructor(props, context) {
		super(props, context);
	}
	handleChangeWeight(instance, event) {
		instance.valueChanged(parseInt(event.target.value));
	}
	render(props){
		return (
				<div className="weight">
					<label for="WeightInput">What is your weight(Kg)?</label>
					<input id="WeightInput" name="weight" type="number" value={ props.weight } onInput={ linkEvent(props, this.handleChangeWeight) } />
				</div>
		);
	}
}

