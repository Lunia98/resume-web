import { LENGUAGE } from "./actions";

const initialState = {
  lenguage: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LENGUAGE:
      return {
        ...state,
        lenguage: action.payload,
      };

    default:
      return { ...state };
  }
};
export default reducer;
