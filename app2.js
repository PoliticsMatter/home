  var queryURL = "https://api.nytimes.com/svc/topstories/v2/national.json"";

  var parameterObj = {
    "api-key": "457df9e90677458faa2e2763431d68a7",
  }

  $.ajax({
    url: queryURL + $.param(parameterObj),
    method: "GET"
  })

  .done(function(response){
    console.log(response)

    for (var i = 0; i < 10; i++) {

      var wellSection = $("<div>");

      var link = $("<a>"+response.response.docs[i].lead_paragraph+"</a>");

      link.attr("href", response.response.docs[i].web_url);

      $("#resultsDiv").append(wellSection.append(link));

    };

  });

});
