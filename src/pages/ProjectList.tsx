import Component from 'inferno-component';
import { env, GetHeader } from '../config/server';
import { ProjectListItem } from '../components/ProjectListItem';

export class ProjectList extends Component<any, any> {
	constructor(props, context) {
		super(props, context);

	//	this.tsxVersion = 2.22;
		this.state = {
			repository: []
		};
		this.api();
	}

	public api() {
		const that = this;
    const _url = env.url + 'trend/project/popularity';
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
							<ProjectListItem key={ element.key } id={ index } project={ element.name } popularity={ element.popularity } class="project"/>
						);
					})
				}
			</ul>
		);
	}
}

