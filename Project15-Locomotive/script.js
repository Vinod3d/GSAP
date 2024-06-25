// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

// Update ScrollTrigger on Locomotive Scroll events
locoScroll.on("scroll", ScrollTrigger.update);

// Proxy Locomotive Scroll methods to ScrollTrigger
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Refresh ScrollTrigger and update Locomotive Scroll
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// GSAP animations with ScrollTrigger
gsap.from('#page1 #box', {
  scale: 0,
  duration: 1,
  delay: 1,
  opacity: 0,
  rotate: 360
});

gsap.from('#page3 #box', {
  scale: 0,
  duration: 1,
  delay: 1,
  opacity: 0,
  rotate: 360,
  scrollTrigger: {
    trigger: '#page3 #box',
    start: 'top 50%',
    scroller: '#main',
    markers: true
  }
});
