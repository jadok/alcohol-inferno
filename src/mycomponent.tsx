import Component from 'inferno-component';

import Alcohol from './components/alcohol';

export class MyComponent extends Component<any, any> {

	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<Alcohol />
		);
	}
}
