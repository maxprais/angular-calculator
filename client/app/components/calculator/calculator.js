import angular from 'angular';
import uiRouter from 'angular-ui-router';
import calculatorComponent from './calculator.component';
import CalculatorController from './calculator.controller';
import CalculationService from '../../services/CalculationService';

let calculatorModule = angular.module('calculator', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('calculator', {
      url: '/',
      component: 'calculator'
    });
})

.controller('CalculatorController', ['CalculationService'], CalculatorController)

.service('CalculationService', CalculationService)

.component('calculator', calculatorComponent)

.name;

export default calculatorModule;
