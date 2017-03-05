import Component from 'inferno-component';

import { RatioAlcoholPerson } from '../models/alcohol.model';

import Weight from './weight';
import Gender from './gender';

export class RatioAlcohol extends Component<Props, any> {
	private _ratio_engine: RatioAlcoholPerson;
	constructor(props, context) {
		super(props, context);
		this.state = { weight: 65, gender: 0 , ratio: 0};
		this._ratio_engine = new RatioAlcoholPerson(this.state.gender, this.state.weight);
		const _ratio_tmp = this._ratio_engine.Calc();
		this.setState({ ratio:  _ratio_tmp});
		props.valueChanged(_ratio_tmp);
		this.setChangeWeight = this.setChangeWeight.bind(this);
		this.setChangeGender = this.setChangeGender.bind(this);
	}
	setChangeWeight(event) {
		this._ratio_engine.weight = event;
		const _ratio = this._ratio_engine.Calc();
		this.setState({ weight: event, ratio:  _ratio});
		this.props.valueChanged(_ratio);
	}
	setChangeGender(event) {
		this._ratio_engine.gender = event;
		const _ratio = this._ratio_engine.Calc();
		this.setState({ gender: event, ratio: _ratio });
		this.props.valueChanged(_ratio);
	}
	render(props){
		return (
			<div className="ratio-alcohol">
				<Weight valueChanged={ this.setChangeWeight } weight={ this.state.weight } />
				<Gender valueChanged={ this.setChangeGender } gender={ this.state.gender } />
			</div>
		);
	}
}

