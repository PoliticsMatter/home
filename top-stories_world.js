var url = "https://api.nytimes.com/svc/topstories/v2/world.json";
url += '?' + $.param({
  'api-key': "457df9e90677458faa2e2763431d68a7",
  'callback': "(world)TopStoriesCallback"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
