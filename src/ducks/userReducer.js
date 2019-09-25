///initial state
const initialState = {
    username: ''
}

//action constants
const UPDATE_USERNAME = 'UPDATE_USERNAME'

//action builders

export const updateUsername = (username) => {
    return {
        type: UPDATE_USERNAME,
        payload: username
    }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case UPDATE_USERNAME:
          return {...state, username: action.payload}
    default:
      return state;
  }
};

export default reducer;
