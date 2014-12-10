window.UI = window.UI || {Appearances: {}, Mixins: {}};
var ui = window.UI;

ui.Label = require('./widgets/label.js')(ui);
ui.Appearances.label = require('./appearances/label.js')(ui);

module.exports = ui;
