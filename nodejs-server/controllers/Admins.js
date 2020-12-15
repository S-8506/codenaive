'use strict';

var utils = require('../utils/writer.js');
var Admins = require('../service/AdminsService');

module.exports.addData = function addData (req, res, next) {
  var codenaive_dataItem = req.swagger.params['codenaive_dataItem'].value;
  Admins.addData(codenaive_dataItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
