"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isMangled = function isMangled() {
  return !/param/.test(function (param) {});
};

exports.default = isMangled;
exports.isMangled = isMangled;