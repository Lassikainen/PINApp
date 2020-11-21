import { GENERATE_NEW_PIN } from "../../redux/actionConstants";

import { generateSetOfPins } from "../../utils/pinGeneratorUtils";

interface GeneratePinAction {
  type: typeof GENERATE_NEW_PIN;
  data: { newPinSet: Array<string> };
}

export const generatePinSetAction = (): GeneratePinAction => {
  const result = generateSetOfPins();
  console.log(result);
  return {
    type: GENERATE_NEW_PIN,
    data: {
      newPinSet: result,
    },
  };
};
