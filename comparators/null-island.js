'use strict';

var turfInside = require('turf-inside');
var bboxPolygon = require('turf-bbox-polygon');
var centroid = require('turf-centroid');

module.exports = nullIsland;

function nullIsland(newVersion, oldVersion, callback) {
  if (!newVersion || !newVersion.hasOwnProperty('geometry') || newVersion['geometry'] === null) {
    return callback(null, {});
  }
  var polygon = bboxPolygon([-10.496769839987422, -4.291703357034322, 5.252754932388029, 4.291703357043673]);
  var center = centroid(newVersion);
  var inside = turfInside(center, polygon);

  callback(null, {
    'result:null-island': inside
  });
}
