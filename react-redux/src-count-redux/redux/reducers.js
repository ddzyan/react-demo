import { ADD, MINUS } from "./action-types";

const counter = (state = 0, action) => {
  console.log("counter() :", action);
  switch (action.type) {
    case ADD:
      return state + Number.parseInt(action.number);
    case MINUS:
      return state - Number.parseInt(action.number);

    default:
      return state;
  }
};

export default counter;
