<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let container: HTMLDivElement;

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Text op canvas
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 120px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('LEMUEL', canvas.width / 2, canvas.height / 2 - 80);
      ctx.fillText('MAGSINO', canvas.width / 2, canvas.height / 2 + 80);
    }

    const texture = new THREE.CanvasTexture(canvas);

    // Shader materiaal met fisheye effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D uTexture;

        void main() {
          vec2 uv = vUv;

          // Bolvormige vervorming (fisheye effect)
          vec2 center = uv - 0.5;
          float dist = length(center);
          center *= mix(1.6, -0.3, dist); // samentrekking aan randen
          uv = center + 0.5;

          gl_FragColor = texture2D(uTexture, uv);
        }
      `,
    });

    const geometry = new THREE.PlaneGeometry(1, 1.5);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer.render(scene, camera);

    const handleResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.render(scene, camera);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  });
</script>

<main>

<div bind:this={container} class="container"></div>

<section>
<p>TESTESTESTESTESTSETES</p>
</section>

</main>

<style>

main{
    background-color: black;
    color: white;
}
.container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
section{
    width: 100vw;
    height: 100dvh;
}
</style>


