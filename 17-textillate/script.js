$(document).ready(function() {
  $('h1').textillate({
    in: { effect: 'fadeIn' },
    out: { effect: 'fadeOut' },
  });

  gsap.from("h1", {
    opacity: 0,
    y: 50,
    delay: 0.6,
    duration: 1.2,
    onStart: function() {
      $('h1').textillate('in');
    },
    onComplete: function() {
      setTimeout(function() {
        $('h1').textillate('out');
      }, 3000); // Adjust the delay as needed
    }
  });
});