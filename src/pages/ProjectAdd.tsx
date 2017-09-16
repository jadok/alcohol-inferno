import Component from 'inferno-component';

import { env, GenerateFormHeader } from '../config/server';
import { InputSubmitForm, InputTextForm } from '../components/standards/InputForm';

export class ProjectAdd extends Component<any, any> {

	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		
		document.getElementsByTagName('form')[0].addEventListener('submit', (evt) => {
    	evt.preventDefault();
		
			fetch((evt.target as HTMLFormElement).action, GenerateFormHeader(evt.target as HTMLFormElement))
				.then((response) => {
					if (response.ok) {
						response.json().then((data) => {
							console.log(data);
						});
					} else {
						response.json().then((data) => {
							console.log(data);
						});
						console.log(response, 'Mauvaise réponse du réseau');
					}
				})
				.catch((error) => {
					console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
				});
			return ;
		});
	}

	public render() {
		const _url = env.url + 'project/';
		console.log(this.props.params);
		return (
			<form method="post" action={ _url }>
				<h2>{ this.props.id }</h2>
				<fieldset>
					<legend>Add a projet</legend>
					<InputTextForm id="project_name" name="name" value="Nom" />
					<InputTextForm id="description" name="desc" value="Description" />
					<InputTextForm id="domaine" name="domaine" value="Domaine" />
					<InputSubmitForm value="Add" />
				</fieldset>
			</form>
		);
	}
}
