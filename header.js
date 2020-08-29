(function () {

    let scene, camera, renderer;

    scene = new THREE.Scene();
    document.addEventListener('mousemove', onMouseMove, false);
    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

    let mouseX, mouseY;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const distance = Math.min(250, window.innerWidth / 4);

    const geometry = new THREE.Geometry();

    for (let i = 0; i < 50; i++) {

        const vertex = new THREE.Vector3();

        const theta = THREE.Math.randFloatSpread(360);
        const phi = THREE.Math.randFloatSpread(360);

        vertex.x = distance * Math.sin(theta) * Math.cos(phi);
        vertex.y = distance * Math.sin(theta) * Math.sin(phi);
        vertex.z = distance * Math.cos(theta);

        geometry.vertices.push(vertex);

    }

    const color = new THREE.Color('hsl(0, 100%, 100%)');

    const particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color, size: 2 }));

    const renderingParent = new THREE.Group();
    renderingParent.add(particles);

    const resizeContainer = new THREE.Group();
    resizeContainer.add(renderingParent);
    scene.add(resizeContainer);

    camera.position.z = 100;

    const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    let myTween;

    function onMouseMove(event) {
        if (myTween)
            myTween.kill();

        mouseX = (event.clientX / window.innerWidth) * 1 - 1;
        mouseY = - (event.clientY / window.innerHeight) * 1 + 1;
        myTween = gsap.to(particles.rotation, { duration: 0.1, x: mouseY * -1, y: mouseX });
    }

    animate();

    const animProps = { scale: 1, xRot: 0, yRot: 0 };
    gsap.to(animProps, {
        duration: 10, scale: 1.3, repeat: -1, yoyo: true, ease: 'sine', onUpdate: function () {
            renderingParent.scale.set(animProps.scale, animProps.scale, animProps.scale);
        }
    });

    gsap.to(animProps, {
        duration: 120, xRot: Math.PI * 2, yRot: Math.PI * 4, repeat: -1, yoyo: true, ease: 'none', onUpdate: function () {
            renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
        }
    });

})();