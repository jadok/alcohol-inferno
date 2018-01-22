import { connect } from 'inferno-redux'
import { bindActionCreators } from 'redux'

import { action } from 'action/personAction.js'
import Person from './Person.jsx'


const mapStateToProps = state => ({
  gender: state.person.gender ? 1 : 0,
  weight: state.person.weight
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    onChangeSex: event => action.changeSex(event.target.value),
    onChangeWeight: event => action.changeWeight(event.target.value)
  },
  dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person)
