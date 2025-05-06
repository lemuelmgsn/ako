<script>
    import { onMount } from 'svelte';
  import { render } from 'svelte/server';
    import * as THREE from 'three';

    
onMount(() => {
    
// Scene
const scene = new THREE.Scene();

// Create our sphere
const geometry = new THREE.SphereGeometry(3, 64, 64) // creates shape of sphere
const material = new THREE.MeshStandardMaterial({ // creates material of sphere
    color: '#00ff83',
})
const mesh = new THREE.Mesh(geometry, material) // combines geometry and material of sphere
scene.add(mesh) // add mesh to scene

// Sizes 
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

// Light
const pointLight = new THREE.PointLight(0xffffff, 50, 100); // Makeks a white light with distance of 100
pointLight.position.set(0, 10, 10); // position of the light
scene.add(pointLight); // add light to scene


// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1 , 100) // creates camera perspective / 45 = perspective -  sizes.width / sizes.height = aspect ratio -  0.1 , 100 = minimal and maximum perspective, if u go under or above you wont see the sphere
camera.position.z = 20 // z index for camera perspective
scene.add(camera) // add camera to scene

// Renderer
const canvas = document.querySelector('.webgl') // selects canvas
const renderer = new THREE.WebGLRenderer({ canvas }) // renders canvas
renderer.setSize(sizes.width, sizes.height) // defines how big the canvas is with width and height
renderer.render(scene, camera)


});
</script>

<canvas class="webgl"></canvas>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body, html{
    overflow-x: hidden;
}
  </style>