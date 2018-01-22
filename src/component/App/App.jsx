import Alcohol from 'component/Form/Alcohol/Alcohol.withForm.jsx'
import ListAlcohols from 'component/ListAlcohols/ListAlcohols.jsx'
import Person from 'component/Person/PersonConnect.js'

const App = ({ alcohol }) => (
  <div className="container">
    <Person />
    <Alcohol />
    <ListAlcohols list={alcohol} />
  </div>
)

export default App
