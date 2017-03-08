class CalculatorController {
  constructor(CalculationService) {
    this.name = 'Calculator';
    let calculation = [];
    let currentCalculatedValue = 0;
    this.currentInputValue = 0;
    let resetDisplayOnInput = true;
    this.applyToCalculation = (value) => {
      let calculatorData = CalculationService.applyToCalculation(value, resetDisplayOnInput, this.currentInputValue);
      resetDisplayOnInput = calculatorData.resetDisplayOnInput;
      this.currentInputValue = calculatorData.currentInputValue;
      calculation.push(value);
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
