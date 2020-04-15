import { FETCH_SUCCESS2, FETCH_ERROR2, FETCHING_DATA2 } from "../actions";

const initialState = {
  dataTenDay: [],

  isLoading: false,
  error: "",
};

export function fetchChangesByDateRed(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA2: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_SUCCESS2: {
      return {
        ...state,
        dataTenDay: action.payload,
        isLoading: false,
        error: "",
      };
    }
    case FETCH_ERROR2: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
