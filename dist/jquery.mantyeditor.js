/*! Mantyeditor - v0.1.0 - 2015-11-02
* https://github.com/1000892/mantyeditor
* Copyright (c) 2015 jibum.jung; Licensed MIT */
/*! Mantyeditor - v0.1.0 - 2015-10-13
 * https://github.com/1000892/mantyeditor
 * Copyright (c) 2015 jibum.jung; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.mantyeditor = function(options) {
    options = $.extend({}, $.mantyeditor.options, options);
    return this.each(function() {
      $(this).hide();
      var container = "<div class=\"panel panel-default\">" +
          "  <div class=\"panel-heading mantyeditor-heading\">"+
          "    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"...\">"+
          "      <div class=\"btn-group\" role=\"group\" aria-label=\"...\">"+
          "        <button type=\"button\" class=\"btn btn-default\">1</button>"+
          "      </div>"+
          "    </div>"+
          "  </div> " +
          "  <div class=\"panel-body\">" +
          "    <div class='mantyeditor-container' contenteditable='true' style='height:"+options.height+"px;' />" +
          "  </div>" +
          "</div>";
      $(this).after(container);
    });
  };

  // Static method.
  $.mantyeditor = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.mantyeditor.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.mantyeditor.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].mantyeditor = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
