`use strict`;
//Chức năng ẩn thông tin cá nhân
const cont1 = document.querySelector(`.container--1`);
const cont2 = document.querySelector(`.container--2`);
const email = document.querySelector(`.email`);
const submit = document.querySelector(`.btn`);
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// check xem email nhap vao hop le hay ko
submit.addEventListener(`click`, function () {
  if (email.value.match(regex)) {
    cont1.classList.remove(`hidden`);
    cont2.style.display = `none`;
  } else {
    console.log("Email không hợp lệ");
  }
});
//Chức năng ẩn thông tin nghề nghiệp
const viewMore = document.querySelectorAll(`.big-title`);
const clickMeOpen = document.querySelectorAll(`.open`);
const clickMeClose = document.querySelectorAll(`.close`);
const detail = document.querySelectorAll(`.detail`);
// di chuot thi hien thi nut viewmore
for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener(`mouseover`, function () {
    clickMeOpen[i].classList.remove(`hide`);
  });
  // nha chuot ra thi an nut viewmore
  viewMore[i].addEventListener(`mouseout`, function () {
    clickMeOpen[i].classList.add(`hide`);
  });
  //click nut viewmore--> hien thi them thong tin
  for (let a = 0; a < clickMeOpen.length; a++) {
    clickMeOpen[a].addEventListener(`click`, function () {
      detail[a].classList.remove(`hide`);
      clickMeOpen[a].classList.add(`hide`);
      clickMeClose[a].classList.remove(`hide`);
    });
  }
  // click nut viewless de thu gon cac thong tin lai nhu ban dau
  for (let u = 0; u < clickMeOpen.length; u++) {
    clickMeClose[u].addEventListener(`click`, function () {
      detail[u].classList.add(`hide`);
    });
  }
}
