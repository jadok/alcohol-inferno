export const TypePerson = {
  SEX: 'TYPE_CHANGE_GENDER',
  TYPE: 'TYPE_PERSON',
  WEIGHT: 'TYPE_CHANGE_WEIGHT'
}

export const changeWeight = weight => ({
  type: TypePerson.WEIGHT,
  weight
})

export const changeSex = sex => ({
  type: TypePerson.SEX,
  sex
})

/*

export const changePerson = () ({
  type:
})

*/

/*

export const INCREMENT_SFC = 'INCREMENT_SFC';
export const DECREMENT_SFC = 'DECREMENT_SFC';

export type Actions = {
  INCREMENT_SFC: {
    type: typeof INCREMENT_SFC,
  },
  DECREMENT_SFC: {
    type: typeof DECREMENT_SFC,
  },
};

// Action Creators
export const actionCreatorss = {
  incrementSfc: (): Actions[typeof INCREMENT_SFC] => ({
    type: INCREMENT_SFC,
  }),
  decrementSfc: (): Actions[typeof DECREMENT_SFC] => ({
    type: DECREMENT_SFC,
  })
}
*/
