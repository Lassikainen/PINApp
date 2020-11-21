import { CHANGE_PAGE } from "../../redux/actionConstants";

interface ChangePageAction {
  type: typeof CHANGE_PAGE;
  data: { newPage: string };
}

//Action to change the page displyed to the user
export const changePageAction = (newPage: string): ChangePageAction => {
  return {
    type: CHANGE_PAGE,
    data: {
      newPage: newPage,
    },
  };
};
