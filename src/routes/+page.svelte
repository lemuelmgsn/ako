<main>

<div class="scene">
    <div class="box">
        <div class="inner left"><span>LEM</span></div>
        <div class="inner right"><span>UEL</span></div>
        
    </div>    
</div>


</main>

<style>

main{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: skyblue;
}
.scene {
  perspective: 1000px;
}

.box {
  display: flex;
  transform-style: preserve-3d;
}
.box {
  transform-style: preserve-3d;
  transform: perspective(800px) rotateX(50deg) scaleZ(1.1);
}
.inner {
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  font-weight: bold;
  font-family: sans-serif;
  color: white;
  background: indianred;
  box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.5);
}

.left {
  transform: rotateY(45deg) translateZ(150px);
}

.right {
  transform: rotateY(-45deg) translateZ(150px);
}
</style>