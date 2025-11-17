// Three.js Animated Avatar
let scene, camera, renderer, avatar;
let mouseX = 0, mouseY = 0;

function initAvatar() {
    const container = document.getElementById('avatar-container');
    if (!container) return;

    // Scene setup
    scene = new THREE.Scene();
    
    // Camera setup
    camera = new THREE.PerspectiveCamera(
        75, 
        container.clientWidth / container.clientHeight, 
        0.1, 
        1000
    );
    camera.position.z = 5;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true 
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create avatar group
    avatar = new THREE.Group();

    // Create head (sphere)
    const headGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({
        color: 0x45A29E,
        emissive: 0x45A29E,
        emissiveIntensity: 0.1,
        shininess: 100
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    avatar.add(head);

    // Create eyes
    const eyeGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const eyeMaterial = new THREE.MeshPhongMaterial({
        color: 0xDEF2F1,
        emissive: 0xDEF2F1,
        emissiveIntensity: 0.2
    });

    // Left eye
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.5, 0.3, 1.3);
    avatar.add(leftEye);

    // Right eye
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.5, 0.3, 1.3);
    avatar.add(rightEye);

    // Create smile (using a torus segment)
    const smileGeometry = new THREE.TorusGeometry(0.5, 0.1, 8, 20, Math.PI);
    const smileMaterial = new THREE.MeshPhongMaterial({
        color: 0x1F2833,
        emissive: 0x1F2833,
        emissiveIntensity: 0.1
    });
    const smile = new THREE.Mesh(smileGeometry, smileMaterial);
    smile.position.set(0, -0.3, 1.3);
    smile.rotation.z = Math.PI;
    avatar.add(smile);

    // Add floating particles around avatar
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 50;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0x74D7BB,
        transparent: true,
        opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    avatar.add(particlesMesh);

    scene.add(avatar);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x74D7BB, 1, 100);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);

    // Mouse move listener
    document.addEventListener('mousemove', onMouseMove);

    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Start animation
    animate();
}

function onMouseMove(event) {
    // Simple direct mapping
    mouseX = (event.clientX / window.innerWidth) - 0.5;
    mouseY = (event.clientY / window.innerHeight) - 0.5;
}

function onWindowResize() {
    const container = document.getElementById('avatar-container');
    if (!container || !camera || !renderer) return;

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

function animate() {
    requestAnimationFrame(animate);

    if (avatar) {
        // Gentle floating animation
        avatar.position.y = Math.sin(Date.now() * 0.001) * 0.1;
        
        // Try inverted rotation for natural movement
        avatar.rotation.y = -mouseX;
        avatar.rotation.x = mouseY;

        // Rotate particles
        if (avatar.children[4]) {
            avatar.children[4].rotation.y += 0.002;
        }
    }

    if (renderer && scene && camera) {
        renderer.render(scene, camera);
    }
}

// Initialize avatar when page loads
document.addEventListener('DOMContentLoaded', initAvatar);