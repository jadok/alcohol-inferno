import Component from 'inferno-component';

export default class BurgerMenu extends Component<any, any> {
  public state = {
    toggle: false
  };

  constructor(props, context) {
    super(props, context);
    this.displayBurger = this.displayBurger.bind(this);
  }

  displayBurger(event) {
    this.setState({ toggle: !this.state.toggle });
  }

  burgerClass() {
    let burger = 'burger ';
    burger += (this.state.toggle ? 'open' : '');
    return burger;
  }

  render() {
    const classcss = this.burgerClass();
    return (
      <div id="burger-menu" className={classcss} onClick={this.displayBurger}>
        <span/>
        <span/>
        <span/>
      </div>
    );
  }
}
