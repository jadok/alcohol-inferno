import { combineReducers, Reducer } from 'redux'

import alcoholreducer from './alcoholReducer'
import personreducer from './personReducer'

import { State } from './constant'

const reducers = combineReducers< Reducer<any> >({
  person: personreducer,
  alcohol: alcoholreducer
})

export default reducers
