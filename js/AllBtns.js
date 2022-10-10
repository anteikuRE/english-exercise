// "use strict";

export function GetStartedBtn(btn) {
  const welcomeSection = document.querySelector(".welcome");
  const descriptionSection = document.querySelector(".description-of-exercise");
  btn.addEventListener("click", function () {
    welcomeSection.style.display = "none";
    descriptionSection.style.display = "block";
  });
}
export function SkipBtn(btn) {
  const descriptionSction = document.querySelector(".description-of-exercise");
  const exerciseSection = document.querySelector(".exercise");
  btn.addEventListener("click", function () {
    btn.classList.add("arrow-activate");
    setTimeout(() => {
      descriptionSction.style.display = "none";
      exerciseSection.style.display = "flex";
    }, 300);
  });
}
export function FinishBtn(btn) {
  const exerciseSection = document.querySelector(".exercise");
  const results = document.querySelector(".results");

  exerciseSection.style.display = "none";
  results.style.display = "flex";
}
export function ContinueBtn(
  btn,
  func,
  renderLoadBar,
  removeLoadBar,
  placeholder
) {
  const results = document.querySelector(".results");
  const exerciseSection = document.querySelector(".exercise");
  btn.addEventListener("click", function () {
    results.style.display = "none";
    exerciseSection.style.display = "flex";
    placeholder.style.opacity = "0";
    func();
    setTimeout(() => {
      renderLoadBar();
    }, 50);
    setTimeout(() => {
      removeLoadBar();
      placeholder.style.opacity = "1";
    }, 600);
    results.classList.remove("anim");
  });
}
