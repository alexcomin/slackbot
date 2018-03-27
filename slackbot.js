const request = require('request')

let options = {
  uri: '', //url hook for slack channel
  method: 'POST'
};

function sendPost(options) {
  request(options, function (error, response, body) {
    if (error) {
      console.log(error)
    }
  });
}

module.exports.options = options
module.exports.sendPost = sendPost
