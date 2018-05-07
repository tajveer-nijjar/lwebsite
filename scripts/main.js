// When the DOM is ready, run this function
$(document).ready(function () {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });


  // Instantiate the Bootstrap carousel
  $('.multi-item-carousel').carousel({
    interval: false
  });

  // for every slide in carousel, copy the next slide's item in the slide.
  // Do the same for the next, next item.
  $('.multi-item-carousel .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length > 0) {
      next.next().children(':first-child').clone().appendTo($(this));
    } else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }

    if (next.next().next().length > 0) {
      next.next().next().children(':first-child').clone().appendTo($(this));
    } else {
      $(this).siblings(':first').siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });



  //For displaying and hiding clients
  var allButton = $("section.clients ul li button#all_clients");
  var internationButton = $("section.clients ul li button#international_clients");
  var nationalButton = $("section.clients ul li button#national_clients");
  var localButton = $("section.clients ul li button#local_clients");

  var internationalClients = $(".clients_carousel .carousel-inner .active .international");
  var nationalClients = $(".clients_carousel .carousel-inner .active .national");
  var localClients = $(".clients_carousel .carousel-inner .active .local");

  allButton.click(function () 
  {
    internationalClients.addClass("show")
    internationalClients.removeClass("hide");
    
    nationalClients.addClass("show")
    nationalClients.removeClass("hide");
    
    localClients.addClass("show")
    localClients.removeClass("hide");
  });

  internationalClients.click(function () 
  {

    var activeDiv = $(".multi-item-carousel .carousel-inner .active");

    internationalClients.addClass("show")
    internationalClients.removeClass("hide");
    
    nationalClients.addClass("hide")
    nationalClients.removeClass("show");
    
    localClients.addClass("hide")
    localClients.removeClass("show");
  });

  nationalClients.click(function () 
  {
    internationalClients.addClass("hide")
    internationalClients.removeClass("show");
    
    nationalClients.addClass("show")
    nationalClients.removeClass("hide");
    
    localClients.addClass("hide")
    localClients.removeClass("show");
  });

  localClients.click(function () 
  {
    internationalClients.addClass("hide")
    internationalClients.removeClass("show");
    
    nationalClients.addClass("hide")
    nationalClients.removeClass("show");
    
    localClients.addClass("show")
    localClients.removeClass("hide");
  });
});