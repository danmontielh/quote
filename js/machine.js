$("button").on("click", function(){
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
  .done(update);
;
})

function update(response) {
  var content = response.quoteText;
  var author = response.quoteAuthor;
  $("#quote-text").text(content);
  $("#author").text(author);
};

/*$("#quote-text").text(content);
$("#author").text(aut);*/






