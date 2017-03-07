function CalculationService() {
  "ngInject";

  let calculation = [];
  let currentCalculatedValue = 0;
  let currentInputValue = 0;
  let resetDisplayOnInput = true;

  return {

    applyToCalculation(value) {
      calculation.push(value);

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
    },

    calculate() {
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
    },

    clearCalculator() {
      calculation = [];
      currentInputValue = 0;
    }
  }
}

export default CalculationService;

// const CalculationService = {
//   calculation: [],
//   currentCalculatedValue: 0,
//   currentInputValue: 0,
//   resetDisplayOnInput: true,
//
//   applyToCalculation: (value) => {
//     this.calculation.push(value);
//
//     if (value.match(/^[0-9]$/)) {
//       if (resetDisplayOnInput) {
//         this.currentInputValue = value;
//         this.resetDisplayOnInput = false;
//       } else {
//         this.currentInputValue += value;
//       }
//     } else {
//       this.resetDisplayOnInput = true;
//     }
//   },
//
//   calculate: () => {
//     if (this.calculation.length === 0) {
//       return;
//     } else if (calculation[0] == '0') {
//       this.calculation.splice(0, 1);
//     }
//
//     let i = 0;
//     while(i < this.calculation.length) {
//       if (this.calculation[i].match(/^[+\-*/]$/)) {
//         let operation =  this.calculation[i];
//         if (this.calculation[i+1].match(/^[+\-*/]$/)) {
//           if (this.calculation[i+1] === operation) {
//             this.calculation.splice(i+1, 1)
//           } else {
//             this.calculation.splice(i, 1)
//           }
//
//           i--;
//         }
//       }
//
//       i++;
//     }
//
//     if (this.calculation[0].toString()[0].match(/^[0-9]$/)) {
//       this.currentCalculatedValue = eval(this.calculation.join(''));
//     } else {
//       this.currentCalculatedValue = eval(this.currentCalculatedValue += this.calculation.join(''));
//     }
//
//     this.currentInputValue = this.currentCalculatedValue;
//     this.resetDisplayOnInput = true;
//     this.calculation = [];
//   },
//
//   clearCalculator: () => {
//     this.calculation = [];
//     this.currentInputValue = 0;
//   }
// };
//
// export default CalculationService;
