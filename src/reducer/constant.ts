export interface State {
  person: {
    weight: number;
    gender: boolean;
  }
}

export const initialState: State = {
  person: {
    gender: false,
    weight: 65
  }
}

export default initialState
