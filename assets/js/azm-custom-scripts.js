
    //show-hide home icon on navbar - variables


    document.addEventListener('scroll', function() {
        const icon = document.getElementById("nav-item-homeicon");
        if(window.pageYOffset > 240){
            icon.classList.add("is-visible");
            icon.classList.remove("is-hidden");
        }
        if(window.pageYOffset < 240){
            icon.classList.remove("is-visible");
            icon.classList.add("is-hidden");
        }
    });


$(document).ready(function (){

    // ======================================
    // LIGHTGALLERY Portfolio

    lightGallery(document.getElementById('portfolio-home'),{
        thumbnail:true,
        download:false,
        enableSwipe:true,
        selector: "a",
        plugins: [lgThumbnail,lgFullscreen,lgZoom,lgVideo,lgShare],
        youTubePlayerParams:{
        autoplay: 1,
        modestbranding : 1,
        showinfo : 0,
        controls : 1
        },
        licenseKey: '7A527A75-E32740D5-95C2C40C-E489ECA4'
    });

    // LIGHTGALLERY  comics
    lightGallery(document.getElementById('portfolio-comics'),{
        thumbnail:true,
        download:false,
        enableSwipe:true,
        selector: "a",
        plugins: [lgThumbnail,lgFullscreen,lgZoom,lgShare],
        licenseKey: '7A527A75-E32740D5-95C2C40C-E489ECA4'
    });


    //enable light-dark switching
    //https://codepen.io/chen1223/pen/PobxwMj

    // var azmMain = document.getElementsByClassName('azm-main')[0];
    // //bind toggler
    // document.getElementById('toggler').addEventListener('change',(event) =>{
    //     console.log(toggler)
    //     //swap data-theme on body
    //     event.target.checked ? 
    //     azmMain.removeAttribute('data-theme'):azmMain.setAttribute('data-theme','dark');
    // });


    // ISOTOPE 
    // set var + enable
    const $pMasonry = $('.portfolio-masonry').imagesLoaded(
        function(){
            $pMasonry.isotope({
                // set default filter to a given category instead of default "all"
                //filter: '.pmi-illustration',
                itemSelector: '.portfolio-masonry-item',
                percentPosition:true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth and gutter-sizer for vertical spacing
                    columnWidth: '.grid-sizer',
                        gutter: '.gutter-sizer'
            }
        });
         // enable data filtering - top menu: selects item categories (portfolio, comics, sketchbook)
        $('.portfolio-category-selector a').click(function (e) { 
            let filterValue = $(this).attr('data-filter');
            $pMasonry.isotope({ filter: filterValue });
            //console.log (filterValue);
            $(this).addClass('selector-active');
            e.preventDefault();
        });
        $('.portfolio-category-selector a').blur(function (e) { 
            $(this).removeClass('selector-active');
            e.preventDefault();
        });
    });

// end
});

// on scroll, show or hide home icon
// $(window).scroll(function(){
//     let posY = $(this).scrollTop();
//     if(posY > headerOffset){
//         if(currentScroll > prevScroll){
//                 homeIcon.fadeIn().css('border','black 1px solid');
//             } else {
//                 homeIcon.fadeOut();
//             }
//         }
//     prevScroll - currentScroll;
// });