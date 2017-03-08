function CalculationService() {
  "ngInject";

  return {
    applyToCalculation(value, resetDisplayOnInput, currentInputValue) {
      if (value.match(/^[0-9]$/)) {
        if (resetDisplayOnInput) {
          currentInputValue = value;
          resetDisplayOnInput = false;
        } else {
          currentInputValue += value;
        }
      } else {
        resetDisplayOnInput = true;
      }

      return {
        resetDisplayOnInput: resetDisplayOnInput,
        currentInputValue: currentInputValue
      }
    },

    calculate(calculation, currentCalculatedValue, currentInputValue, resetDisplayOnInput) {
      if (calculation.length === 0) {
        return;
      } else if (calculation[0] == '0') {
        calculation.splice(0, 1);
      }

      let i = 0;
      while(i < calculation.length) {
        if (calculation[i].match(/^[+\-*/]$/)) {
          let operation =  calculation[i];
          if (calculation[i+1].match(/^[+\-*/]$/)) {
            if (calculation[i+1] === operation) {
              calculation.splice(i+1, 1)
            } else {
              calculation.splice(i, 1)
            }

            i--;
          }
        }

        i++;
      }

      if (calculation[0].toString()[0].match(/^[0-9]$/)) {
        currentCalculatedValue = eval(calculation.join(''));
      } else {
        currentCalculatedValue = eval(currentCalculatedValue += calculation.join(''));
      }

      currentInputValue = currentCalculatedValue;
      resetDisplayOnInput = true;
      calculation = [];

      return {
        calculation: calculation,
        currentCalculatedValue: currentCalculatedValue,
        currentInputValue: currentInputValue,
        resetDisplayOnInput: resetDisplayOnInput
      };
    },
  }
}

export default CalculationService;
