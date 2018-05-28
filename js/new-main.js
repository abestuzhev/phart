;$(function(){

    // $('.brands-slider').jcarousel({
    //     vertical: true
    // });
    //
    // $('.jcarousel-prev').jcarouselControl({
    //     target: '-=1'
    // });
    //
    // $('.jcarousel-next').jcarouselControl({
    //     target: '+=1'
    // });
    //
    // $(".brands-slider").royalSlider({
    //     // options go here
    //     // as an example, enable keyboard arrows nav
    //     keyboardNavEnabled: true,
    //     slidesOrientation: 'vertical',
    //     minSlideOffset:10
    // });

    $(".verticalCarousel").verticalCarousel({
        currentItem: 1,
        showItems: 4

    });

    var startMonth = 0,
        endMonth = 0,
        startCount = 5,
        endCount = 8;

    if(startCount < endCount){
        startMonth = (startCount - 1) * 8.334;
        endMonth = (12 - parseInt(endCount)) * 8.334;
        console.log('startMonth: ' + startMonth);
        console.log('endMonth: ' + endMonth);


        $('.product-period__line').css({
            left: startMonth + '%',
            right: endMonth + '%'
        });
    }

    $(document).ready(function() {
        $(".fancybox").fancybox();
    });



    $(document).on('click', '.c-btn-expand', function(e){
        e.preventDefault();
        var self = $(this);
        self.toggleClass('active');
        var btnText = self.html();
        if(btnText == 'свернуть'){
            self.html('развернуть');
        }else {
            self.html('свернуть');
        }
        self.parents('.product-item__footer')
            .siblings('.product-item__body').slideToggle(300)
    })

});