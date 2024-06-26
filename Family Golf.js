var crsr = document.querySelector("#cursor");
var crsrblr = document.querySelector("#cursorblur");

document.addEventListener("mousemove", function (dots) {
  crsr.style.left = dots.x + "px";
  crsr.style.top = dots.y + "px";
  crsrblr.style.left = dots.x - 120 + "px";
  crsrblr.style.top = dots.y - 120 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "#95C11e";
  });
});

gsap.to("#nav", {
  // y:30,
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img, #about-us-in-1", {
  // y:50,
  opacity: 0,
  duration: 1,
  stagger: 0.8,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});

// gsap.from("#colon1", {
//   y:-70,
//   x:-70,
//   scrollTrigger:{
//     trigger:"#colon1",
//     scroller:"body",
//     markers:true,
//     start:"top 50%",
//     end:"top 45%",
//     scrub:1
//   }
// })

gsap.form("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    markers: true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

