import angular from 'angular';
import Calculator from './calculator/calculator';

let componentModule = angular.module('app.components', [
  Calculator
])

.name;

export default componentModule;
