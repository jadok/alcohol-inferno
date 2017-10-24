export interface Alcohol {
  qty: number;
  degree: number;
}

export interface State {
  person: {
    weight: number;
    gender: boolean;
  },
  alcohol: Alcohol[]
}

export const initialState: State = {
  person: {
    gender: false,
    weight: 65
  },
  alcohol: [
  ]
}

export default initialState
