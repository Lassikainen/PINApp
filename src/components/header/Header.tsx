import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { changePageAction } from "./action";

const Header = () => {
  const currentPage = useSelector(
    (state: any) => state.headerReducer.currentPage
  );
  const dispatch = useDispatch();
  return (
    <div>
      <div className="header-row">
        <div
          className={
            currentPage === "generate"
              ? "header-option selected"
              : "header-option deselected"
          }
          onClick={() => dispatch(changePageAction("generate"))}
        >
          Generate
        </div>
        <div
          className={
            currentPage === "saved"
              ? "header-option selected"
              : "header-option deselected"
          }
          onClick={() => dispatch(changePageAction("saved"))}
        >
          Saved
        </div>
      </div>
    </div>
  );
};

export default Header;
