const { app } = require('electron').remote;
var $ = require('jquery');

$(function() {
    $("#welcome").append(" Electron-Starter " + app.getVersion());
});
