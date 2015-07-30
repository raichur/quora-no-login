(function(window){

  var arguments = '?';

  // If the url has doesn't already have the "share=1" argument
  if (typeof window.location.search.indexOf('share=1') === -1 || window.location.search === '') {
    // If there are any other arguments...
    if (window.location.search.indexOf('?') === 0) {
      arguments += window.location.search.substring(1) + '&';
    }
    // Append "share=1"
    arguments += 'share=1';
    window.location = window.location.origin + window.location.pathname + arguments;
  }
})(window);
