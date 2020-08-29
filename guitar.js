gsap.set("#neckHighlight1", { scale: 1.5, y: -30 });
gsap.set("#neckHighlight2", { scale: 1.5, y: -30 });
gsap.set('svg', { visibility: 'visible' });
const left = gsap.timeline({
    paused: true,
    yoyo: true,
    repeat: 1,
    defaults: { duration: 0.96, ease: "expo" }
});
left
    .to("#bodyBack", { x: -6 }, "body")
    .to("#bodyFront", { x: 6, y: 1 }, "body")
    .to("#neckBack", { x: -2 }, "body")
    .to("#neck", { x: 4 }, "body")
    .to("#neckClipGroup", { x: 4 }, "body")
    .to("#highLightGroup", { y: 20, ease: "power4.out" }, "body")
    .to("#headStock", { x: 4 }, "body")
    .to("#headStockBack", { x: -2 }, "body")
    .to(
        "#bridge",
        { x: 4, y: 1, scaleX: 0.98, transformOrigin: "right center" },
        "body"
    )
    .to("#soundhole", { x: 4, y: 1 }, "body")
    .to("#holeClipGroup", { x: 4, y: 1 }, "body")
    .to("#strings", { x: 4 }, "body")
    .to("#guitar", { rotation: -5, transformOrigin: "left bottom" }, "body")
    .to(
        "#shadow",
        {
            scaleX: 0.88,
            transformOrigin: "50% 50%",
            duration: 0.32,
            ease: "power1"
        },
        "body+=0.04"
    );

const right = gsap.timeline({
    paused: true,
    yoyo: true,
    repeat: 1,
    defaults: { duration: 0.96, ease: "expo" }
});
right
    .to("#bodyBack", { x: 6 }, "body")
    .to("#bodyFront", { x: -6, y: -1 }, "body")
    .to("#neckBack", { x: 2 }, "body")
    .to("#neck", { x: -4 }, "body")
    .to(
        "#neckHighlight1",
        { y: -40, ease: "power4.out", morphSVG: "#neckHighlightMoprh1" },
        "body"
    )
    .to(
        "#neckHighlight2",
        { y: -40, ease: "power4.out", morphSVG: "#neckHighlightMorph2" },
        "body"
    )
    .to("#highLightGroup", { y: 20, ease: "power4.out" }, "body")
    .to("#neckClipGroup", { x: -4 }, "body")
    .to("#headStock", { x: -4 }, "body")
    .to("#headStockBack", { x: 2 }, "body")
    .to(
        "#bridge",
        { x: -4, y: -1, scaleX: 0.98, transformOrigin: "left center" },
        "body"
    )
    .to("#soundhole", { x: -4, y: -1 }, "body")
    .to("#holeClipGroup", { x: -4, y: -1 }, "body")
    .to("#strings", { x: -4 }, "body")
    .to(
        "#guitar",
        { rotation: 5, y: -10, transformOrigin: "left bottom" },
        "body"
    )
    .to("#holeLight", { x: 20 }, "body")
    .to(
        "#shadow",
        {
            scaleX: 0.88,
            transformOrigin: "50% 50%",
            duration: 0.32,
            ease: "power1"
        },
        "body+=0.04"
    );

const stringTl = gsap.timeline({
    paused: true,
    yoyo: true,
    defaults: { duration: 0.32, ease: "elastic.out(0.75, 0.3)" }
});
stringTl
    .to("#strings line", { x: -2, stagger: 0.04, strokeWidth: 3 }, "in")
    .to("#strings line", { x: 2, stagger: 0.04, strokeWidth: 2 }, "in+=0.04")
    .to("#strings line", { x: 0, stagger: 0.04, strokeWidth: 2 }, "in+=0.08");

gsap.set("#circle", { x: 10, opacity: 0 });

const noteTl = gsap.timeline({ paused: true });
noteTl
    .to("#circle", { opacity: 1, duration: 0.01 }, "notes")
    .to(
        "#circle",
        {
            scale: 2.25,
            transformOrigin: "center center",
            duration: 0.64,
            ease: "circ"
        },
        "notes"
    )
    .to(
        "#note",
        {
            scale: 1.35,
            transformOrigin: "center center",
            motionPath: { path: "#notePath", align: "self" },
            duration: 1.9
        },
        "notes"
    )
    .to(
        "#note",
        { opacity: 0, transformOrigin: "center center", duration: 0.7 },
        "notes+=1"
    )
    .to(
        "#note2",
        {
            scale: 1.25,
            transformOrigin: "center center",
            motionPath: { path: "#notepath2", align: "self" },
            duration: 1.9
        },
        "notes"
    )
    .to(
        "#note2",
        { opacity: 0, transformOrigin: "center center", duration: 0.7 },
        "notes+=1"
    )
    .to("#circle", { opacity: 0, duration: 0.16 }, "notes+=0.24");

gsap.set("#note", { transformOrigin: "center center" });

const noteRotation = gsap.timeline({
    paused: true,
    defaults: { duration: 0.32 }
});
noteRotation
    .to(
        "#note",
        {
            keyframes: [
                { rotation: 3 },
                { rotation: -3 },
                { rotation: 5 }
            ]
        },
        0
    )
    .to(
        "#note2",
        {
            keyframes: [
                { rotation: 3 },
                { rotation: -3 },
                { rotation: 5 }
            ]
        },
        0
    );

const masterTl = gsap.timeline({ repeat: -1 });
masterTl
    .add(left.play(), 0)
    .add(right.play(), 1.92)
    .add(stringTl.play(), 1.96)
    .add(noteTl.play(), 1.9)
    .add(noteRotation.play(), 1.9);
