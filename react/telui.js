//global.UI = global.UI || require('@telogical/telui-core');
require('@telogical/telui-core');

global.UI.Label = require('./widgets/label.js')(global.UI);
global.UI.Appearances.label = require('./appearances/label.js')(global.UI);

module.exports = global.UI;
