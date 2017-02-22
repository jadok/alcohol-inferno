import Inferno from 'inferno';
import Component from 'inferno-component';

//import Toggle from '../library/toggle';

import Gender from './gender';
import Weight from './weight';
import Alcohol from './alcohol';
import ConsumedAlcohol from './consumed_alcohol';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: undefined,
      picture: undefined,
      sex: 0,
      weight: 65,
      ratio: undefined,
      alcohols: [0],
      alcohol:0.0
    }
    this.sex_ratio = [
      0.7,
      0.6
    ];

    this.state.ratio = this.ratioFormula();
    this.changeSex = this.changeSex.bind(this);
    this.changeWeight = this.changeWeight.bind(this);
    this.changeDose = this.changeDose.bind(this);
    this.deleteDose = this.deleteDose.bind(this);
    this.addDrinks = this.addDrinks.bind(this);
  }

  ratioFormula() {
    return 0.806 / (this.sex_ratio[this.state.sex] * this.state.weight);
  }

  alcoholFormula() {
    /*return this.state.alcohols.reduce((p, c) => {
      return p + c * this.state.ratio;
    })*/
    var res = 0;
    for (var i = 0; i < this.state.alcohols.length; i++) {
      res += this.state.alcohols[i] * this.state.ratio;
    }
    return res;
  }

  changeAlcohol() {
    var alcohol = this.alcoholFormula();
    this.setState({alcohol: alcohol});
  }
  changeRatio() {
    var ratio = this.ratioFormula();
    this.setState({ratio});
  }
  changeSex(sex) {
    this.setState({sex});
    this.changeRatio();
    this.changeAlcohol();
  }
  changeWeight(weight) {
    this.setState({weight: weight});
    this.changeRatio();
    this.changeAlcohol();
  }

  changeDose(id, dose) {
    var tmp = this.state.alcohols;
    tmp[id] = dose;
    this.setState({alcohols:tmp});
    this.changeAlcohol();
  }
  deleteDose(id) {
    var tmp = this.state.alcohols;
    var a1 = tmp.slice(0, id);
    var a2 = tmp.splice(1, tmp.length);
    tmp = a1.concat(a2);
    this.setState({alcohols:tmp});
    this.changeAlcohol();
  }
  addDrinks() {
    this.state.alcohols.push(0);
    this.setState({alcohols: this.state.alcohols});
    this.changeAlcohol();
  }

  render() {
    var self = this;
    return (
      <div className="container">
        <div className="alcoholApp">
          <Gender changeSex={ self.changeSex } sex={ self.state.sex } ratio={ self.state.ratio }/>
          <Weight changeWeight={self.changeWeight} weight={self.state.weight }/>
          <button className="add-drink" onClick={ self.addDrinks } type="button">Need a drink</button>
          <h2 className="showOff">My drinks</h2>
          <div className="alcohols">
            {(self.state.alcohols).map((alcohol, id) => {
              return (
                <Alcohol deleteDose={ self.deleteDose } changeDose={self.changeDose} dose={alcohol} id={id} className="alcohol alcohol-{id}" />
              );
            })}
          </div>
          <ConsumedAlcohol alcohol={self.state.alcohol} />
        </div>
      </div>
    );
  }
}

export default App;
