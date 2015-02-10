
var TelUI = require('@telogical/telui-core');

TelUI.Label = require('./widgets/label.js')(TelUI);
TelUI.Appearances.label = require('./appearances/label.js')(TelUI);

module.exports = TelUI;
