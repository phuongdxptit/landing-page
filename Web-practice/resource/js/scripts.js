$(document).ready(
    function(){
        //sticky nav
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            },{
                offset: '600px'
            }
        )
        //scrool
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 700);
            event.preventDefault();
        });
        //mobile navigation
        $('.mobile-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);
                if($('.mobile-nav-icon').hasClass('fa fa-bars')){
                    $('.mobile-nav-icon').addClass('fa fa-times').attr('aria-hidden', 'true');
                    $('.mobile-nav-icon').removeClass('fa fa-bars').attr('aria-hidden', 'true')
                }else{
                    $('.mobile-nav-icon').addClass('fa fa-bars').attr('aria-hidden', 'true')
                    $('.mobile-nav-icon').removeClass('fa fa-times').attr('aria-hidden', 'true')
                }
            }
        )
    }
)