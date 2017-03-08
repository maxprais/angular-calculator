class CalculatorController {
  constructor(CalculationService) {
    this.name = 'Calculator';
    let calculation = [];
    let currentCalculatedValue = 0;
    this.currentInputValue = 0;
    let resetDisplayOnInput = true;
    this.applyToCalculation = (value) => {
      calculation.push(value);

      if (value.match(/^[0-9]$/)) {
        if (resetDisplayOnInput) {
          this.currentInputValue = value;
          resetDisplayOnInput = false;
        } else {
          this.currentInputValue += value;
        }
      } else {
        resetDisplayOnInput = true;
      }
    };

    this.clearCalculator = () => {
      calculation = [];
      this.currentInputValue = 0;
    };

    this.makeCalculation = () => {
      let calculatorData = CalculationService.calculate(
                              calculation,
                              currentCalculatedValue,
                              this.currentInputValue,
                              resetDisplayOnInput
                            );
      calculation = calculatorData.calculation;
      this.currentInputValue = calculatorData.currentInputValue;
      currentCalculatedValue = calculatorData.currentCalculatedValue;
      resetDisplayOnInput = calculatorData.resetDisplayOnInput;
    };
  }
}

export default CalculatorController;
