let btn = document.getElementsByClassName('close__button');
let fav = document.getElementsByClassName('fav__item');

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

function init() {
  for (let i = 0; i < fav.length; i++) {
    fav[i].setAttribute("id", i);
  }
  for (let i = 0; i < btn.length; i++) {
    btn[i].setAttribute("id", i);
  }
}
init();

for (let key of btn){
  key.addEventListener("click", function () {
    fav[this.id].style.display = "none";
  });
}
