import { combineReducers } from 'redux'

import alcoholreducer from './alcoholReducer'
import personreducer from './personReducer'

const reducers = combineReducers({
  person: personreducer,
  alcohol: alcoholreducer
})

export default reducers
