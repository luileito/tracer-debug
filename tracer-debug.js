var util = require('util');

function TLogger(options) {
  var tracer = require('tracer').colorConsole(options);
  var env = process.env.NODE_ENV;
  var isDebug = typeof env != 'undefined' && env != options.env //'production';

  this.log = function() {
    if (isDebug) {
      var line = new Error().stack.split("\n")[2].match(/(\(.*)\)/i)[0];
      var args = Array.prototype.slice.call(arguments);
      tracer.log("%j in %s", args, line);
    }
  };

  this.trace = function() {
    if (isDebug) {
      var line = new Error().stack.split("\n")[2].match(/(\(.*)\)/i)[0];
      var args = Array.prototype.slice.call(arguments);
      tracer.trace("%j in %s", args, line);
    }
  };

  this.debug = function() {
    if (isDebug) {
      var line = new Error().stack.split("\n")[2].match(/(\(.*)\)/i)[0];
      var args = Array.prototype.slice.call(arguments);
      tracer.debug("%j in %s", args, line);
    }
  };

  this.info = function() {
    if (isDebug) {
      var line = new Error().stack.split("\n")[2].match(/(\(.*)\)/i)[0];
      var args = Array.prototype.slice.call(arguments);
      tracer.info("%j in %s", args, line);
    }
  };

  this.warn = function() {
    if (isDebug) {
      var line = new Error().stack.split("\n")[2].match(/(\(.*)\)/i)[0];
      var args = Array.prototype.slice.call(arguments);
      tracer.warn("%j in %s", args, line);
    }
  };

  this.error = function() {
    if (isDebug) {
      var line = new Error().stack.split("\n")[2].match(/(\(.*)\)/i)[0];
      var args = Array.prototype.slice.call(arguments);
      tracer.error("%j in %s", args, line);
    }
  };
};

module.exports = TLogger;