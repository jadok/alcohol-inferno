import Component from 'inferno-component';

export interface PropsLisRepository {
  class: string;
  owner: string;
  name: number;
  popularity: number;
  project: number;
}

export const ListRepository = (props:PropsLisRepository) => {
  <li className={ this.props.class } >
    <span className="project">{ this.props.project }</span>
    <span className="owner">{ this.props.owner }</span>
    <span className="name">{ this.props.name }</span>
    <span className="popularity">{ this.props.popularity }</span>
  </li>
}
