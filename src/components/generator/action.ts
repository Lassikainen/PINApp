import { GENERATE_NEW_PIN } from "../../redux/actionConstants";

import { generateSetOfPins } from "../../utils/pinGeneratorUtils";

interface GeneratePinAction {
  type: typeof GENERATE_NEW_PIN;
  data: { newPinSet: Array<string> };
}

//Action to generate a new pin using a utility function and save to state
export const generatePinSetAction = (): GeneratePinAction => {
  const result = generateSetOfPins();
  return {
    type: GENERATE_NEW_PIN,
    data: {
      newPinSet: result,
    },
  };
};
