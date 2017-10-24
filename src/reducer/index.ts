import { combineReducers } from 'redux'

import alcoholreducer from './alcoholReducer'
import personreducer from './personReducer'

import { State } from './constant'

const reducers = combineReducers< State >({
  person: personreducer,
  alcohol: alcoholreducer
})

export default reducers
