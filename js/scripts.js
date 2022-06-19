// ORIGINAL PORTFOLIO CREATED BY BRIAN HO https://github.com/mrbrianhobo


$(window).load(function() {
/*-----------------------------------------------------------------------------------*/
/*   INIT SKROLLR
/*-----------------------------------------------------------------------------------*/
    var s = skrollr.init({
        forceHeight: false
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        skrollr.init().destroy();
    }
});

(function($) {
/*-----------------------------------------------------------------------------------*/
/*   SMOOTH SCROLLING
/*-----------------------------------------------------------------------------------*/
    $.scrollTo = $.fn.scrollTo = function(o, t, n) {
        return this instanceof $ ? (n = $.extend({}, {
            gap: {
                x: 0,
                y: 0
            },
            animation: {
                easing: "swing",
                duration: 800,
                complete: $.noop,
                step: $.noop
            }
        }, n), this.each(function() {
            var a = $(this);
            a.stop().animate({
                scrollLeft: isNaN(Number(o)) ? $(t).offset().left + n.gap.x : o,
                scrollTop: isNaN(Number(t)) ? $(t).offset().top + n.gap.y : t
            }, n.animation)
        })) : $.fn.scrollTo.apply($("html, body"), arguments)
    };
    $('.smoothscroll a').on('click',function(e) {
        $('html,body').scrollTo(this.hash, this.hash, {
            'axis': 'y'
        });
        e.preventDefault();
    });
})(jQuery);

$(function() {

  var json;

  $.getJSON( "js/data.json", function( data ) {
    json = data;
  });

  var typed = new Typed('#typed', {
      strings: [
        'a Keyboard Collector ⌨️',
        'an Aerospace Engineer 🚀',
        'a Former NCAA Swimmer 🏊',
        'a Hedgehog Enjoyer 🦔',
        'a Shrimp Breeder 🦐',
        'a Pantheon Main 𓐬',

      ],
      loop: true,
      backDelay: 1000,
      backSpeed: 30,
      typeSpeed: 50
  });

  $("#bio").click(function(e) {
    e.preventDefault();
    var content = json.bio.join('\n');
    $('.about').replaceWith('<div class="about animated fadeIn"><p>' + content + '</p></div>');
  });

  $("#edu").click(function(e) {
    e.preventDefault();
    var content = json.edu.join('\n');
    $('.about').replaceWith('<div class="about animated fadeIn">' + content + '</div>');

    $("#app-academy").click(function(e) {
      e.preventDefault();
      var content = json.appAcademy.join('\n');
      $("#school").replaceWith(`<div id='school' class='animated fadeIn'>${content}</div>`)
    });

    $("#ucsd").click(function(e) {
      e.preventDefault();
      var content = json.ucsd.join('\n');
      $("#school").replaceWith(`<div id='school' class='animated fadeIn'>${content}</div>`)
    });

    $("#uci").click(function(e) {
      e.preventDefault();
      var content = json.uci.join('\n');
      $("#school").replaceWith(`<div id='school' class='animated fadeIn'>${content}</div>`)
    });

    $("#math").click(function(e) {
      console.log("math was clicked")
      e.preventDefault();
      var content = json.math.join('\n');
      $('.courses').replaceWith('<ul class="courses animated fadeIn">' + content + '</ul>');
    });

    $("#mae").click(function(e) {
      console.log("mae was clicked")
      e.preventDefault();
      var content = json.mae.join('\n');
      $('.courses').replaceWith('<ul class="courses animated fadeIn">' + content + '</ul>');
    });
  });

  // $("#work").click(function(e) {
  //   e.preventDefault();
  //   var content = json.work.join('\n');
  //   $('.about').replaceWith('<div class="about animated fadeIn">' + content + '</div>');
  // });

});

(function() {
  [].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
    var menuItems = menu.querySelectorAll('.menu__link'),
      setCurrent = function(ev) {
        ev.preventDefault();
        var item = ev.target.parentNode; // li
        // return if already current
        if (classie.has(item, 'menu__item--current')) {
          return false;
        }
        // remove current
        classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
        // set current
        classie.add(item, 'menu__item--current');
      };
    [].slice.call(menuItems).forEach(function(el) {
      el.addEventListener('click', setCurrent);
    });
  });
})(window);
