let hamBtn = document.querySelector(".hamburger");
let xBtn = document.querySelector(".x");
let imageCont = document.querySelector(".image-cont");
let colorProgress = document.querySelectorAll(".color-progress");
let modal = document.querySelector(".slide");
/* progress start*/
let count = 1;
let hash = {
  1: "one",
  2: "two",
  3: "three",
};

const modalData = {
  1: `<h2>Connect your data</h2>
  <p class="modal description">
    Synchronize data from various accounting systems/ERPs, HRISs,
    CRMs, or data warehouses.
  </p>`,
  2: `<h2>Analyze in Swift</h2>
  <p class="modal description">
   Harness high speed data analysis for instant insights, maing informed decision swiftly.
  </p>`,
  3: `<h2>Automate Reporting</h2>
  <p class="modal description">
    Synchronize data from various accounting systems/ERPs, HRISs,
    CRMs, or data warehouses.
  </p>`,
};

function reset(node, timer) {
  clearInterval(timer);
  Array.from(node)[0].style.width = `${0}%`;
  Array.from(node)[1].style.width = `${0}%`;
  Array.from(node)[2].style.width = `${0}%`;
  console.log(Array.from(node))
}

function loadProgress() {
  let holder = 1;

  const inner = document.querySelector(`.progress-inner.${hash[count]}`);
  const innerAll = document.querySelectorAll(`.progress-inner`);

  inner.style.width = `${holder}%`;

  const timer = setInterval(() => {
    if (holder < 101) {
      inner.style.width = `${holder}%`;
      holder++;
    } else {
      if (count < 3) {
        count++;
      } else {
        reset(innerAll, timer);
        const t2 = setTimeout(() => {
          count = 1;
          modal.innerHTML = modalData[count];
          loadProgress();
          clearTimeout(t2);
        }, 200);
        return;
      }
      loadProgress();
      clearInterval(timer);
      modal.innerHTML = modalData[count];
    }
  }, 10);
}
/* progress end*/

function timer(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function hamburgerOpen() {
  let mobileMenu = document.querySelector(".mobile-menu-cont");
  mobileMenu.classList.add("unhide");
  mobileMenu.classList.remove("hide");
  hamBtn.classList.add("hide");
  xBtn.classList.remove("hide");
  xBtn.classList.add("unhide");
}

function xClose() {
  let mobileMenu = document.querySelector(".mobile-menu-cont");
  mobileMenu.classList.add("hide");
  mobileMenu.classList.remove("unhide");
  hamBtn.classList.remove("hide");
  xBtn.classList.add("hide");
  xBtn.classList.remove("unhide");
}

function imgAddOverlay() {
  document.querySelector(".playbtn-cont").classList.add("padding-anim");
  imageCont.classList.add("overlay-anim");
}

function imgRemoveOverlay() {
  document.querySelector(".playbtn-cont").classList.remove("padding-anim");
  imageCont.classList.remove("overlay-anim");
}

hamBtn.addEventListener("click", hamburgerOpen);

xBtn.addEventListener("click", xClose);

// hover animation
imageCont.addEventListener("mouseover", imgAddOverlay);
imageCont.addEventListener("mouseout", imgRemoveOverlay);

window.addEventListener("load", () => {
/*setTimeout(function () {
    colorProgress[0].classList.add("progress-anim");
  }, 0);
  setTimeout(function () {
    colorProgress[1].classList.add("progress-anim");
  }, 3000);
  setTimeout(function () {
    colorProgress[2].classList.add("progress-anim");
  }, 6000); */

  /* load progress */
  loadProgress();
});
