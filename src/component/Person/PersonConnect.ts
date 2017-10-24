import { connect } from 'inferno-redux'
import { bindActionCreators } from 'redux'

import { action } from 'action/personAction'
import Person from './Person'

import { State } from 'reducer/constant'

const mapStateToProps = (state: State) => ({
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
