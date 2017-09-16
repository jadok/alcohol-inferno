import Component from 'inferno-component';

export interface PropsProjectList {
 class: string;
 popularity: number;
 project: number;
}

export const ProjectListItem = (props:PropsProjectList) => {
  <li className={ this.props.class }>
    <span className="project">{ this.props.project }</span>
    <span className="popularity">{ this.props.popularity }</span>
  </li>
}