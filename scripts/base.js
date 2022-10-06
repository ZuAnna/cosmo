// let arrowSliderOne = document.querySelectorAll('.slick-arrow');
// console.log(arrowSliderOne);
// arrowSliderOne.forEach((item =>{
//    if(item.classList.includes('slick-disabled')){
//       item.style.cursor = 'not-allowed';
//    }
// }))
document.addEventListener("DOMContentLoaded", () => {
  const menuHeaderBtn = document.querySelectorAll(".btn-drop-now");
  const drops = document.querySelectorAll(".dropdown");
  menuHeaderBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      let currBtn = e.currentTarget;
      let drop = currBtn
        .closest(".header-drop-items")
        .querySelector(".dropdown");
      let bodyBg = document.querySelector(".wrapper");
      let headerInBg = document.querySelector(".header");
      let main = document.querySelector(".main-outer");

      menuHeaderBtn.forEach((el) => {
        let bodyBg = document.querySelector(".wrapper");
        let headerInBg = document.querySelector(".header");
        if (el !== currBtn) {
          el.classList.remove("active-btn");
          // bodyBg.classList.remove('drop--bg');
          // headerInBg.classList.remove('header-in-bg')
        }
        // if(!el.classList.contains('ative-btn')){
        //    bodyBg.classList.remove('drop--bg');
        //    headerInBg.classList.remove('header-in-bg')
        // }
      });
      drops.forEach((el) => {
        if (el !== drop) {
          el.classList.remove("active-drop");
        }
      });

      if (!el.classList.contains("active-btn")) {
        bodyBg.classList.remove("drop--bg");
        headerInBg.classList.remove("header-in-bg");
      }

      drop.classList.toggle("active-drop");
      currBtn.classList.toggle("active-btn");
      bodyBg.classList.toggle("drop--bg");
      headerInBg.classList.toggle("header-in-bg");
    });
  });
});

// tabs products
const tabsBtn = document.querySelectorAll(".tabs-btn");
const tabs = document.querySelectorAll(".tabs-content");

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let currBtn = item;
    let tabId = currBtn.getAttribute("data-tab");
    let currTab = document.querySelector(tabId);

    if (!currBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });
      tabs.forEach(function (item) {
        item.classList.remove("active");
      });
      currBtn.classList.add("active");
      currTab.classList.add("active");
    }
  });
});

// counter products

const counters = document.querySelectorAll("[data-counter]");

counters.forEach((counter) => {
  counter.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".button")) {
      let value = parseInt(
        target.closest(".trendings-btn__counter").querySelector("input").value
      );

      if (target.classList.contains("minus-in")) {
        value--;
      } else {
        value++;
      }
      if (value <= 0) {
        value = 1;
      }

      target.closest(".trendings-btn__counter").querySelector("input").value =
        value;
    }
  });
});

// Дата
let dateArr = document.querySelectorAll('.date');
let monthArr = document.querySelectorAll('.month');
let yearArr = document.querySelectorAll('.year');
let date = new Date();
let currDate = date.getDate();
let currMonth = date.getMonth();
let currYear = date.getFullYear();

switch (currMonth) {
  case 0:
    currMonth = 'Yan';
    break;
  case 1:
    currMonth = 'Feb';
    break;
  case 2:
    currMonth = 'Mar';
    break;
  case 3:
    currMonth = 'Apr';
    break;
  case 4:
    currMonth = 'May';
    break;
  case 5:
    currMonth = 'Jun';
    break;
  case 6:
    currMonth = 'Jul';
    break;
  case 7:
    currMonth = 'Aug';
    break;
  case 8:
    currMonth = 'Sep';
    break;
  case 9:
    currMonth = 'Oct';
    break;
  case 10:
    currMonth = 'Nov';
    break;
  case 11:
    currMonth = 'Dec';
    break;
}

let dateBlock = function (inData, inMonth, inYear){
  inData.forEach(el => {
    el.innerText = currDate;
  });
  inMonth.forEach(el => {
    el.innerText = `${currMonth},`;
  });
  inYear.forEach(el => {
    el.innerText = currYear;
  })
}
dateBlock(dateArr, monthArr, yearArr);

// light
let lightBtns = document.querySelectorAll('.news__span');
let lightFade = document.querySelector('.lightboxFade');
let lightbox = document.querySelectorAll('.lightbox');
let lightWindow = document.querySelectorAll('.lightbox__container');
let closing = document.querySelectorAll('.close-light');


function activeAdd (){
  lightbox.forEach(el=>{
    el.classList.add('active');
  });
  lightFade.classList.add('active');

}
function closeLight(){
  lightbox.forEach(el=>{
    el.classList.remove('active');
  });

  lightFade.classList.remove('active');

}
lightBtns.forEach(el=> {
  el.addEventListener('click', ()=>{
    activeAdd();
  } );
});

let activeClassFade = lightFade.classList.contains('active');
let activeClassBox = lightbox.forEach(el=>{
 el.classList.contains('active')
 })

closing.forEach(el=>{
  el.addEventListener('click', closeLight);
})


lightFade.addEventListener('click',(e)=>{
  closeLight();
});

// btnIsShow UP
const scrollBtn = document.querySelector('.button-up')

window.onscroll = ()=>{
  if(window.scrollY > 830){
    scrollBtn.classList.remove('isHide');
  } else if (window.scrollY < 830){
    scrollBtn.classList.add('isHide');
  };
  scrollBtn.addEventListener('click', ()=>{
    window.scrollTo(0, 0)
  });
}
