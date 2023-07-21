// global js file

console.log("%cFahad Kamran", "color: blue; font-size: 20px");

$(document).ready(function () {
    let myOwl = $(".owlCarousel");
    myOwl.owlCarousel(
        {
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            smartSpeed: 450,
            loop: true,
            margin: 10,
            center: true,
            autoplayHoverPause: true,
            lazyLoad: true,
            merge: false,
            autoWidth: false,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        }
    );
    myOwl.on('mousewheel', '.owl-stage', function (e) {
        if (e.originalEvent.deltaY > 0) {
            myOwl.trigger('next.owl');
        } else {
            myOwl.trigger('prev.owl');
        }
        e.preventDefault();
    });
});