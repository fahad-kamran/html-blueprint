// owl-carousel-initialize
// $(document).ready(function () {
//     // taget owl-carousel class/id name and start
//     $('.happy_clients_carousel').owlCarousel({
//         dots: true,
//         dotsEach: true,
//         autoplay: true,
//         autoplayTimeout: 5000,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             576: {
//                 items: 2
//             },
//             768: {
//                 items: 3
//             }
//         }
//     })
// })


// initialize Glight
// GLightbox({
//     selector: 'glightbox'
// });


// set_gallery_filter = (id) => {
//     const items = Array.from(document.getElementsByClassName("filter"));
//     items.map((item, index) => {
//         if (id === "all") {
//             item.classList.remove('d-none');
//             item.classList.add('fadeIn', 'glightbox');
//             setTimeout(clean, 500);
//         } else {
//             const check = items[index].classList.contains(id);

//             if (check) {
//                 item.classList.remove('d-none');
//                 item.classList.add('fadeIn', 'glightbox');
//             } else {
//                 item.classList.add('d-none');
//                 item.classList.remove('fadeIn', 'glightbox');
//             }
//         }
//     })
// }

// clean = () => {
//     const items = Array.from(document.getElementsByClassName("filter"));
//     items.map((item) => {
//         item.classList.remove('fadeIn');
//     })
// }