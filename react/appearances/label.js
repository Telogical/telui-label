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
        cssClass = this.props.cssClass,
        label = this.props.label;

      console.log('attrs', id, key, label);
      /*
      cssClass = this.props.cssClass,
      name = this.props.name,
      disabled = !!this.props.disabled,
      iconPrimary = this.props.iconPrimary,
      iconSecondary = this.props.iconSecondary,
      active = (this.props.active || this.state.active),
      state = this.props.uiState;
       */
      var spanClasses = {
        'ui-text-label': true,
        'ui-state-default': true
      };

      if (cssClass) {
        spanClasses[cssClass] = true;
      }

      var spanAttrs = {
        className: cx(spanClasses)
      };

      return domx.span(spanAttrs, this.props.label);
    }
  });
}

module.exports = AppearanceLabel;