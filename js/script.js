"use strict";

import { GetStartedBtn, SkipBtn, FinishBtn, ContinueBtn } from "./AllBtns.js";

const start = document.querySelector(".start");
const arrow = document.querySelector(".arrow");
const skip = document.querySelector(".skip");
const finish = document.querySelector(".finish");
const textArea = document.querySelector(".text-area");
const placeholder = document.querySelector(".placeholder");
const width = window.screen.availWidth;
const body = document.querySelector("body");
const exerciseSec = document.querySelector(".exercise");
const continueBtn = document.querySelector(".continue");
const resultOutput = document.querySelector(".result-output");
const errMessage = document.querySelector(".message");
let random;

GetStartedBtn(start);
SkipBtn(arrow);

// const ContinueRender = function(){

// }
const renderLoadBar = () => {
  const markup = `
    <div class="anim-bar">
      <div class="anim-block"></div>
    </div>
  
      `;

  // <div class="spinner spinner-anim" style = "display: flex; justify-content: center; padding-top: 10%;">
  //         <svg style = "transform: translateY(188px);">
  //           <use href="icons.svg#icon-loader"></use>
  //         </svg>
  //       </div>
  //   this._clear();
  exerciseSec.insertAdjacentHTML("afterbegin", markup);
};
renderLoadBar();

//////////////////////////////////////////////////////////////////
const sht = async function () {
  const randPage = Math.floor(Math.random() * 7);
  let fet = await fetch(
    `https://picsum.photos/v2/list?page=${randPage}&limit=100`
  );
  let fetTet = await fet.json();
  const randomGenerator = function () {
    random = Math.floor(Math.random() * 100);
    return random;
  };
  randomGenerator();
  // console.log(fetTet);
  const eee = fetTet[`${random}`].download_url;
  // console.log(eee);
  placeholder.style.background = `url(${eee})`;
  placeholder.style.backgroundSize = "cover";
};
const removeLoadBar = function () {
  const loadBar = document.querySelector(".anim-bar");
  //   console.log(sp);
  loadBar.remove();
};
ContinueBtn(continueBtn, sht, renderLoadBar, removeLoadBar, placeholder);
sht();
removeLoadBar();
skip.addEventListener("click", function () {
  placeholder.style.opacity = "0";
  sht();
  setTimeout(() => {
    renderLoadBar();
  }, 50);
  setTimeout(() => {
    removeLoadBar();
    placeholder.style.opacity = "1";
  }, 600);
});

const textAreaErr = () => {
  errMessage.style.display = "block";
};
const textAreaSucces = () => {
  const lengthOfText = textArea.value.split(" ").join("").length;
  console.log(lengthOfText);
  textArea.value = "";
  FinishBtn(finish);
  if (lengthOfText >= 150) {
    resultOutput.textContent = `Amazing🎉🎉🎉, you got ${lengthOfText} letters`;
    console.log("amazing", lengthOfText);
  }
  if (lengthOfText >= 100 && lengthOfText < 150) {
    resultOutput.textContent = `Good✨✨✨, you got ${lengthOfText} letters`;
    console.log("good", lengthOfText);
  }
  if (lengthOfText >= 50 && lengthOfText < 100) {
    resultOutput.textContent = `Fine👍👍👍, you got ${lengthOfText} letters`;
    console.log("fine", lengthOfText);
  }
  if (lengthOfText < 50) {
    console.log("add details or skip to next image");
  }
};
finish.addEventListener("click", function (e) {
  e.preventDefault();
  textArea.value.length > 50 ? textAreaSucces() : textAreaErr();
});
