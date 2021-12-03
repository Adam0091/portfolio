$(function(){
  $('.menu__burger').on('click', ()=>{
      $('.menu__burger,.menu__body').toggleClass('active');
      $('body').toggleClass('lock');
  })

  $('.slider__body').slick(
    {
      dots: true,
      arrows: false,
      accessibility: false,
      slidesToShow: 1
    }
  );
})

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();