//Function to check if pinToCheck already exists within listOfPins
//Returns true if there is a duplicate
//Returns false if no duplicates are found
export const checkForDuplicatePINs = (
  pinToCheck: Array<string>,
  listOfPINs: Array<Array<string>>
): boolean => {
  let duplicatesFound: boolean;

  //Check if any PIN in the listOfPINs both has the same length, and each of the elements matches the elements in pinToCheck
  duplicatesFound = listOfPINs.some((pinInList) => {
    if (pinToCheck.length !== pinInList.length) {
      return false;
    } else {
      //return false if we have found a mismatch
      for (let i: number = 0; i < pinInList.length; i++) {
        if (pinToCheck[i] !== pinInList[i]) {
          return false;
        }
      }
    }
    //return true if we haven't found any mismatches
    return true;
  });
  return duplicatesFound;
};
