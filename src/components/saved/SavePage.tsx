import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { updatePinNameAction, deletePinAction } from "./action";

import { SavedPIN } from "../../types";

const SavePage = () => {
  const savedPins : Array<SavedPIN> = useSelector((state: any) => state.savedReducer.savedPins);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="page-container saved-page">
        {savedPins.map(
          (pin: { name: string; pinSet: Array<string> }, i: number) => {
            return <PinRow name={pin.name} pinSet={pin.pinSet} index={i} />;
          }
        )}
      </div>
    </div>
  );
};

const PinRow = (props: {
  name: string;
  pinSet: Array<string>;
  index: number;
}) => {
  const dispatch = useDispatch();
  return (
    <div className="saved-pin-row">
      <input
        type="text"
        onChange={(evt) =>
          dispatch(updatePinNameAction(props.index, evt.target.value))
        }
        value={props.name}
      />
      {[...Array(5)].map((x, i) => {
        let currPin: string;
        try {
          currPin = props.pinSet[i];
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
 <button
            
            className="button delete-button"
            onClick={() => {
              dispatch(deletePinAction(props.index));
            }}
          >
            DELETE
          </button>
    </div>
  );
};

export default SavePage;
