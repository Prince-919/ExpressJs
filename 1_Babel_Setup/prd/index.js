"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// setup express with babel

var app = (0, _express["default"])();
var PORT = 4000;
app.get('/', function (req, res) {
  res.send('Hello, Prince Good Morning.');
});
app.listen(PORT, function () {
  console.log("Listening on port http://localhost:".concat(PORT));
});