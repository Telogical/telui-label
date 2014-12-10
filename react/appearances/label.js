var React = require('react/addons');

function AppearanceLabel(ui) {
  'use strict';

  return React.createClass({
    displayName: 'Appearance.Label',
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
        key = this.props.key || this.props.id,
        value = this.props.value;

        console.log('attrs', id, key, value);
        /*
        cssClass = this.props.cssClass,
        name = this.props.name,
        disabled = !!this.props.disabled,
        iconPrimary = this.props.iconPrimary,
        iconSecondary = this.props.iconSecondary,
        active = (this.props.active || this.state.active),
        uiState = this.props.uiState;


      var labelLiAttrs = {
        'ui-widget': true
      };

      var appearanceModel = {

      };

      var appearance = ui.Appearances[this.props.appearance](appearanceModel);
      var li = domx.li(labelLiAttrs, appearance);
     */ 
   
      return domx.div({ id: 'iamaspecialboy', }, 'herrrrooooooo');
    }
  });
}

module.exports = AppearanceLabel;
