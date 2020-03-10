  $(document).ready(function(){

    referencia.on("value",function(snapshot){
      $("#portfolioContainer a.portfolio-item").remove();
      portfolio=snapshot.val();
      // Recorremos y los mostramos
      $.each(portfolio, function(indice,valor){
        var respuesta='<a class="portfolio-item '+valor.tipo+'" href="'+valor.enlace+'" target="_Blank">'+
        '<img src="'+valor.imagen+'" alt="image">'+
        '</a>';

      var $container = $('.portfolioContainer');
      $('.portfolioFilter a').on("click",function(){
      $('.portfolioFilter .current').removeClass('current');
      $(this).addClass('current');

      var selector = $(this).attr('data-filter');
      $container.isotope({
      filter: selector,
      animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
      }
      });
      return false;
      }); 
            
      $(respuesta).appendTo('#portfolioContainer');
      });
    },function(objetoError){
        console.log('Error de lectura:'+objetoError.code);
    });



    refTrabajosP.on("value",function(snapshot){
      $("#trabajoP div.blog-slider__item").remove();
      refTrabajosP=snapshot.val();
      // Recorremos y los mostramos
      $.each(refTrabajosP, function(indice,valor){
        var respuesta='<div class="blog-slider__item swiper-slide">';
          respuesta+='<div class="blog-slider__img">';
            respuesta+='<img src="'+valor.url+'" alt="">';
            respuesta+='</div>';
            respuesta+='<div class="blog-slider__content">';
              respuesta+='<p class="txt-primary txt-primary--red">'+valor.titulo+'</p>';
              respuesta+='<p class="txt-secondary__description">'+valor.descripcion+'</p>';
            respuesta+='<p class="txt-primary txt-primary--red">Herramientas</p>';
            respuesta+='<img width="100%" src="'+valor.urlHerramientas+'" alt="">';
          respuesta+='</div>';
        respuesta+='</div>';
  
        $(respuesta).appendTo('#trabajoP');


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
      });
    },function(objetoError){
        console.log('Error de lectura:'+objetoError.code);
    });


    refNoticias.on("value",function(snapshot){
      $("#blog div.container-investigation__groupNews-news").remove();
      noticias=snapshot.val();
      // Recorremos y los mostramos
      $.each(noticias, function(indice,valor){
        var respuesta='<div class="container-investigation__groupNews-news"  style="background-image: url('+valor.imagen+'); background-repeat: no-repeat; background-size: cover; background-position: center center;">';
          respuesta+='<div class="container-investigation__groupNews-news__details">';
            respuesta+='<p class="txt-primary txt-primary--blog">'+valor.titulo+'</p>';
            respuesta+='<p class="txt-secondary__description">'+valor.descripcion+'</p>';
            respuesta+='<p class="txt-secondary txt-secondary--time">';
            respuesta+='<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>'+valor.dia;
            respuesta+='<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>'+valor.hora;
            respuesta+='</p>';
          respuesta+='</div>';
        respuesta+='</div>';
  
        $(respuesta).appendTo('#blog');
      });

    },function(objetoError){
        console.log('Error de lectura:'+objetoError.code);
    });

    refEmpleo.on("value",function(snapshot){
      $("#empresa div").remove();
      empleo=snapshot.val();
      // Recorremos y los mostramos
      var anios;
      $.each(empleo, function(indice,valor){
        anio = parseInt(valor.dateF.substr(0, 4)) - parseInt(valor.dateI.substr(0, 4));
        mes = parseInt(valor.dateF.substr(5, 7)) - parseInt(valor.dateI.substr(5, 7));
        var respuesta='<div class="item">'+
          '<div class="container-page--aboutMe__jobs-job">'+
            '<div class="container-page--aboutMe__jobs-job__header">'+
              '<div class="job_header-logo">'+
                '<img src="'+valor.logo+'" alt="">'+
              '</div>'+
              '<div class="job_header-count">'+
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>'+
                '<p>3</p>'+
              '</div>'+
                
            '</div>'+
            '<div class="container-page--aboutMe__jobs-job__body">'+
              '<p class="txt-primary txt-primary--person" style="color: '+valor.color+';">'+valor.company+'</p>'+
              '<small>'+valor.position+'</small>'+
              '<p class="txt-date">('+anio+'<small> Año </small> '+mes+'<small> Meses</small>)</p>'+
              '<ul>'+
                '<li>'+valor.description+'</li>'+
              '</ul>'+
            '</div>'+
            '<div class="container-page--aboutMe__jobs-job__footer">'+
              '<div class="container-page__workFlow-card">'+
                  '<div class="flujo">'+
                      '<small class="txt-primary txt-primary--red">Herramientas</small>'+
                      '<img src="'+valor.skills+'" alt="">'+
                  '</div>'+
                  '<div class="efecto"></div>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
        $(respuesta).appendTo('#empresa');
      });

      /*Carousel - Quien soy*/
      $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
          center: true,
          loop:true,
          autoWidth:true,
          margin:30,
          autoplay:false,
          responsiveClass:true,
          responsive:{
              0:{
                items:1,
                loop:false,
                autoplay:true,
                stagePadding: 10,
                margin:5
              },
              600:{
                items:1
              },
              1000:{
                items:2
              }
          }
        });
      });
    },function(objetoError){
        console.log('Error de lectura:'+objetoError.code);
    });
    refSkillsD.on("value",function(snapshot){
      $("#skillsD div.container-page--aboutMe__skills-group__skill").remove();
      skills=snapshot.val();
      // Recorremos y los mostramos
      $.each(skills, function(indice,valor){
        var respuesta='<div class="container-page--aboutMe__skills-group__skill">'+
          '<img src="'+valor.url+'" alt="">'+
          '<p class="txt-primary txt-primary--skill">'+valor.nivel+'</p> '+
          '</div>';
        $(respuesta).appendTo('#skillsD');
      });

    },function(objetoError){
        console.log('Error de lectura:'+objetoError.code);
    });

    refSkillsI.on("value",function(snapshot){
      $("#skillsI div.container-page--aboutMe__skills-group__skill").remove();
      skills=snapshot.val();
      // Recorremos y los mostramos
      $.each(skills, function(indice,valor){
        var respuesta='<div class="container-page--aboutMe__skills-group__skill">'+
          '<img src="'+valor.url+'" alt="">'+
          '<p class="txt-primary txt-primary--skill">'+valor.nivel+'</p> '+
          '</div>';
  
        $(respuesta).appendTo('#skillsI');
      });
    },function(objetoError){
        console.log('Error de lectura:'+objetoError.code);
    });

  });

