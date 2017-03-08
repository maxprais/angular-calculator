import angular from 'angular';
import Calculator from './calculator/calculator';
import calculatorComponent from './calculator/calculator.component';

let componentModule = angular.module('app.components', [
  Calculator
])

.component('calculatorComponent', calculatorComponent)
.name;

export default componentModule;
