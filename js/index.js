$(document).ready(function() {
  $(".button-collapse").sideNav();
  $(".slider").slider();
  $('a[href^="#"]').on("click", function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $("html, body").stop().animate({
      scrollTop: $target.offset().top
    }, 900, "swing", function() {
      window.location.hash = target;
    });
  });
  $('input.autocomplete').autocomplete({
    data: {
      "@gmail.com": 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png',
      "@outlook.com": "https://s3.amazonaws.com/libapps/customers/1510/images/Microsoft_Outlook_2013_logo.svg.png",
      "@yahoo.com": "https://vignette2.wikia.nocookie.net/farmville2/images/f/f7/Yahoo-Icon.png/revision/latest?cb=20120630091702",
      "@hotmail.com": "https://s3.amazonaws.com/libapps/customers/1510/images/Microsoft_Outlook_2013_logo.svg.png"
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 15, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
});