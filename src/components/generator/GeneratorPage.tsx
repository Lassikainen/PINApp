import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { generatePinSetAction } from "./action";

const GeneratorPage = () => {
  const currentPinSet = useSelector(
    (state: any) => state.generatorReducer.currentPinSet
  );
  const dispatch = useDispatch();
  console.log("currentPin");
  console.log(currentPinSet);
  return (
    <div>
      <div className="page-container generator-page"></div>
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
            <div key={i} className="new-pin-container">
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

        <button>SAVE</button>
      </div>
    </div>
  );
};

export default GeneratorPage;
