import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { generatePinSetAction } from "./action";

import { savePinAction } from "../saved/action";

import { checkForDuplicatePINs } from "../../utils/pinDuplicateChecker";

const GeneratorPage = () => {
  const currentPinSet = useSelector(
    (state: any) => state.generatorReducer.currentPinSet
  );

  const isPinGenerated = useSelector(
    (state: any) => state.generatorReducer.isPinGenerated
  );
  const savedPins = useSelector((state: any) => state.savedReducer.savedPins);

  const dispatch = useDispatch();
  return (
    <div>
      <div className="page-container generator-page">
        <div className="new-pin-row">
          {[...Array(5)].map((x, i) => {
            let currPin: string;
            try {
              currPin = currentPinSet[i];
            } catch {
              //catch in case of out of bounds errors
              currPin = "";
            }
            return (
              <div key={i} className="new-pin-container" data-testid="new-pin-container">
                {currPin}
              </div>
            );
          })}
        </div>
        <div className="actions-section">
          <button
            className="button generator-button"
            onClick={() => {
              dispatch(generatePinSetAction());
            }}
          >
            GENERATE
          </button>

          <button
            //Disable the button if a pin has not been generated yet, or if there is a duplicate PIN already
            disabled={
              !isPinGenerated || checkForDuplicatePINs(currentPinSet, savedPins)
            }
            className="button save-button"
            onClick={() => {
              dispatch(savePinAction(currentPinSet));
            }}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneratorPage;
