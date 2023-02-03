

const request = require('request');
var name = 'rhino';
request.get({
  url: 'https://api.api-ninjas.com/v1/animals?name=' + name,
  headers: {
    'X-Api-Key': '3LsUYQWyPw+HXBwJ/+pmbw==nfBUKvQrB3Ifq5eT'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});
