// when we click an image we want to show the lightbox
// show the relevant lightbox
// when we click the close button we hide the modal
// make the link not follow the href

$(".images a").on("click", function (ev) {
	%('.lightbox').show()  
  
  return false
  
  
//   $(this).toggleClass("clicked");
  
//   $(".lightbox").fadeIn(500);
  
//   var content = $(this).html()
  
//   $(".lightbox").html(content);
  
//   ev.preventDefault();
});

$(".lightbox").on("click", function (ev) {
  $(".lightbox").fadeOut(500);
  ev.preventDefault();
  

});