$(document).ready(function () {
    console.log("AZM Custom Scripts loaded");
    // enable lightgallery on comicspages component
        $("#comicPages").lightGallery({
            thumbnail:true,
            download:false
        }); 

    // enable lightgallery on sketchbook component
    $("#portfolio-grid, #sketchbook-grid").lightGallery({
        thumbnail:true,
        download:false,
        selector: "a"
    }); 

    //enable light-dark switching
    //https://codepen.io/chen1223/pen/PobxwMj

    var azmMain = document.getElementsByClassName('azm-main')[0];
    //bind toggler
    document.getElementById('toggler').addEventListener('change',(event) =>{
        console.log(toggler)
        //swap data-theme on body
        event.target.checked ? 
        azmMain.removeAttribute('data-theme'):azmMain.setAttribute('data-theme','dark');
    });

    // Isotope: set var + enable
    var $pMasonry = $('.portfolio-masonry').imagesLoaded(
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
         // enable data filtering
         $('.portfolio-category-selector a').click(function (e) { 
            var filterValue = $(this).attr('data-filter');
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