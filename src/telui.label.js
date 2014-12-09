var React = require('react/addons');
require('TelUI-Core');
var TelogicalUi = angular.module('TelUI');
var _ = require('lodash');

TelogicalUi
  .directive('teluiButton', [

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
          link: function link($scope, $el, attrs) {
            console.log('linking TelUI label');
          }
        };
  }]);
