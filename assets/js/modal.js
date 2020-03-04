$('.modal-toggle').on('click', function(e) {
  e.preventDefault();
  $('.modal').toggleClass('is-visible');
});

(function(){
  window.onload = function () {
    document.getElementById('cookie-popup-dismiss-btn').addEventListener('click', dismissCookiePopup);
    
    var shouldShowPopup = localStorage.getItem('cookiePopupConsumed') !== '1';
    if (shouldShowPopup) {
      setTimeout(function () {
        $('.container-navegation').addClass("filtro");
        document.getElementById('cookie-popup').className += ' is-visible';
      }, 1000);
    }
  }

  function dismissCookiePopup() {
    $('.container-navegation').removeClass("filtro");
    localStorage.setItem('cookiePopupConsumed', '1');
    document.getElementById('cookie-popup').className = '';
  }
})();


