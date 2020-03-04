$(function(){
  // メインの画像スライド
  $(".fade-img img:not(:first-child)").hide();
  setInterval(function() {
    $(".fade-img img:first-child").fadeOut(4000).next("img").fadeIn(4000).end().appendTo(".fade-img");
  },6000);

  // ヘッダーのオンオフ
    var header = $('header');    
    header.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            header.fadeIn(1000);
        } else {
            header.fadeOut(1000);
            $('#toggle').removeClass("on");
            $('#menu').fadeOut();
        }
      });
  // ハンバーガーメニュー
    $("#toggle").click(function() {
        $(this).toggleClass("on");
        $("#menu").fadeToggle();
      });

    $('.btn-top').hover(function(){
        $('.arrow').animate({width:'54px',height:'54px'},100);
        },function(){
          $('.arrow').animate({width:'50px',height:'50px'},100);

        });

});