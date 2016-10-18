$(document)
  .ready(function() {

    // $('.ui.accordion').accordion();
    // utils

  
    $('.accordion')
      .accordion({ "exclusive": false })
    ;

    $('.menu .item')
      .tab({ history : true })
    ;

  })
;

$(window).load(function() {
  $('#image-slider').twentytwenty({default_offset_pct: 0.4});
});
