import Component from 'inferno-component';

import { env, GenerateFormHeader } from '../config/server';
import { InputSubmitForm, InputTextForm } from '../components/standards/InputForm';

export class RepositoryAdd extends Component<any, any> {

	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		
		document.getElementsByTagName('form')[0].addEventListener('submit', function(evt){
    	evt.preventDefault();
			fetch(this.action, GenerateFormHeader(this))
				.then(function (response) {
					if (response.ok) {
						response.json().then(function(data) {
							console.log(data);
						});
					} else {
						response.json().then(function(data) {
							console.log(data);
						});
						console.log(response, 'Mauvaise réponse du réseau');
					}
				})
				.catch(function(error) {
					console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
				});
			return ;
		});
	}

	public render() {
		const _url = env.url + 'trend/github/';
		return (
			<form method="post" action={ _url }>
				<h2>{ this.props.id }</h2>
				<fieldset>
					<legend>Add a Repository</legend>
					<InputTextForm id="name" name="name" value="Name" />
					<InputTextForm id="owner" name="owner" value="Owner" />
					<InputTextForm id="project" name="project" value="Project" />
					<InputSubmitForm value="Add" />
				</fieldset>
			</form>
		);
	}
}
