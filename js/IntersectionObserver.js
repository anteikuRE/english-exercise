const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("anim");
    }
  });
});

const observEl = document.querySelectorAll(".hid");
observEl.forEach((el) => observer.observe(el));
