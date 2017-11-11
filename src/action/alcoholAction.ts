export const type = {
  ADD: 'ALCOHOL_ADD',
  REMOVE: 'ALCOHOL_REMOVE'
}

export const action = {
  /**
   * Action Creator: Add a drink.
   * 
   * @param qty {number} The quantity of alcohol.
   * @param degree {number} The Degree of the alcohol.
   */
  add(qty: number, degree: number) {
    return {
      type: type.ADD,
      qty,
      degree
    }
  },

  /**
   * Action Creator: Remove a drink.
   *
   * @param id {number} The id of the dring.
   */
  remove(id: number) {
    return {
      type: type.REMOVE,
      id
    }
  }
}
