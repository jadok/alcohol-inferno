import { AnyAction, Reducer } from 'redux'

import { type } from 'action/alcoholAction'

import { initialState } from './constant'

let alcoholid = 0

const reducer: Reducer<any> = (state = initialState.alcohol, action: AnyAction) => {
  switch (action.type) {
    case type.ADD: {
      const newstate = [
        ...state,
        {
          id: alcoholid++,
          qty: action.qty,
          degree: action.qty
        }
      ]
      return newstate
    }
    case type.REMOVE:
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}

export default reducer
