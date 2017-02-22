import {version} from 'inferno';
import Component from 'inferno-component';
import {Incrementer} from './components/Incrementer';

import Alcohol from './components/alcohol';

export class MyComponent extends Component<any, any> {
	private tsxVersion: number;
	public state: {value: number, ratio: number};

	constructor(props, context) {
		super(props, context);
		this.state.ratio = 0;
		this.tsxVersion = 2.15; /* This is typed value */
	}
	changeRatio = (value: number) => {
		this.setState({
			ratio: value
		});
	}
	/*	public state: {value: number};

	constructor(props, context) {
		super(props, context);

		this.state = {
			value: 1
		};
	}

	doMath = () => {
		this.setState({
			value: addOne(this.state.value)
		});
	}*/
	render() {
		return (
			<div>
				<h1>{`Welcome to Inferno ${version} TSX ${this.tsxVersion}`}</h1>
				<Incrementer name={'Crazy button'}/>
				<Alcohol />
			</div>
		);
	}
}
