import {Props} from 'inferno';
import Component from 'inferno-component';

import { RatioAlcohol } from './ratioalcohol';
import { AlcoholDose } from './alcoholdose';

let doseKey = 0;

export default class Alcohol extends Component<Props, any> {
	constructor(props, context) {
		super(props, context);

		this.state = {
			ratio: 0,
			alcohols: [],
			alcohol: 0
		};

		this.changeRatio = this.changeRatio.bind(this);
		this.changeDose = this.changeDose.bind(this);
		this.deleteDose = this.deleteDose.bind(this);
		this.addAlcohol = this.addAlcohol.bind(this);
	}

	// this is not used as callback and does not need to be bound
	_calculateAlcohol(alcohols) {
		let alco = 0;
		for (let i = 0; i < alcohols.length; i++) {
			alco += alcohols[i].value;
		}

		return (alco * this.state.ratio);
	}

	changeRatio(r: number) {
		console.log("alcohol.changeRatio", r);
		this.setState({ ratio: r});
	}
	changeDose(id, dose) {
		let tmp = this.state.alcohols;
		tmp[id].value = dose;
		this.setState({alcohols: tmp, alcohol: this._calculateAlcohol(tmp)}); // do single setState only
	}
	deleteDose(id) {
		let tmp = this.state.alcohols;
		tmp.splice(id, 1); // remove from index 1 item
		console.log("remove node", tmp);
		this.setState({alcohols: tmp, alcohol: this._calculateAlcohol(tmp)}); // do single setState only
	}
	addAlcohol(event) {
		let _alcohols = this.state.alcohols;
		_alcohols.push({
			value: 0,
			key: doseKey++ /* generate unique key */
		});
		console.log("add alcohol", _alcohols);
		this.setState({alcohols: _alcohols, alcohol: this._calculateAlcohol(_alcohols)});
	}
	render(props){
		let self = this;
		let _alcohols = this.state.alcohols;

		return (
			<div className="alcohol">
				<h1>Alcohol Test</h1>
				<RatioAlcohol ratio={ this.state.ratio } valueChanged={this.changeRatio } />
				<button className="add-more" onClick={ this.addAlcohol }>Add alcohol</button>
				<div className="alcohols">
					{(_alcohols).map((alcohol, index) => {
					return (
						<AlcoholDose deleteDose={ self.deleteDose } changeDose={self.changeDose} key={alcohol.key} dose={alcohol} id={index} className="alcohol alcohol-{id}" />
					);
					})}
				</div>
				<span class="result">{ this.state.alcohol.toPrecision(3) }</span>
			</div>
		);
	}
}
