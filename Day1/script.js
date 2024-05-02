// gsap.to("#box1", {
//     x: 900,
//     duration:2,
//     delay:1,
//     rotate: 360,
//     backgroundColor:"green",
//     borderRadius:"50%",
//     scale:0.5,
//     repeat: -1,
//     yoyo: true
// })



//   gsap.from("h1", {
//     opacity: 0,
//     duration:1,
//     y:30,
//     delay:1,
//     stagger: 0.3
//   })


// gsap.to("#box1", {
//     x: 1500,
//     backgroundColor: "yellow",
//     duration: 1.5,
//     delay: 1
// })
// gsap.to("#box2", {
//     x: 1500,
//     backgroundColor: "red",
//     duration: 1.5,
//     delay: 2.5
// })
// gsap.to("#box3", {
//     x: 1500,
//     backgroundColor: "pink",
//     duration: 1.5,
//     delay: 4
// })


var tl = gsap.timeline()

tl.from("h2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay : 0.5
})

tl.from("h4", {
    y : -30,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})
tl.from("h1", {
    y: 20,
    opacity:0,
    duration:0.5,
    scale: 0.2
})