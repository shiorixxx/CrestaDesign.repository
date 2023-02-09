"use strict";

// swiper.js---------------

const mySwiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  speed: 2000, //スライドスピード
  autoplay: {
    delay: 5000, //3000ミリ秒（3秒）ごとに自動でスライド
    disableOnInteraction: true,
  },
});

// ヘッダースクロール制御
$(function () {
  $(window).on("scroll", function () {
    if ($(".fv").height() < $(this).scrollTop()) {
      $(".header").addClass("js-header-color ");
    } else {
      $(".header").removeClass("js-header-color ");
    }
  });
});

// =======================＝＝
// ハンバーガーメニュー
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

//変数宣言
const hamburgerMenu = document.querySelector(".hamburger-menu");

// ハンバーガーメニューがクリックされた時に表示されるメニュー画面の要素

const navi = document.getElementById("hamburger-nav");

// ハンバーガーメニュー内の各セクションの要素

const humbergerMenuSections = document.querySelectorAll(
  "humberger-menu-section"
);
// ハンバーガーメニューをクリックした時の処理
hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active");
  navi.classList.toggle("active");
});

// ハンバーガーメニュー内の各セクションをクリックした際、開いていたハンバーガーメニューを閉じる

humbergerMenuSections.forEach((humbergerMenuSections) => {
  humbergerMenuSection.addEventListener("click", function () {
    hamburgerMenu.classList.remove("active");
    navi.classList.remove("active");
  });
});
