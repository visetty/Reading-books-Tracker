$(document).ready(function(event) {
  event.preventDefault();
  $("#sr-only").click(function() {
    $(.row).hide();
    $(.wrapper).hide();
    $(#currentBook).show();
  });
});
