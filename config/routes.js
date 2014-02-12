'use strict';

(function() {

// Public functions. ===========================================================
module.exports = function (app) {
	// Application route =========================================================
	app.get('/*', function (req, res) {
    res.sendfile('index.html', {'root': './public/views/'});
  });
};

}());