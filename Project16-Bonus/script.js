// ## for on element

// var h1Text = document.querySelector("#first").textContent

// var splitedText = h1Text.split("")
// var clutter = ""

// splitedText.forEach(function(elem){
//   clutter += `<span>${elem}</span>`
// })

// document.querySelector('#first').innerHTML = clutter

function locoScroll() {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  // Update ScrollTrigger on Locomotive Scroll events
  locoScroll.on("scroll", ScrollTrigger.update);

  // Proxy Locomotive Scroll methods to ScrollTrigger
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // Refresh ScrollTrigger and update Locomotive Scroll
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function textSplitting() {
  var allH1 = document.querySelectorAll("#page2 h1");
  allH1.forEach(function (elem) {
    var h1Text = elem.textContent;
    var splitedText = h1Text.split("");
    var clutter = "";
    splitedText.forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });
    elem.innerHTML = clutter;
  });
}

function gsapAnimation() {
  gsap.to("#page2 h1 span", {
    color: "#E3E3C4",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2 h1",
      scroller: "#main",
      markers: true,
      start: "top 40%",
      end: "top -80%",
      scrub: 2,
    },
  });
}

locoScroll();

textSplitting();
gsapAnimation();
