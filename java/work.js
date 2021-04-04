/* NAV Animation */
var Menu = {
  
  el: {
    ham: $('.menu'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
  }
};

Menu.init();

/*NAV Drop down*/
const menu = document.querySelector(".menu");
const navlinks = document.querySelector(".nav-links");
const navopen = document.querySelector("nav");
const links= document.querySelectorAll(".nav-links li")

menu.addEventListener("click", () => { navlinks.classList.toggle("open");});
menu.addEventListener("click", () => { navopen.classList.toggle("open");})
/*NAV JUMP LETTER*/
/*ABOUT*/
if ( document.querySelector( '.animation' ) ) {
  forceAnimation( splitText( document.querySelector( '.animation' ) ) );
}

function splitText( container = false ) {
  if ( container != false ) {
    var string = container.innerHTML;
    var textarr = string.split('');
    var stop = textarr.length;
    var buffer = '';
    for( var i = 0; i < stop; i++ ) {
      buffer += '<span class="anim-' + i + '">' + textarr[i] + '</span>';
    }
    container.innerHTML = buffer;
    return stop;
  }
}

function forceAnimation( stop = false ) {
  if ( stop != false ) {
    for( var i = 0; i < stop; i++ ) {
      var letter = document.querySelector( '.anim-' + i );
      letter.addEventListener( 'mouseover', function() {
        this.classList.add( 'animate' );
      });
      letter.addEventListener( 'animationend', function() {
        this.classList.remove( 'animate' );
      });
    }
  }
}
/*WORKS*/
if ( document.querySelector( '.animation1' ) ) {
  forceAnimation1( splitText1( document.querySelector( '.animation1' ) ) );
}

function splitText1( container1 = false ) {
  if ( container1 != false ) {
    var string1 = container1.innerHTML;
    var textarr1 = string1.split('');
    var stop1 = textarr1.length;
    var buffer1 = '';
    for( var i1 = 0; i1 < stop1; i1++ ) {
      buffer1 += '<span class="anim1-' + i1 + '">' + textarr1[i1] + '</span>';
    }
    container1.innerHTML = buffer1;
    return stop1;
  }
}

function forceAnimation1( stop1 = false ) {
  if ( stop1 != false ) {
    for( var i1 = 0; i1 < stop1; i1++ ) {
      var letter1 = document.querySelector( '.anim1-' + i1 );
      letter1.addEventListener( 'mouseover', function() {
        this.classList.add( 'animate1' );
      });
      letter1.addEventListener( 'animationend', function() {
        this.classList.remove( 'animate1' );
      });
    }
  }
}
/*CONTACT*/
if ( document.querySelector( '.animation2' ) ) {
  forceAnimation2( splitText2( document.querySelector( '.animation2' ) ) );
}

function splitText2( container2 = false ) {
  if ( container2 != false ) {
    var string2 = container2.innerHTML;
    var textarr2 = string2.split('');
    var stop2 = textarr2.length;
    var buffer2 = '';
    for( var i2 = 0; i2 < stop2; i2++ ) {
      buffer2 += '<span class="anim2-' + i2 + '">' + textarr2[i2] + '</span>';
    }
    container2.innerHTML = buffer2;
    return stop2;
  }
}

function forceAnimation2( stop2 = false ) {
  if ( stop2 != false ) {
    for( var i2 = 0; i2 < stop2; i2++ ) {
      var letter2 = document.querySelector( '.anim2-' + i2 );
      letter2.addEventListener( 'mouseover', function() {
        this.classList.add( 'animate2' );
      });
      letter2.addEventListener( 'animationend', function() {
        this.classList.remove( 'animate2' );
      });
    }
  }
}

/*Astonish*/

$(function () {
    'use strict';
    var $window = $(window);
    function astonish() {
        
        if ($window.width() > 248) {
            var window_top = $window.scrollTop(), 
                window_bottom = $window.height() * 0.5 + window_top; 
            $(".astonish:not(.animated)").each(function () {
                var $this = $(this), 
                    object_top = $this.offset().top, 
                    object_bottom = $this.outerHeight() + object_top, 
                    animation = $this.data("animation"); 

                
                if ((window_bottom > object_top) && (window_top < object_bottom)) {
                    
                    var delay,
                        animationDuration;
                    
                    if (typeof $this.data("delay") !== 'undefined') {
                        delay = $this.data("delay");
                    } else {
                        delay = 0; 
                    }
                    
                    if (typeof $this.data("duration") !== 'undefined') {
                        animationDuration = $this.data("duration");
                    } else {
                        animationDuration = 1; 
                    }
                    
                    if (delay > 0 || animationDuration > 0) {
                        window.setTimeout(function () {
                            $this.css({
                                "moz-animation-duration": animationDuration + 's',
                                "webkit-animation-duration": animationDuration + 's',
                                "animation-duration": animationDuration + 's'
                            });
                            
                            $this.addClass('animated ' + animation);
                        }, delay * 1000);
                    } else {
                        
                        $this.addClass('animated ' + animation);
                    }
                }
            });
        }
    }
    
    var timeOut;

    $window.scroll(function () {
        if (timeOut) {
            
            clearTimeout(timeOut);
            timeOut = null;
        }
        timeOut = setTimeout(astonish, 10);
        
    });
});
