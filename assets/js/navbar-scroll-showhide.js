    // AZM navbar home icon show-hide
    // source: https://github.com/codebushi/custom-headroom

    console.log('show hide JS loaded');

    function debounce(func, wait = 10, immediate = true) {
        let timeout;
        return function() {
            let context = this, args = arguments;
            let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

      // define scroll trigger position and target
        let scrollPos = 200;
        const homeIcon = document.querySelector('.nav-item-homeicon');

        function checkPosition() {
        let windowY = window.scrollY;
        if (windowY < scrollPos) {
            // Scrolling UP
            homeIcon.classList.add('is-hidden');
            homeIcon.classList.remove('is-visible');
            console.log('scrolling UP');
        } else {
            // Scrolling DOWN
            homeIcon.classList.add('is-visible');
            homeIcon.classList.remove('is-hidden');
            console.log('scrolling DOWN');
        }
        scrollPos = windowY;
        }

      //window.addEventListener('scroll', checkPosition);
        window.addEventListener('scroll', debounce(checkPosition));
