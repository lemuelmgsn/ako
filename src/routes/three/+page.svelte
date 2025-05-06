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
scene.add(mesh) // add to scene

// Camera
const camera = new THREE.PerspectiveCamera(45, 800, 600) // creates camera perspective / 45 = perspective / 800 , 600 = aspect ratio
camera.position.z = 20 // z index for camera
scene.add(camera)

// Renderer
const canvas = document.getElementById('webgl') // selects canvas
const renderer = new THREE.WebGLRenderer({ canvas }) // renders canvas
renderer.setSize(800, 600) // defines how big the canvas is
renderer.render(scene, camera)








  });
</script>

<canvas class="webgl"></canvas>