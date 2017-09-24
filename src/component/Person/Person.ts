import { connect } from 'inferno-redux'
import { bindActionCreators } from 'redux'

import { changeSex, changeWeight } from '../../action/action'
import Person from './Person.tsx'

import { State } from '../../reducer/constant.ts'

const mapStateToProps = (state: State) => ({
  gender: state.person.gender ? 1 : 0,
  weight: state.person.weight
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    onChangeSex: changeSex,
    onChangeWeight: changeWeight
  },
  dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person)
