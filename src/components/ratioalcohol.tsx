import Component from 'inferno-component';

import { RatioAlcoholPerson } from '../models/alcohol.model';

import Weight from './weight';
import Gender from './gender';
import {Props} from 'inferno';

export class RatioAlcohol extends Component<Props, any> {
	private _ratio_engine: RatioAlcoholPerson;
	constructor(props, context) {
		super(props, context);
		this.state = { weight: 65, gender: 0 , ratio: 0};
		this._ratio_engine = new RatioAlcoholPerson(this.state.gender, this.state.weight);

		this.setChangeWeight = this.setChangeWeight.bind(this);
		this.setChangeGender = this.setChangeGender.bind(this);
	}
	setChangeWeight(event) {
		const weight = parseInt(event.currentTarget.value, 10);

		this._ratio_engine.weight = weight;
		const _ratio = this._ratio_engine.Calc();
		this.setState({ weight: weight, ratio:  _ratio});
		this.props.valueChanged(_ratio);
	}
	setChangeGender(event) {
		const gender = parseInt(event.currentTarget.value, 10);

		this._ratio_engine.gender = gender;
		const _ratio = this._ratio_engine.Calc();
		this.setState({ gender: gender, ratio: _ratio });
		this.props.valueChanged(_ratio);
	}

	componentDidMount() {
		const _ratio_tmp = this._ratio_engine.Calc();
		this.setState({ ratio:  _ratio_tmp});
		this.props.valueChanged(_ratio_tmp);
	}

	render(props){
		return (
			<div className="ratio-alcohol">
				<Weight handleChange={ this.setChangeWeight } weight={ this.state.weight } />
				<Gender handleChange={ this.setChangeGender } gender={ this.state.gender } />
			</div>
		);
	}
}

