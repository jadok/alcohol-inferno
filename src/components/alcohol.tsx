import { linkEvent } from 'inferno';
import Component from 'inferno-component';

import { RatioAlcohol } from './ratioalcohol';
import { AlcoholDose } from './alcoholdose';

export default class Alcohol extends Component<Props, any> {
	constructor(props, context) {
		super(props, context);

		this.state.ratio = 0;
		this.state.alcohols = Array();
		this.state.alcohol = 0;

		this.changeRatio = this.changeRatio.bind(this);
		this.changeDose = this.changeDose.bind(this);
		this.deleteDose = this.deleteDose.bind(this);
		this.changeAlcohol = this.changeAlcohol.bind(this);
	}
	changeRatio(r: number) {
		console.log("alcohol.changeRatio", r);
		this.setState({ ratio: r});
	}
	changeDose(id, dose) {
		let tmp = this.state.alcohols;
		tmp[id] = dose;
		this.setState({alcohols: tmp});
		this.changeAlcohol(tmp);
	}
	deleteDose(id, dose) {
		let tmp = this.state.alcohols;
		tmp = [...tmp.slice(0,id), ...tmp.slice(id+1)];
		console.log("remove node", tmp);
		this.setState({ alcohols: tmp });
		this.changeAlcohol(tmp);
	}
	changeAlcohol(alcohols) {
		let alco = alcohols.reduce((current, next) => { return current + next;});
		this.setState({ alcohol: (alco * this.state.ratio) });
	}
	addAlcohol(instance, event) {
		let _alcohols = instance.state.alcohols;
		_alcohols.push(0);
		console.log("add alcohol", _alcohols);
		instance.setState({ alcohols: _alcohols });
	}
	render(props){
		let self = this;
		let _alcohols = this.state.alcohols;
		return (
			<div className="alcohol">
				<h1>Alcohol Test</h1>
				<RatioAlcohol ratio={ this.state.ratio } valueChanged={this.changeRatio } />
				<button className="add-more" onClick={ linkEvent(this, this.addAlcohol )}>Add alcohol</button>
				<div className="alcohols">
					{(_alcohols).map((alcohol, id) => {
					return (
						<AlcoholDose deleteDose={ self.deleteDose } changeDose={self.changeDose} dose={alcohol} id={id} className="alcohol alcohol-{id}" />
					);
					})}
				</div>
				<span class="result">{ this.state.alcohol.toPrecision(3) }</span>
			</div>
		);
	}
}
/*

		*/