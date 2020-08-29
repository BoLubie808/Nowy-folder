console.clear();

let tl = gsap.timeline({
    repeat: -1,
    defaults: { duration: .3 }
});

let rect = n => '.rect:nth-child(' + (n || 1) + ')';

tl.fromTo(
    '.wrapper',
    {
        fontSize: '1em'
    },
    {
        fontSize: '3em',
        duration: .5 + 4 * .3 + 1.3,
        ease: 'expoScale(1, 3)'
    }
).fromTo(
    rect(1),
    { left: '6em' },
    { left: 0, duration: .5 },
    '<'
).fromTo(
    rect(2),
    { top: '6em' },
    { top: 0, duration: .5 },
    '<'
).fromTo(
    rect(3),
    { right: '6em' },
    { right: 0, duration: .5 },
    '<'
).fromTo(
    rect(4),
    { bottom: '6em' },
    { bottom: 0, duration: .5 },
    '<'
).fromTo(
    rect(1),
    {
        bottom: '100%',
        width: '100%'
    },
    {
        bottom: 0,
        width: '66.666%'
    },
    '>'
).fromTo(
    rect(2),
    {
        left: '100%',
        height: '100%'
    },
    {
        left: 0,
        height: '66.666%'
    },
    '>'
).fromTo(
    rect(3),
    {
        top: '100%',
        width: '100%'
    },
    {
        top: 0,
        width: '66.666%'
    },
    '>'
).fromTo(
    rect(4),
    {
        right: '100%',
        height: '100%'
    },
    {
        right: 0,
        height: '66.666%'
    },
    '>'
).fromTo(
    rect(5),
    {
        left: '0em',
        top: '0em',
        width: '6em',
        height: '6em',
        rotate: 0
    },
    {
        left: '2em',
        top: '2em',
        width: '2em',
        height: '2em',
        rotate: '180deg',
        duration: 1,
        delay: .3
    },
    '>'
);

// tl.timeScale(.5);