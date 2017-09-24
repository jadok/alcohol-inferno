import { AnyAction, combineReducers, Reducer } from 'redux';

import { TypePerson } from '../action/type'

import { initialState, State } from './constant.ts'

const reducer: Reducer<any> = (state = initialState.person, action: AnyAction) => {
  switch (action.type) {
    case TypePerson.WEIGHT: {
      return state
    }
    default:
      return state
  }
}

const reducers = combineReducers< State >({
  person: reducer
})

export default reducers
