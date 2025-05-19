<script>
  import gsap from 'gsap';
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

  onMount(() => {
    // Scene
    const scene = new THREE.Scene();

    // Texture loader
    const textureLoader = new THREE.TextureLoader();
    const basketballTexture = textureLoader.load('/textures/basketbaltexture.jpg');

    // Geometry & Material
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: basketballTexture,
      roughness: 0.8,
      metalness: 0.2,
      transparent: true
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Startpositie rechtsboven
    mesh.position.set(10, 5, 0);

    // Lights
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
    scene.add(camera);

    // Renderer
    const canvas = document.querySelector('.webgl');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(2);
    renderer.render(scene, camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 25;

    // Resize handling
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

    // ✅ Realistische stuiter animatie met GSAP
    const bounceTl = gsap.timeline({ delay: 0.2 });

    bounceTl.to(mesh.position, {
      x: 5,
      y: -2,
      duration: 0.5,
      ease: 'power2.in'
    });
    bounceTl.to(mesh.position, {
      y: 1.5,
      duration: 0.3,
      ease: 'power2.out'
    });
    bounceTl.to(mesh.position, {
      x: 2.5,
      y: -1.5,
      duration: 0.4,
      ease: 'power2.in'
    });
    bounceTl.to(mesh.position, {
      y: 1,
      duration: 0.25,
      ease: 'power2.out'
    });
    bounceTl.to(mesh.position, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: 'bounce.out',
      onComplete: () => explodeBall()
    });

    // Explosie effect
    function explodeBall() {
      gsap.to(mesh.scale, {
        x: 3,
        y: 3,
        z: 3,
        duration: 0.3,
        ease: 'power3.out'
      });
      gsap.to(mesh.material, {
        opacity: 0,
        duration: 0.3
      });

      setTimeout(() => {
        transitionToName();
      }, 300);
    }

    // Toon naam na explosie
    function transitionToName() {
      document.querySelector('.intro-name').classList.add('show');
    }
  });
</script>

<main>
  <canvas class="webgl"></canvas>

  <nav>
    <h1>3D Basketball with three.js</h1>
    <ul>
      <li><a href="/basketball">Play!</a></li>
      <li><a href="https://github.com/lemuelmgsn">Github</a></li>
      <li><a href="/home">Home</a></li>
    </ul>
  </nav>

  <h2>Drag and spin the basketball!</h2>
  <h1 class="intro-name">Lemuel MGSN</h1>
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
  }

  nav {
    position: relative;
    z-index: 2;
    padding: 3em;
    color: white;
    width: 100%;
    display: flex;
  }

  nav > ul {
    display: flex;
    margin-left: auto;
    gap: 2em;
  }

  nav > ul > li > a {
    color: white;
    font-size: 1.5em;
  }

  h1 {
    color: white;
    font-size: 2em;
  }

  h2 {
    position: absolute;
    bottom: 5vh;
    width: 100%;
    text-align: center;
    color: white;
    font-size: 1.5em;
    z-index: 2;
  }

  .intro-name {
    opacity: 0;
    transform: scale(0.8) translate(-50%, -50%);
    transition: all 1s ease;
    position: absolute;
    top: 40%;
    left: 50%;
    font-size: 4rem;
    color: white;
    z-index: 3;
  }

  .intro-name.show {
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
</style>
