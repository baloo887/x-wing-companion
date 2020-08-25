"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSquadron = getSquadron;

var _FFGRequests = require("../../services/api/FFGRequests");

function getSquadron(context, data) {
  (0, _FFGRequests.squadronRequest)(data.id, data.language).then(function (response) {
    context.commit('updateSquadron', response.data);
  })["catch"](function (error) {
    console.log(error);
  });
}