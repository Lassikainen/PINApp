import {
  GENERATE_NEW_PIN,
  RESET_GENERATOR,
  SAVE_PIN,
} from "../../redux/actionConstants";

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
        isPinGenerated: true,
      };
    case SAVE_PIN:
      return {
        ...state,
        isPinGenerated: false,
      };
    case RESET_GENERATOR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
