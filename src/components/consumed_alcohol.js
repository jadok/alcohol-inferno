import Inferno from 'inferno';
import Component from 'inferno-component';

class ConsumedAlcohol extends Component {
 constructor(props) {
    super(props);
  }

  render(props){
    return (
      <div className="Result">
          <span>Total:</span>
          <span>{this.props.alcohol.toPrecision(3)}</span>
        </div>
      );
  }
}

export default ConsumedAlcohol;
