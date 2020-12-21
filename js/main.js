(function () {
    if (window.innerWidth <= 770) {
        let menuBtn = document.querySelector('#headerMenu')
        let nav = document.querySelector('#headerNav')
        menuBtn.onclick = function (e) {
            e.stopPropagation()
            if (menuBtn.classList.contains('active')) {
                menuBtn.classList.remove('active')
                nav.classList.remove('nav-show')
            } else {
                nav.classList.add('nav-show')
                menuBtn.classList.add('active')
            }
        }
        document.querySelector('body').addEventListener('click', function () {
            nav.classList.remove('nav-show')
            menuBtn.classList.remove('active')
        })
    }
}());

// back to top
(function () {
    // Back to Top - by CodyHouse.co
    let backTop = document.getElementsByClassName('backtotop-trigger')[0],
        offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
        scrollDuration = 700,
        visible = false,
        scrolling = false

    if (backTop) {
        //update back to top visibility on scrolling
        window.addEventListener("scroll", function (event) {
            if (!scrolling) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
            }
        });

        //smooth scroll to top
        backTop.addEventListener('click', function (event) {
            event.preventDefault();
            (!window.requestAnimationFrame) ? window.scrollTo(0, 0) : smoothScroll(0, scrollDuration);
        });
    }

    function checkBackToTop() {
        if (window.scrollY > offset) {
            if(!visible) {
                $('.backtotop-trigger').addClass('visible');
                visible = true;
            }
        } else {
            if(visible) {
                $('.backtotop-trigger').removeClass('visible');
                visible = false;
            }
        }
        scrolling = false;
    }

    function smoothScroll(final, duration, cb) {
        let start = window.scrollY || document.documentElement.scrollTop,
            currentTime = null;

        let animateScroll = function (timestamp) {
            if (!currentTime) currentTime = timestamp;
            let progress = timestamp - currentTime;
            if (progress > duration) progress = duration;
            let val = Math.easeInOutQuad(progress, start, final - start, duration);
            window.scrollTo(0, val);
            if (progress < duration) {
                window.requestAnimationFrame(animateScroll);
            } else {
                cb && cb();
            }
        };
        window.requestAnimationFrame(animateScroll);

        Math.easeInOutQuad = function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        };
    }
})();

// tool bar
$('.content-trigger').click(function () {
    $('.toc-container').toggleClass('open');
});
