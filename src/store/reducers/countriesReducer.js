import {
  FIND_COUNTRIES,
  FIND_COUNTRY_HISTORY,
  FIND_VACCINES_HISTORY,
} from "../constants";

const initialState = {
  countries: [],
  history: [],
  vaccines: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_COUNTRIES:
      return { ...state, countries: action.countries };
    case FIND_COUNTRY_HISTORY:
      return { ...state, history: action.history };
    case FIND_VACCINES_HISTORY:
      return { ...state, vaccines: action.vaccines };
    default:
      return state;
  }
};
