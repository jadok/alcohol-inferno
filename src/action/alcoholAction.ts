export const type = {
  ADD: 'ALCOHOL_ADD',
  REMOVE: 'ALCOHOL_REMOVE'
}

export const action = {
  add(qty: number, degree: number) {
    return {
      type: type.ADD,
      qty,
      degree
    }
  },
  remove(id: number) {
    return {
      type: type.REMOVE,
      id
    }
  }
}
