<script>
    let score = 0;  // Declareert de score en stelt deze in op 0.
    let ball;  // Declareert een variabele voor de bal (de DOM-element die de bal voorstelt).
    let isShooting = false;  // Houdt bij of er momenteel een schot wordt afgevuurd (standaard is het 'false').
    let scored = false;  // Houdt bij of het schot gescoord heeft of niet (standaard is het 'false').

    function shootBall() {  // Definieert de functie die wordt uitgevoerd bij het schieten.
        if (!ball || isShooting) return;  // Controleert of de bal niet gedefinieerd is of er al geschoten wordt. Als een van deze waar is, stopt de functie.

        isShooting = true;  // Zet 'isShooting' op true, zodat er geen ander schot kan worden afgevuurd terwijl er al geschoten wordt.
        scored = Math.random() < 0.6;  // 60% kans om te scoren

        // Verhoog de score als er gescoord is
        if (scored) {
            score += 1;
        }

        // Klassen verwijderen en forceren dat de browser dit herkent
        ball.classList.remove("shooting-score", "shooting-miss");
        void ball.offsetWidth; // Dit forceert een hertekening

        // Nu opnieuw de juiste klasse toevoegen
        const classToAdd = scored ? "shooting-score" : "shooting-miss";
        ball.classList.add(classToAdd);

        // Zet een timeout zodat er na 1,25 seconden weer een nieuw schot kan worden geschoten
        setTimeout(() => {
            isShooting = false;
        }, 1250);  // De timeout duurt 1250 milliseconden.
    }
</script>

<main>
    <button on:click={shootBall}>Shoot the ball!</button>
    <div class="court">
        <div class="scoreboard">Score: {score}</div>  
        <div class="basket">
            <div class="rim"></div>
            <div class="net"></div>
        </div>
        <div class="ball" bind:this={ball} class:shooting-score={isShooting && scored} class:shooting-miss={isShooting && !scored}>
            <img src="/basketball.svg" alt="basketball"> 
        </div>
    </div>
</main>

<style>
*{
    font-family: sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: 
    linear-gradient(to bottom, lightblue 80%, #dba16a 80%);
    flex-direction: column;
    overflow: hidden;
    perspective: 800px;
}
.court {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.basket {
    width: 160px;
    height: 120px;
    position: absolute;
    top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: grey;
}
.scoreboard {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }
.rim {
    width: 100px;
    height: 10px;
    background: #FF4500;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    z-index: 2;
}
.net {
    width: 80px;
    height: 50px;
    background: repeating-linear-gradient(90deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 2px, transparent 2px, transparent 10px),
                repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 2px, transparent 2px, transparent 10px);
    background-size: 10px 10px;
    position: absolute;
    z-index: 10;
    bottom: -50px;
    clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%);
}

.ball {
    width: 50px;
    height: 50px;
    background: orange;
    border-radius: 50%;
    position: absolute;
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: inset -5px -5px 0px rgba(0,0,0,0.3);
    transition: transform 1s ease-in-out;
}

@keyframes scoreAnimation {
    0% { transform: translateX(-50%) translateY(0) scale(1); }
    50% { transform: translateX(-50%) translateY(-60vh) scale(0.8); }
    100% { transform: translateX(-50%) translateY(-40vh) scale(0.6); }
}

@keyframes missAnimation {
    0% { 
        transform: translateX(-50%) translateY(0) scale(1);
    }
    40% { 
        transform: translateX(10%) translateY(-60vh) scale(0.9);
    }
    60% { 
        transform: translateX(20%) translateY(-50vh)  scale(0.8);
    }
    70% { 
        transform: translateX(1.5em) translateY(-60vh) scale(0.85);
    }
    100% { 
        transform: translateX(4em) translateY(0) scale(1);
}
}

.shooting-score {
    animation: scoreAnimation 1.25s ease-in-out;
}

.shooting-miss {
    animation: missAnimation 1.25s ease-in-out;
}
</style>

