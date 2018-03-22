document.addEventListener('DOMContentLoaded', function() {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
            $el.addEventListener('click', function() {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

    var elems = document.querySelectorAll('.post pre');
    for (var i = 0; i < elems.length; i++) {
        elems[i].classList.add('prettyprint');
    }

    document.getElementById('search-toggle').onclick = function() {
        var sb = document.getElementById('search-box');
        if (sb.style.visibility === 'visible'){
            sb.style.visibility = 'hidden';
            sb.style.marginRight = '100%';
        } else {
            sb.style.visibility = 'visible';
            sb.style.marginRight = 0;

            document.getElementById('search-input').focus();
        }
    };
});
