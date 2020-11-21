import { CHANGE_PAGE } from "../../redux/actionConstants";

interface ChangePageAction {
  type: typeof CHANGE_PAGE;
  data: { newPage: string };
}

export const changePageAction = (newPage: string): ChangePageAction => {
  return {
    type: CHANGE_PAGE,
    data: {
      newPage: newPage,
    },
  };
};
