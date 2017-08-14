<script>
var url = "https://api.nytimes.com/svc/topstories/v2/national.json";
url += '?' + $.param({
  'api-key': "457df9e90677458faa2e2763431d68a7"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
</script>
