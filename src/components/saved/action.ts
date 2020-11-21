import {
  SAVE_PIN,
  UPDATE_PIN_NAME,
  DELETE_PIN,
} from "../../redux/actionConstants";

interface SavePinAction {
  type: typeof SAVE_PIN;
  data: { newPinSet: Array<string> };
}

interface UpdatePinNameAction {
  type: typeof UPDATE_PIN_NAME;
  data: { index: number; newName: string };
}

interface DeletePinAction {
  type: typeof DELETE_PIN;
  data: { index: number };
}

export const savePinAction = (newPinSet: Array<string>): SavePinAction => {
  return {
    type: SAVE_PIN,
    data: {
      newPinSet: newPinSet,
    },
  };
};

export const updatePinNameAction = (
  index: number,
  newName: string
): UpdatePinNameAction => {
  return {
    type: UPDATE_PIN_NAME,
    data: {
      index,
      newName,
    },
  };
};

export const deletePinAction = (index: number): DeletePinAction => {
  return {
    type: DELETE_PIN,
    data: {
      index,
    },
  };
};
