/*========================COUNTDOWN===============================*/
var timer;
var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7);
timer = setInterval(function () {
  timeBetweenDates(compareDate);
}, 1000);
function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();
  if (difference <= 0) {
    clearInterval(timer);
  } else {
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 18);
    hours %= 24;
    minutes %= 60;
    seconds %= 60;
    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}
/*==========================MODAL=================================*/
const modal = document.querySelector('#my--modal');
const modalButton = document.querySelector('#modal--button');
const modalClose = document.querySelector('.modal__close');
modalButton.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
function openModal() {
  modal.style.display = 'block';
}
function closeModal() {
  modal.style.display = 'none';
}
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};















$(document).ready(function () {
  $(".header__slider").slick({
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    speed: 500,
    prevArrow: ".arrows__prev",
    nextArrow: ".arrows__next",
  })
})