class Calculator {
  constructor() {
    this.name = 'Calculator';
    this.calculation = [];
    this.currentCalculatedValue = 0;
    this.currentInputValue = 0;
    this.resetDisplayOnInput = true;
    this.applyToCalculation = (value) => {
      this.calculation.push(value);

      if (value.match(/^[0-9]$/)) {
        if (this.resetDisplayOnInput) {
          this.currentInputValue = value;
          this.resetDisplayOnInput = false;
        } else {
          this.currentInputValue += value;
        }
      } else {
        this.resetDisplayOnInput = true;
      }
    };
    this.calculate = () => {
      if (this.calculation.length === 0) {
        return;
      } else if (this.calculation[0] == '0') {
        this.calculation.splice(0, 1);
      }

      let i = 0;
      while(i < this.calculation.length) {
        if (this.calculation[i].match(/^[+\-*/]$/)) {
          let operation =  this.calculation[i];
          if (this.calculation[i+1].match(/^[+\-*/]$/)) {
            if (this.calculation[i+1] === operation) {
              this.calculation.splice(i+1, 1)
            } else {
              this.calculation.splice(i, 1)
            }

            i--;
          }
        }

        i++;
      }

      if (this.calculation[0].toString()[0].match(/^[0-9]$/)) {
        this.currentCalculatedValue = eval(this.calculation.join(''));
      } else {
        this.currentCalculatedValue = eval(this.currentCalculatedValue += this.calculation.join(''));
      }

      this.currentInputValue = this.currentCalculatedValue;
      this.resetDisplayOnInput = true;
      this.calculation = [];
    };
    this.clearCalculator = () => {
      this.calculation = [];
      this.currentInputValue = 0;
    }
  }
}

export default Calculator;
