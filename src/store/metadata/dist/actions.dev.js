"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetadata = getMetadata;

var _FFGRequests = require("../../services/api/FFGRequests");

function getMetadata(context) {
  (0, _FFGRequests.metadataRequest)().then(function (response) {
    context.commit('updateMetadata', response.data);
  })["catch"](function (error) {
    console.log(error);
  });
}