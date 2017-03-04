import { linkEvent } from 'inferno';
import Component from 'inferno-component';

export default class Gender extends Component<Props, any> {
	constructor(props, context) {
		super(props, context);
		this.state = { gender: props.gender};
	}
	handleChange(instance, event) {
		instance.valueChanged(parseInt(event.target.value));
	}
	render(props){
		return (
			<div className="gender">
					<label for="GenderSelector">Choose your gender!</label>
					<select id="GenderSelector" name="gender" value={props.gender} onChange={ linkEvent(props, this.handleChange) } >
						<option value="0">Man</option>
						<option value="1">Woman</option>
					</select>
				</div>
			);
	}
}

