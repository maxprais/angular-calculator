import angular from 'angular';
import uiRouter from 'angular-ui-router';
import calculatorComponent from './calculator.component';

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

.component('calculator', calculatorComponent)

.service('CalculationService', CalculationService)

.name;

export default calculatorModule;
