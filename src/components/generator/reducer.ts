import { GENERATE_NEW_PIN } from "../../redux/actionConstants";

const initialState = {
  currentPinSet: ["", "", "", "", ""],
  isPinGenerated: false,
};

export function generatorReducer(
  state = initialState,
  action: { data: any; type: string }
) {
  switch (action.type) {
    case GENERATE_NEW_PIN:
      return {
        ...state,
        currentPinSet: action.data.newPinSet,
      };
    default:
      return state;
  }
}
