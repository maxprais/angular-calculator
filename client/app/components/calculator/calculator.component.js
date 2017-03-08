import template from './calculator.html';
import controller from './calculator.controller';
import './calculator.sass';

let calculatorComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  selector: 'calculator'
};

export default calculatorComponent;
