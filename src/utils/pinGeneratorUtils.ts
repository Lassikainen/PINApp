//function to generate a random integer between 0 and 9 inclusive
const getRandomSingleDigit = (): number => {
  return Math.floor(Math.random() * 10);
};

//Function to generate a set of 5 PINs
export const generateSetOfPins = (): Array<string> => {
  let pinArray: Array<string> = [];

  //Generate pins until we have 5
  while (pinArray.length < 5) {
    let newPin: string = generateSinglePin();
    //Skip the current pin if a matching pin already exists in the pinArray
    if (pinArray.includes(newPin)) {
      //skip the current pin
    } else {
      pinArray.push(newPin);
    }
  }

  return pinArray;
};

//Function to generate a single, valid PIN - a numerical string of length 4
const generateSinglePin = (): string => {
  let isValidPin: boolean = false;

  let newPin: Array<number> = [];
  //Keep generating PINs until a new one is found
  while (!isValidPin) {
    for (let i: number = 0; i < 4; i++) {
      newPin.push(getRandomSingleDigit());
    }
    //If the PIN is not valid, restart the PIN
    isValidPin = checkValidPin(newPin);
    if (!isValidPin) {
      newPin = [];
    }
  }
  return newPin.join("");
};

//Function to check whether a 4-digit PIN meets the requirements
const checkValidPin = (inputPin: Array<number>): boolean => {
  let isConsecutiveAscending: boolean = false;
  let isConsecutiveDescending: boolean = false;
  let isConsecutiveNumbers: boolean = false;
  let isValid: boolean = true;

  if (inputPin.length !== 4) {
    return false;
  }

  inputPin.forEach((digit: number, i) => {
    //Return false if any digit is not an integer or greater than 9 or less than 0
    if (!Number.isInteger(digit) || digit > 9 || digit < 0) {
      isValid = false;
    }
    //return false if two consective matching numbers are found
    if (i > 0) {
      isConsecutiveNumbers = inputPin[i] === inputPin[i - 1];
      if (isConsecutiveNumbers) {
        isValid = false;
      }
    }
    //return false if 3 consecutive ascending or descending digits are found
    if (i > 1) {
      isConsecutiveAscending =
        inputPin[i] === inputPin[i - 1] - 1 &&
        inputPin[i] === inputPin[i - 2] - 2;
      isConsecutiveDescending =
        inputPin[i] === inputPin[i - 1] + 1 &&
        inputPin[i] === inputPin[i - 2] + 2;

      if (isConsecutiveAscending || isConsecutiveDescending) {
        isValid = false;
      }
    }
  });

  return isValid;
};
