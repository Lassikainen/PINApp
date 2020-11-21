import {
  SAVE_PIN,
  UPDATE_PIN_NAME,
  DELETE_PIN,
} from "../../redux/actionConstants";
import { SavedPIN } from "../../types";

const initialState = {
  savedPins: [],
};

export function savedReducer(
  state = initialState,
  action: { data: any; type: string }
) {
  let savedPins: Array<SavedPIN>;
  switch (action.type) {
    case SAVE_PIN:
      savedPins = [...state.savedPins];
      const pinObj = {
        name: "Name",
        pinSet: action.data.newPinSet,
      };
      savedPins.push(pinObj);
      return { ...state, savedPins };
    case UPDATE_PIN_NAME:
      savedPins = [...state.savedPins];
      let targetPin = savedPins[action.data.index];
      targetPin.name = action.data.newName;
      return { ...state, savedPins };
    case DELETE_PIN:
      savedPins = [...state.savedPins];
      savedPins.splice(action.data.index, 1);
      return { ...state, savedPins };
    default:
      return state;
  }
}
