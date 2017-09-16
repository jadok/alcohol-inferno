import { linkEvent } from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

import BurgerMenu from './BurgerMenu';

export default class Header extends Component<any, any> {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <header className="header">
        <div className="menu">
          <h1>Github Trends</h1>
          <BurgerMenu />
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/project">Project</Link>
          <Link to="/project/add">New project</Link>
        </nav>
      </header>
    );
  }
}
