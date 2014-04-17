(function(root, undefined) {

  "use strict";


/* gaErrLog main */

// #gaErrLog
// *Client side error logging with Google Analytics
// ###GA track event
// `_trackEvent(category, action, opt_label, opt_value, opt_noninteraction)`

// gaErrLog hard-codes a few of these parameters based on the
// console.* statement used - so it can be as drop-in as possible.

// Base function.
var gaErrLog = function() {
  // Add functionality here.
  root.console.log = {};
  var CAT = '_trackEvent';
  var action = {
    log: 'logging',
    error: 'error',
    info: 'info',
    warn: 'warning'
  };

  function initialize () {
    function sendBasicLog (message, data) {
      var msg = message || '';
      var d = data|| {};
      root.console.info(root);
      root.console.info(root._gaq);
      var payload = [
        CAT,
        'gaErrLog:'+action.log,
        msg,
        JSON.stringify(d)
      ];
      root.console.info(payload);
      root._gaq.push(payload);
      root._gaq.push(['+_trackEvent', 'test','testing']);
    }
    root.console.log = sendBasicLog;

  }


  return {
    init: initialize
  };
};


// Version.
gaErrLog.VERSION = '0.0.0';


// Export to the root, which is probably `window`.
root.gaErrLog = gaErrLog;


}(this));
