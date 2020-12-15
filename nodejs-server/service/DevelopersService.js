'use strict';


/**
 * searches data
 * By passing in the appropriate options, you can search for available inventory in the system 
 *
 * searchString String pass an optional search string for looking up inventory (optional)
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.searchData = function(searchString,skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "releaseDate" : "2021-01-01T09:00:00.000+0000",
  "name" : "CodeNaive",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "manufacturer" : {
    "phone" : "408-867-5309",
    "name" : "CodeNaive Corporation",
    "homePage" : "https://codenaive.com"
  }
}, {
  "releaseDate" : "2021-01-01T09:00:00.000+0000",
  "name" : "CodeNaive",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "manufacturer" : {
    "phone" : "408-867-5309",
    "name" : "CodeNaive Corporation",
    "homePage" : "https://codenaive.com"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

