import { type } from 'action/personAction'

import { initialState } from './constant'

const reducer = (state = initialState.person, action) => {
  switch (action.type) {
    case type.WEIGHT: {
      const newstate = Object.assign({}, state, { weight: parseInt(action.weight, 10) })
      return newstate
    }
    case type.SEX: {
      const newstate = Object.assign({}, state, { sex: action.sex === '1' })
      return newstate
    }
    default:
      return state
  }
}

export default reducer