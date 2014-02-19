'use strict';

// Directives.
weeblyApp.directive('ngDraggable', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs, ctrl) {
      var options = scope.$eval(attrs.ngDraggable);

      elem.draggable();
      // On release, add it to state.selectedPage.elements
      // - make sure to include location, size, type
      var replacement = elem;
      var parent = $(elem).parent();
      elem.on('dragstop', function (event, ui) {
        // When drag stops, create a new div in its place.
        // replacement.remove();
        // parent.html($(replacement));

        // Add elem to state.selectedPage.elements
        var element = scope.element;
        element.location = {
          x: event.clientX,
          y: event.clientY
        };
        element.size = {
          x: 100,
          y: 100
        };
        options.page.elements.push(element);
      });
    }
  };
});