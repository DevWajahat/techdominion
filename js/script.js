// Navbar
// script.js

var icon = document.getElementById("icon");
var nav = document.getElementById("nav");

icon.addEventListener('click', function() {
    document.querySelector('.icon-1').classList.toggle('a');
    document.querySelector('.icon-2').classList.toggle('c');
    document.querySelector('.icon-3').classList.toggle('b');
    nav.classList.toggle('active');
});

// /Navbar

// hero section 
// (function() {
//     // Add event listener
//     document.addEventListener("mousemove", parallax);
//     const elem = document.querySelector("#parallax");

//     function parallax(e) {
//         let _w = window.innerWidth / 2;
//         let _h = window.innerHeight / 2;
//         let _mouseX = e.clientX;
//         let _mouseY = e.clientY;

//         let _depth1 = `${50 + (_mouseX - _w) * -0.02}% ${50 + (_mouseY - _h) * -0.02}%`;
//         let _depth2 = `${50 + (_mouseX - _w) * 0.04}% ${50 + (_mouseY - _h) * 0.04}%`;
//         let _depth3 = `${50 + (_mouseX - _w) * -0.06}% ${50 + (_mouseY - _h) * -0.06}%`;

//         let positions = `${_depth3}, ${_depth2}, ${_depth1}`;
//         console.log(positions);
//         elem.style.backgroundPosition = positions;
//     }
// })();
(function() {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  // Magic happens here
  function parallax(e) {
      let _w = window.innerWidth/2;
      let _h = window.innerHeight/2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
      let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
      let x = `${_depth3}, ${_depth2}, ${_depth1}`;
      console.log(x);
      elem.style.backgroundPosition = x;
  }

})();
// hero section

// scroll

function scrollBar() {
    $('section').each(function (id, el) {
      var _el = $(el),
          pageTop = $(window).scrollTop(),
          pageBottom = pageTop + $(window).height(),
          elementTop = _el.offset().top,
          elementBottom = elementTop + _el.height(),
          elementBottomNew = elementTop + 200,
          key = _el.attr('id');
  
          //PROGRESS INDICATIOR
          if (pageTop >= elementTop && pageTop <= elementBottom) {
            var elementHeight = _el.height();
            var totalScroll = -(elementTop - pageTop) / elementHeight * 100;
            $('.progress-item[data-key = ' + key + ']').css('width', totalScroll + '%');
  
          }
          if (pageTop < elementTop) {
            $('.progress-item[data-key = ' + key + ']').css('width', '0');
          }
          if (pageTop > elementBottom) {
            $('.progress-item[data-key = ' + key + ']').css('width', '100%');
          }
    });
  }


 