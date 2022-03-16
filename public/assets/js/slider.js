var flagHover = false;
var hasSlides = false;
var lastSlide = 1;

(function($) {

    $(document).ready(function () 
    {
        $(".slider-modern .slide").carousel('pause').unbind();

        $(".slider-modern .slide").each(function() 
        {
            if( $(this).find('.carousel-item').length > 1 ) {
                hasSlides = true;
            }
        });
        
        InitialSlider();

        function InitialSlider() 
        {
            if(hasSlides)
            {
                $(".slider-modern").each(function(){
                    StartSlideShow( 1, $(this) );
                });
            }
        }

        function StartSlideShow(i, objS) 
        {
            var count = objS.find(".slide").length;
            
            if( hasSlides === false || flagHover === true || count === 0 || $(window).width() < 800 ) {
                objS.find(".slide").carousel('pause').unbind();
                return false;
            }

            objS.find(".slide").carousel('pause').unbind();
            var obj = objS.find(".slide[data-order="+ i +"]");
            i = i < count ? i + 1 : 1;
            lastSlide = i;


            // go to next Slide
            if(obj.find('.carousel-item').length < 2)
            {
                obj = objS.find(".slide[data-order="+ i +"]");
                StartSlideShow(i, objS);
                
                return false;
            }

            
            if( !obj.parent().hasClass('stop') )
            {
                obj.carousel('cycle');

                obj.bind('slid.bs.carousel', function (e) {
                    StartSlideShow(i, objS);
                });
            }
            else
            {
                // prevent loop
                var slidesCount = objS.find(".slide").parent().filter(':not(.stop)').find('.carousel-item').length;

                if( slidesCount > count -1 ) {
                    StartSlideShow(i, objS);
                }
            }
        }
            

        $(window).unbind('blur').on('blur', function () {

            flagHover = true;
            
            $(".slider-modern .carousel").carousel('pause');
            var singleRow = $('.slider-single-row .carousel');

            if(singleRow.length > 0) {
                singleRow.carousel('pause');
            }
            
        }).unbind('focus').on('focus', function () {
            
            flagHover = false;
            var singleRow = $('.slider-single-row .carousel');

            if(singleRow.length > 0) {
                singleRow.carousel();
            }
            
            InitialSlider();
        });
        
        $('.slider-modern .slide').parent().unbind('mouseenter').on('mouseenter', function(e) {

            e.preventDefault();
            $(this).addClass('stop');

            var obj1 = $(this).closest('.slider');
            StartSlideShow( lastSlide - 1, obj1 );

        }).unbind('mouseleave').on('mouseleave', function(e) {

            e.preventDefault();
            $(this).removeClass('stop');

            var obj1 = $(this).closest('.slider');
            StartSlideShow( lastSlide - 1, obj1 );
        });

        $('.slider-single-row').unbind('mouseenter').on('mouseenter', function() {
            $(this).addClass('stop');
        }).unbind('mouseleave').on('mouseleave', function() {
            $(this).removeClass('stop');
        });


        if( $(window).width() < 992 && $('.carousel video').length > 0 )
        {   
            $('.carousel video').each(function() 
            {
                var img1 = $(this).closest('.carousel-inner ').find('img:first');
                if( img1.length > 0 ) {
                    $(this).closest('.carousel-item').height( img1.height() );
                }
            });
        }

        $(window).unbind('resize').on('resize', function() {
            $('.carousel video').closest('.carousel-item').removeAttr( 'style' );
        });


        $('.slider-single-row .carousel .carousel-item').each(function()
        {
            var next = $(this).next();

            if ( !next.length ) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo( $(this) );
            
            for ( var i = 0; i < 2; i++ ) 
            {
                next = next.next();

                if ( !next.length ) {
                    next = $(this).siblings(':first');
                }
                
                next.children(':first-child').clone().appendTo( $(this) );
            }
        });

        $('.slider-single-row .control').on('mouseup', function() {
            $('.slider-single-row video').each(function(){
                $(this)[0].pause();
            });
        });


        $('.carousel').bcSwipe({ threshold: 50 });

        $('.slider-modern video').each(function(){
            $(this).attr('controls');
        });
        

    });

})( jQuery );