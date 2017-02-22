import Inferno from 'inferno';
import Component from 'inferno-component';

class Person extends Component {
 constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.changeSex(event.target.value);
  }

  render(props){
    return (
      <div className="gender">
          <label for="GenderSelector">Choose your gender!</label>
          <select id="GenderSelector" name="gender" value={this.props.sex} onChange={this.handleChange}>
            <option value="0">Man</option>
            <option value="1">Woman</option>
          </select>
        </div>
      );
  }
}

export default Person;
