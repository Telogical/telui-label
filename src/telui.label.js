var UI = require('../react/telui'),
  React = UI.Core.React;

angular
  .module('TelUI')
  .directive('teluiLabel', [
      function reactLabelDirective() {
      'use strict';

      return {
        restrict: 'E',
        replace: true,
        scope: {
          id: '@',
          value: '=?',
          label: '@',
          disabled: '=',
          iconPrimary: '@',
          iconSecondary: '@',
          appearance: '@',
          cssClass: '@',
          text: '=?',
          state: '@'
        },
        template: '<div class="waffles"></div>',
        link: function link($scope, $el) {

          var labelModel = {
            id: $scope.id,
            label: $scope.label,
            value: $scope.value,
            state: $scope.state,
            disabled: $scope.disabled,
            appearance: $scope.appearance,
            iconPrimary: $scope.iconPrimary,
            iconSecondary: $scope.iconSecondary,
            cssClass: $scope.cssClass,
            text: $scope.text
          };

          React.renderComponent(UI.Label(labelModel), $el[0]);
        }
      };
}]);