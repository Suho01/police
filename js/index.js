var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets"
    },
    mousewheel: true,
    keyboard: true,
});

const $up = document.querySelector(".up");
$up.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const $span = document.querySelector(".header-top-left span");
const $active = document.querySelector(".active");

$span.addEventListener("click", function() {
    if ($active.style.display === "none") {
        $active.style.display = "block";
    } else {
        $active.style.display = "none";
    }
});