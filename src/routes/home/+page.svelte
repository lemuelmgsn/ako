<section>
    <h1 class="scroll-animate">LEMUEL</h1>
    <p>frontend</p>
    <p>designer & developer</p>
    <h2 class="scroll-animate">MAGSINO</h2>


</section>

<!-- <section>

    <ul>
        <li>About me</li>
        <li>Projects</li>
        <li>Contact</li>
    </ul>

</section> -->

<section class="projects">
    <h3>Projects</h3>
    
    <ul>
        <li>
            <a href="https://github.com/Jesse-Kramer/tumi-mundo">Tumi Mundo</a>
            <p>a kids language learning app</p>
        </li>
        <li>
            <a href="https://github.com/zoepje/your-tribe-for-life-squad-page">Squad page</a>
            <p>a squad page of our class</p>
        </li>
        <li>
            <a href="https://github.com/lemuelmgsn/we-love-web-notes">We Love Web (Notes)</a>
            <p>a website for my 1st year notes</p>
        </li>
        <li>
            <a href="https://github.com/lemuelmgsn/the-startup-responsive-interactieve-website">GRRR.tech</a>
            <p>a blog for frontenders</p>
        </li>
        <li>
            <a href="https://github.com/lemuelmgsn/eigen-website">Luh Calm Fit</a>
            <p>an outfit picker website by me</p>
        </li>
        <li>
            <a href="https://github.com/lemuelmgsn/your-tribe-for-life-profile-card">Profile card</a>
            <p>my profile card</p>
        </li>
        <li>
            <a href="https://github.com/DamianR2004/pleasurable-ui">Funda</a>
            <p>a redesign for Funda</p>
        </li>
        <li>
            <a href="https://github.com/lemuelmgsn/fix-the-flow-interactive-website">B-Rain</a>
            <p>a website for water saving solutions</p>
        </li>
    </ul>

</section>

<!-- <section class="aboutme">
    <h4>About me</h4>

</section> -->

<style>
.projects{
    background-color: #111111;
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.projects h3{
    padding-top: 10dvh;
    font-size: 2rem;
    margin-bottom: 10dvh;
}
.projects ul{
    gap: 10px;
    align-self: self-start;
    margin-left: 10dvw;
}
.projects li{
    font-size: 1.2rem;
    /* margin: 5px; */
    padding: 1rem;
    list-style-type: none;
}
.projects a{
    font-size: 1.2rem;
    margin: 5px;
    font-weight: bolder;
}
.projects a:hover{
    text-decoration: underline;
}
.projects p{
    font-size: 1rem;
    margin: 5px;
    transform: translateX(1rem);
}

/*  */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Flex', sans-serif;
    text-decoration: none;
    color: white;
}
section:first-of-type{
    height: 100dvh;
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
}
h1, h2{
    /* font-size: 280px; */
    font-size: 17vw;
    color: white;
    
}
h1{
    animation: name-right ;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    transition-duration: 2s ;
}
h2{
    animation: name-left ;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    transition-duration: 2s ;
}
section:first-of-type > p{
    animation: fade-in;
    animation-duration: .6s;
    animation-delay: 2s;
    opacity: 0;
    animation-fill-mode: forwards;
}
/* keyframe animations */

/* keyframes for "LEMUEL MAGSINO" */
@keyframes name-right{
    0%{
        opacity: 0;
        transform: translateX(-100vw);
	    /* transform:rotateY('0deg'); */
    }
    85%{
        transform: translateX(5px);
    }
    100%{
        opacity: 1;
        transform: translateX(0);
        /* transform:rotateY('360deg'); */
    }
}

@keyframes name-left{
    0%{
        opacity: 0;
        transform: translateX(100vw);
    }
    85%{
        transform: translateX(-5px);
    }
    100%{
        opacity: 1;
        transform: translateX(0);
    }
}

/* keyframes for "frontend designer & developer" */
@keyframes fade-in{
    0%{
        transform: translateY(15px);
        opacity: 0;
    }
    80%{
        opacity: .8;
        transform: translateY(-2px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
}

</style>