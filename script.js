request.get({
  url: "https://api.nytimes.com/svc/topstories/v2/national.json",
  qs: {
    'api-key': "457df9e90677458faa2e2763431d68a7"
  },
}, function(err, response, body) {
  body = JSON.parse(body);
  console.log(body);
})
