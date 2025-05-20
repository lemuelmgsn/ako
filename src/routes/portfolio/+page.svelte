<script>
  import gsap from 'gsap';
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

  onMount(() => {
    const scene = new THREE.Scene();

    // Texture loader
    const textureLoader = new THREE.TextureLoader();
    const basketballTexture = textureLoader.load('/textures/basketbaltexture.jpg');

    // Object / Basketball
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: basketballTexture,
      roughness: 0.8,
      metalness: 0.2,
      transparent: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 10, 0);
    scene.add(mesh);

    // Light
    const pointLight = new THREE.PointLight(0xffffff, 50, 100);
    pointLight.position.set(0, 10, 10);
    scene.add(pointLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.1));

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 20;
    camera.lookAt(mesh.position);
    scene.add(camera);

    // Renderer
    const canvas = document.querySelector('.webgl');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2);

    // Orbitcontrols
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = false;

    // Responsiveness for canvas
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    // Animation loop
    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    };
    loop();

    // GSAP timeline animation
    const bounce = gsap.timeline();

    // Bounce function
    function bounceOnce(height, totalDuration = 1.4) {
      const fallTime = totalDuration * 0.6;
      const squashTime = 0.08;
      const restoreTime = 0.2;
      const riseTime = totalDuration * 0.3;

      bounce.to(mesh.position, {
        y: -2.5,
        duration: fallTime,
        ease: "power3.in"
      });

      bounce.to(mesh.scale, {
        y: 0.75,
        x: 1.15,
        z: 1.15,
        duration: squashTime,
        ease: "power1.inOut"
      });

      bounce.to(mesh.scale, {
        y: 1,
        x: 1,
        z: 1,
        duration: restoreTime,
        ease: "elastic.out(1, 0.4)"
      });

      bounce.to(mesh.position, {
        y: height,
        duration: riseTime,
        ease: "power2.out"
      }, "<");
    }

    // Bij de laatste stuiter exploderen
    function explodeOnImpact(totalDuration = 1.2) {
      const fallTime = totalDuration * 0.6;
      const squashTime = 0.1;

      // Last bounce
      bounce.to(mesh.position, {
        y: -2.5,
        duration: fallTime,
        ease: "power3.in"
      });

      // Squash for ball
      bounce.to(mesh.scale, {
        y: 0.7,
        x: 1.2,
        z: 1.2,
        duration: squashTime,
        ease: "power1.inOut"
      });

      // Explosion
      bounce.to(mesh.scale, {
        x: 5,
        y: 5,
        z: 5,
        duration: 0.4,
        ease: "power4.out"
      }, "+=0.05");

      // Fade in text
      bounce.to(material, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.in",
        onComplete: () => {
          mesh.visible = false;
          gsap.fromTo("h2", {
            opacity: 0,
            scale: 0.8
          }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out"
          });
        }
      }, "-=0.2");
    }

    // Animations (uitvoering)

    // 2 Normal bounces
    bounceOnce(6, 1.6);
    bounceOnce(3.5, 1.3);

    // 3rd bounce explosion on impact
    explodeOnImpact(1.0);
  });
</script>

<main>
  <canvas class="webgl"></canvas>
  <h2>Boom!</h2>
</main>

<style>
  * {
    font-family: sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  .webgl {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
  }

  h2 {
    position: absolute;
    bottom: 50vh;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 2em;
    z-index: 2;
    opacity: 0;
    transform: scale(0.8);
  }

  body {
    overflow: hidden;
    background: #a4e08b;
  }

  main {
    height: 100vh;
    width: 100vw;
  }
</style>
