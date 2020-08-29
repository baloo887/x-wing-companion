"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.squadronRequest = squadronRequest;
exports.metadataRequest = metadataRequest;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function squadronRequest(id, lang) {
  if (lang === undefined) {
    lang = 'en';
  }

  var opt = {
    headers: {
      'accept-language': lang
    }
  };
  return _axios["default"].get("https://squadbuilder.fantasyflightgames.com/api/squads/".concat(id), opt);
}

function metadataRequest() {
  return _axios["default"].get('https://squadbuilder.fantasyflightgames.com/api/app-metadata/');
}