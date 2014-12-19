var React = require('react/addons');

function Label(ui) {
  'use strict';

  return React.createClass({
    displayName: 'Label',
    mixins: [ui.Mixins.Widget],
    propTypes: {

    },
    getInitialState: function getInitialState() {
      return {
        id: '',
        label: ''
      };
    },
    render: function render() {
      var cx = React.addons.classSet,
        domx = React.DOM;

      var id = this.props.id,
        appearance = this.props.appearance,
        disabled = this.props.disabled;

      var labelLiClasses = {
        'ui-label': true,
        'ui-widget': true,
        'ui-state-disabled': disabled
      };

      var labelLiAttrs = {
        id: id,
        className: cx(labelLiClasses)
      };

      var appearanceElement = ui.Appearances[appearance](this.props);
      var li = domx.li(labelLiAttrs, appearanceElement);
   
      return li; 
    }
  });
}

module.exports = Label;
