import Alcohol from 'component/Form/Alcohol/Alcohol.withForm'
import ListAlcohols from 'component/ListAlcohols/ListAlcohols'
import Person from 'component/Person/PersonConnect'
const App = ({ alcohol }) => (
  <div className="container">
    <Person />
    <Alcohol />
    <ListAlcohols list={alcohol} />
  </div>
)

export default App
