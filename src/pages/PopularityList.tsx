import Component from 'inferno-component';

import { ListRepository } from '../components/ListRepository';

import { env, GetHeader } from '../config/server';

export class PopularityList extends Component<any, any> {
	constructor(props, context) {
		super(props, context);
		this.state = {
			repository: []
		};
		this.api();
	}

	public api() {
		const that = this;
		const _url = env.url + 'trend/github/popularity';
		fetch(_url, new GetHeader())
			.then(function(response) {
				if (response.ok) {
					response.json().then(function(data) {
						console.log(data);
						that.setState({repository: data});
					});
				} else {
					console.log(response, 'Mauvaise réponse du réseau');
				}
			})
			.catch(function(error) {
				console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
			});
	}
	public render() {
		var _tmp_repo = this.state.repository;
		return (
			<ul className="list-repository">
				{
					(_tmp_repo).map(function(element, index) {
						return (
							<ListRepository key={ element.key } id={ index } project={ element.project} name={ element.name } owner={ element.owner } popularity={ element.popularity } class="repository"/>
						);
					})
				}
			</ul>
		);
	}
}