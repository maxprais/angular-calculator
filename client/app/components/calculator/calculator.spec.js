import CalculatorModule from './calculator'

describe('Calculator', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(CalculatorModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('default component should be calculator', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).to.eq('calculator');
    });
  });

  describe('Calculator Controller', () => {
    let controller, CalculatorController;

    beforeEach(() => {
      controller = $componentController('calculator', {
        $scope: $rootScope.$new(),
        element: angular.element('<calculator></calculator>')
      });
    });

    it('controller should exist', function() {
      expect(controller).not.to.equal(null);
    });

    it('has a name property', () => {
      expect(controller).to.have.property('name');
    });

    it('should make correct mathematical calculations', () => {
      controller.calculation = ['1', '+', '3', '*', '25'];
      controller.currentInputValue = 0;
      let currentCalculatedValue = 0;
      let resetDisplayOnInput = true;
      controller.makeCalculation(controller.calculation, currentCalculatedValue, controller.currentInputValue, resetDisplayOnInput);

      expect(controller.currentInputValue).to.eq(76);
    });

  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<calculator></calculator>')(scope);
      scope.$apply();
    });

    it('has the correct title', () => {
      expect(template.find('h1').html()).to.eq('Welcome to the Calculator App!');
    });
  });
});
