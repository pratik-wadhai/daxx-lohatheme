function userScroll() {
  const navbar = document.querySelector(".main-header");
  const toTopBtn = document.querySelector("#to-top");

  if (navbar) {
    // Ensure the navbar exists
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("fixed-header");
        toTopBtn.classList.add("show");
      } else {
        navbar.classList.remove("fixed-header");
        toTopBtn.classList.remove("show");
      }
    });
  } else {
    console.log("Navbar element not found");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function incrementStats() {
  const counters = document.querySelectorAll(".count-text");
  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute("data-bs-target");
      const c = +counter.innerText;

      const increment = target / 200;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}
document.querySelector("#to-top").addEventListener("click", scrollToTop);
document.addEventListener("DOMContentLoaded", incrementStats);
document.addEventListener("DOMContentLoaded", userScroll);
