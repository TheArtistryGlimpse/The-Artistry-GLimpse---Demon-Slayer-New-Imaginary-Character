var tl = gsap.timeline();

tl.from("#logo", {
    opacity: 0,
    scale: 2,
    duration: 1,
    delay: 1
})

tl.from("#title", {
    opacity: 0,
    x: 30,
    duration: 0.5,
})

tl.from("#subtitle", {
    opacity: 0,
    x: -30,
    duration: 0.5
})

// Create a timeline instance
let tl1 = gsap.timeline({repeat: -1, yoyo: true});

// Add the first image animation
tl1.from("#Images #image1", {
    opacity: 0,
    y: -500,
    duration: 1.25
})
.to("#Images #image1", {
    opacity: 0,
    y: -500,
    duration: 1.25
}, "+=0.5"); // Add a small delay between animations if needed

// Add the second image animation
tl1.from("#Images #image2", {
    opacity: 0,
    y: 500,
    duration: 1.25
}, "-=1.25") // Starts second animation before the first one ends
.to("#Images #image2", {
    opacity: 0,
    y: 500,
    duration: 1.25
}, "+=0.5"); // Add a small delay between animations if needed


tl.from("#socialtxt", {
    opacity: 0,
    x: -30,
    duration: 0.75
})

tl.from("#span", {
    opacity: 0,
    scale: 1,
    duration: 0.5
})

tl.from("#socials a svg", {
    opacity: 0,
    y: -30,
    stagger: 0.5
})