// --------------------------------------------------------- //
// READY
// --------------------------------------------------------- //

// --------------------------------------------------------- //
// LOADING
// --------------------------------------------------------- //
$( window ).load(function() {

  $('#loader').addClass('removed');
  $('#page').addClass('displayed');

  $(".headline").typed({
    strings: [
      "I do not code... ",
      "I am just a hacker."
      // I do not code, I am just a hacker
    ],
    typeSpeed: 50,
    startDelay: 1000,
    showCursor: false,
    backDelay: 300
  });

    $(".status-header").typed({
      strings: [
        "I am... "
        // I do not code, I am just a hacker
      ],
      typeSpeed: 10,
      startDelay: 1500,
      showCursor: false
    });

    $(".bullet-1").typed({
      strings: [
        " - Dedicated and hardworking"
        // I do not code, I am just a hacker
      ],
      typeSpeed: 0,
      startDelay: 1750,
      showCursor: false
    });

    $(".bullet-2").typed({
      strings: [
        "- Multithreaded and infinitely scalable"
        // I do not code, I am just a hacker
      ],
      typeSpeed: 0,
      startDelay: 2000,
      showCursor: false
    });

    $(".bullet-3").typed({
      strings: [
        "- Basically O(log n)"
        // I do not code, I am just a hacker
      ],
      typeSpeed: 0,
      startDelay: 2250,
      showCursor: false
    });

    $(".bullet-4").typed({
      strings: [
        "- Your unmatched left parenthesis. "
        // I do not code, I am just a hacker
      ],
      typeSpeed: 0,
      startDelay: 2500,
      showCursor: false
    });

    $(".bullet-5").typed({
      strings: [
        "- The scroll lock button on your keyboard."
      ],
      typeSpeed: 0,
      startDelay: 2750,
      showCursor: false
    });
  });


$(".resume-headline").typed({
    strings: [
      "Some things I've spent time on..."
    ],
    typeSpeed: 0,
    startDelay: 1000,
    showCursor: false
  });


// --------------------------------------------------------- //
// BACK TO TOP
// --------------------------------------------------------- //
$('#backtotop').click(function(){

$('html,body').animate({scrollTop: 0},2000);
return false;

});
