
$(window).on("load resize", function() {
    // Get the current width of the slider
    var sliderWidth = $('[type=range]').width();
  
    // Remove previously created style elements
    $('.custom-style-element-related-to-range').remove();
  
    // Add our updated styling
    $('<style class="custom-style-element-related-to-range">input[type="range"]::-webkit-slider-thumb { box-shadow: -' + sliderWidth + 'px 0 0 ' + sliderWidth + 'px;}<style/>').appendTo('head');
  });
  