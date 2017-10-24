export const type = {
  SEX: 'TYPE_CHANGE_GENDER',
  WEIGHT: 'TYPE_CHANGE_WEIGHT',
}

export const action = {
  changeWeight(weight) {
    return ({
      type: type.WEIGHT,
      weight
    })
  },
  changeSex(sex) {
    return ({
      type: type.SEX,
      sex
    })
  }
}
