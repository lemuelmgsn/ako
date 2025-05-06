<script>
    import gsap from 'gsap';
    import { onMount } from 'svelte';
    import { render } from 'svelte/server';
    import * as THREE from 'three';
    import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

    
onMount(() => {
    
// Scene
const scene = new THREE.Scene();

// Textureloader
const textureLoader = new THREE.TextureLoader()
const basketballTexture = textureLoader.load('/textures/basketbaltexture.jpg') // loades texture from static/textures

// Create sphere
const geometry = new THREE.SphereGeometry(3, 64, 64) // creates shape of sphere

// Create material
const material = new THREE.MeshStandardMaterial({
  map: basketballTexture,   // basketball texture
  roughness: 0.8,   // makes it a bit rough
  metalness: 0.2    // no reflection
})


const mesh = new THREE.Mesh(geometry, material) // combines geometry and material of sphere
scene.add(mesh) // add mesh to scene

// Sizes 
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

// Light
const pointLight = new THREE.PointLight(0xffffff, 50 , 100); // Makeks a white light with distance of 100
pointLight.position.set(0, 10, 10); // position of the light
scene.add(pointLight); // add light to scene

const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);


// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1 , 100) // creates camera perspective / 45 = perspective -  sizes.width / sizes.height = aspect ratio -  0.1 , 100 = minimal and maximum perspective, if u go under or above you wont see the sphere
camera.position.z = 20 // z index for camera perspective
scene.add(camera) // add camera to scene

// Renderer
const canvas = document.querySelector('.webgl') // selects canvas
const renderer = new THREE.WebGLRenderer({ canvas }) // renders canvas
renderer.setSize(sizes.width, sizes.height) // defines how big the canvas is with width and height
renderer.setPixelRatio(2) // makes sphere smoother around edges
renderer.render(scene, camera)

// Controls
const controls = new OrbitControls(camera, canvas) // makes sphere controllable with mouse
controls.enableDamping = true // enables that sphere doesnt stop spinning automatically when u release mouse
controls.enablePan = false // disables panning the sphere
controls.enableZoom = false // disables zooming the sphere
controls.autoRotate = true // makes sphere automatically rotate
controls.autoRotateSpeed = 10 // sets speed of the auto rotate

// Resize
window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix() // makes canvas responsive (kinda)

    // Update renderer
    renderer.setSize(sizes.width, sizes.height) // sets up canvas size
})

const loop = () => {
    controls.update(); // important for damping and interaction, updates controlls
    renderer.render(scene, camera)
    window,requestAnimationFrame(loop)
}
loop()

// Timeline
const tl = gsap.timeline({defaults: { duration : 1 }})
tl.fromTo(mesh.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1})


});
</script>


<main>
    <canvas class="webgl"></canvas>
    
    <nav><h1>Ball</h1></nav>


</main>



<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}
.webgl{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
nav{
    position: relative;
    z-index: 2;
    color: white;
    width: 100%;
}
h1{
    color: white;
}
  </style>