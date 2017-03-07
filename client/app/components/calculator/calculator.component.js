import template from './calculator.html';
import controller from './calculator.controller';
/*import tests from './calculator.spec';*/
import './calculator.sass';

let calculatorComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  /*tests*/
};

export default calculatorComponent;
