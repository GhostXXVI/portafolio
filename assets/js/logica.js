/*Carousel - Quien soy*/
$('.owl-carousel').owlCarousel({
  center: true,
  loop:true,
  margin:30,
  autoplay:true,
  responsiveClass:true,
  responsive:{
      0:{
        items:1,
        loop:false,
        stagePadding: 10,
        margin:2
      },
      600:{
        items:1
      },
      1000:{
        items:2
      }
  }
})


/*Slider - Inicio*/
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});





const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");
const scrollDown = document.querySelector(".scroll-down");
let isOpened = false;

const openModal = () => {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
  $('.modal').css({'z-index':'9'});
};

const closeModal = () => {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
  $('.modal').css({'z-index':'-1'});
};

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 3 && !isOpened) {
    isOpened = true;
    scrollDown.style.display = "none";
    openModal();
  }
});

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

document.onkeydown = evt => {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};




/*Menu*/
$('#toggle').click(function() {
   $("#rotate").toggleClass('active-rotate');
   $('#overlay').toggleClass('open');
   $('.rotate-text').hide();
   $('.toogle-btn').css("top","-30px");
});


/*Menu active */
$( document ).ready(function() {  
    BindClickEvent();
});






function BindClickEvent(){
    var selector = '.container-navegation__menu-items .item';

    $(selector ).unbind('click');

    $(selector ).bind('click', function(){
        $(selector).removeClass('active-page');
        $(this).addClass('active-page');
        
        $('.mode-night').fadeOut();
        $('.frm-login').fadeOut();
        

        if ( $(window).width() <= 600) {  
          if ( $(this).is("#home") ) { 
            $('.container-page--home').css({"transform":"translateY(-100%)", "opacity":"1"});
            $('.container-page--aboutMe').css({"transform":"translateY(0%)", "opacity":"0"});
            $('.container-investigation').css({"transform":"translateY(0%)", "opacity":"0"});
            $('.icono-menu').css({"transform":"translateY(0px)"});
            $('.container-page--portfolio').css({"transform":"translateY(0%)", "opacity":"1"});
          }

          else if($(this).is("#aboutMe")){
            $('.container-page--aboutMe').css({"transform":"translateY(-300.5%)", "opacity":"1"});
            $('.container-page--home').css({"transform":"translateY(0%)", "opacity":"0"});
            $('.container-investigation').css({"transform":"translateY(0%)", "opacity":"1"});
            $('.container-page--portfolio').css({"transform":"translateY(0%)", "opacity":"1"});
          }

          else if($(this).is("#portfolio")){
            $('.container-page--portfolio').css({"transform":"translateY(-200.5%)", "opacity":"1"});
            $('.container-page--aboutMe').css({"transform":"translateY(0%)", "opacity":"0"});
            $('.container-page--home').css({"transform":"translateY(0%)", "opacity":"0"});
            $('.container-investigation').css({"transform":"translateY(0%)", "opacity":"1"});
  
          }

          else if($(this).is("#news")){
            $('.container-page--home').css({"transform":"translateY(0%)", "opacity":"0"});
            $('.container-page--aboutMe').css({"transform":"translateY(0%)", "opacity":"0"});
            $('.container-investigation').css({"transform":"translateY(-397%)", "opacity":"1"});
            $('.icono-menu').css({"transform":"translateY(75px)"});
            $('.container-page--portfolio').css({"transform":"translateY(0%)", "opacity":"1"});
          }

        }
        if ( $(window).width() >= 600) {

          if ( $(this).is("#home") ) { 
            $('.container-page').fadeIn();
            $('.container-page').css({"width":"75%"});   
            
            $('.icono-menu').css({"transform":"translateY(0px)"}); 

            $('.container-page--aboutMe').fadeOut();
            $('.container-page--aboutMe').css({'width':'0','opacity':'0'});


            $('.container-investigation').css({"width":"14%"});
            $('.container-investigation__groupNews-news').css({'width':'100%'});

            
            $('.container-page--portfolio').fadeOut();
            $('.container-page--portfolio').css({"width":"0"});   
          }
          
          else if($(this).is("#portfolio")){
            $('.icono-menu').css({"transform":"translateY(50px)"});
            $('.container-page--portfolio').css({'width':'75%','opacity':'1','display':'flex'});

            $('.container-page--home').fadeOut();
            $('.container-page--home').css({"width":"0"});   

            $('.container-page--aboutMe').css({'width':'0%'});
            $('.container-page--aboutMe').fadeOut();

            $('.container-investigation').css({"width":"14%"});
            $('.container-investigation__groupNews-news').css({'width':'100%'});

          }

          else if($(this).is("#aboutMe")){
            $('.icono-menu').css({"transform":"translateY(25px)"});
            $('.container-page--aboutMe').css({'width':'75%','opacity':'1','display':'flex'});
            $('.container-page--aboutMe').fadeIn();
            
            $('.container-page--home').fadeOut();
            $('.container-page--home').css({"width":"0"});   
            
            $('.container-page--portfolio').fadeOut();
            $('.container-page--portfolio').css({"width":"0"});   
            
            $('.container-investigation').css({"width":"14%"});
            $('.container-investigation__groupNews-news').css({'width':'100%'});
          }


          else if($(this).is("#news")){
            $('.container-page').css({"width":"0%"});
            $('.container-page').fadeOut();
            $('.container-investigation').css({"width":"100%"});
            $('.icono-menu').css({"transform":"translateY(75px)"});

            $('.container-investigation__groupNews-news').css({'width':'24%'});
            $('.container-page--portfolio').fadeOut();
            $('.container-page--portfolio').css({"width":"0"});   
          }
        }

    });
}

