import axios from "axios";

const initialState = {
  loading: false,
  characters: null
};

const GET_CHARACTERS = "GET_CHARACTERS";

export const getCharacters = url => {
  const promise = axios.get(url).then(res => res.data);

  return {
    type: GET_CHARACTERS,
    payload: promise
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS + "_PENDING":
      return {...state, characters: action.payload, loading: true};
    case GET_CHARACTERS + "_REJECTED":
      return {...state, characters: action.payload, loading: false};
    case GET_CHARACTERS + "_FULFILLED":
      return {...state, characters: action.payload, loading: false};
    default:
      return state;
  }
};

export default reducer;
