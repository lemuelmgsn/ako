    <!-- Typing animation and carousel -->
     <body>
           <section class="animation-section">
        <div class="wrapper">
            <h1 class="typing">
                We
                <span class="carousel">
                    <span class="change_inner">
                        <span class="element"> Love</span>
                        <span class="element"> ❤️</span>
                        <span class="element"> Love</span>
                        <span class="element"> ❤️</span>
                    </span>
                </span>
                Web
            </h1>
        </div>
        <a href="#weloveweb" class="skip">scroll</a>
    </section>
 
    <section class="nav-section" id="weloveweb">
       <a href="/portfolio">portfolio</a>
       <a href="/aantekeningen">we love web</a>
    </section> 
     </body>


<style>

html{
    background-color: black;
}
* {
    font-family: Poppins;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    color: white;
}
@font-face {
    src: url(https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@400&display=swap);
    font-family: 'Roboto Flexx';
    font-display: swap;
}
body {
    font-family: 'Roboto Flex', sans-serif;
  }
  
article{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin: 20px;
  }
  .semester-container{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
  .semesters{
    display: flex;
    flex-direction: column;
  }
  .semesters > h2{
    transform: translateX(-50%) ;
    left: 50%;
    position: absolute;
    padding-bottom: 20px;
  }
h6{
    font-size: 1em;
}

body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Zorgt ervoor dat alles vanaf boven begint */
    /* background-color: #111111; */
    background-color: black;
}

.animation-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Zorgt ervoor dat de animatie-sectie de volledige hoogte van het scherm vult */
    width: 100%; /* Breedt de volledige breedte */
    position: relative;
}
section, .nav-section{
    height: 100vh;
}
.nav-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.wrapper {
    font-family: monospace;
    font-size: 1.5em;
    font-weight: bold;
    display: inline-block;
    text-align: center;
}

.typing {
    /* font-size: 150px; */
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    animation: typing 3s steps(22), blink .5s step-end infinite alternate;
    /* color: rgb(18, 18, 18); */
    color: white;
}

@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 12ch; /* Past de breedte aan voor "We Love " */
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}

.skip {
    position: absolute;
    align-self: end;
    padding-bottom: 1em;
    animation: wiggleButton infinite 1.5s, popUp 1s;
    animation-delay: 3.5s, 2.5s;
    text-decoration: none;
    color: white;
    font-size: 16px;
    transform: translateY(5em);
}

@keyframes wiggleButton {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-.5em);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes popUp{
    from{
        transform: translateY(5em);
    }
    to{
        transform: translateY(0);
    }
}

/* Carousel styling */
.carousel {
    display: inline-block;
    overflow: hidden;
    height: 1.1em; /* Aangepast aan de line-height */
    vertical-align: bottom;
}

.change_inner {
    display: inline-block;
    animation: rotate 6.7s ease-in-out infinite;
    animation-delay: 1.7s;
}

.element {
    display: block;
    line-height: 1.15em; /* Line-height passend bij de omringende tekst */
    color: #F8312F;
}

@keyframes rotate {
    0%, 20% {
        transform: translateY(0);
    }
    25%, 45% {
        transform: translateY(-1.15em); /* Aangepast aan de grootte van de tekst */
    }
    50%, 70% {
        transform: translateY(-2.3em);
    }
    75%, 95% {
        transform: translateY(-3.45em);
    }
    100% {
        transform: translateY(-4.6em);
    }
}



/* Responsive font size adjustments */
@media only screen and (min-width: 600px) {
    .wrapper {
        font-size: 2em;
    }
    .typing{
        font-size: 80px;
    }
}

@media only screen and (min-width: 900px) {
    .wrapper {
        font-size: 3em;
    }
    .typing{
        font-size: 100px;
    }
}
.projects{
    display: flex;
}
.projects > h3{
    align-self: start ;
}

</style>