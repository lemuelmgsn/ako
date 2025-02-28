<header>
    <h1>Lemuel Magsino</h1>
    <nav>
        <ul>
            <li>About</li>
            <li>Experiences</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
</header>

<main>

<section>
    <article class="intro-container">
        <div class="intro">
            <p class="hello">Hello, i'm</p>
            <h2>Lemuel Magsino</h2>
            <h3>Frontend developer</h3>
            <div>
                <a href="#CV">Download CV</a>
                <a href="#Contact">Contact info</a>
            </div>   
    </div>
        
</article>
    
    <div class="profile-container">
        <div class="profile-picture"></div>
    </div>

</section>


</main>

<style>
section{
    display: flex;
    flex-direction: row;
    height: calc(100vh - 80px);
}
.intro-container, .profile-container{
    flex: 1;
    width: 50vw;
    border: 1px solid blue;
}
.intro-container{
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    justify-content: center;
}
.intro{
    padding-left: 10em;
}
.profile-container{
    height: 100%;
    width: 23em;
    background-color: red;
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style-type: none;
    font-family: 'Poppins', sans-serif;
} 

main{
    height: 100vh;
}
header{
    display: flex;
    align-items: center;
    justify-content: center;
}
 nav{
    margin-left: auto;
    /* margin-right: 2em; */
 }
header, ul{
    width: 100%;    
    display: flex;
    padding:  1em 2em 1em 2em;
}
ul{
    gap: 2em;
}
li{
    font-size: 1.7em;
}
.hello{
    font-weight: 550;
    color: grey;
}
h2{
    font-weight: 600;
    font-size: 3em;
}
h3{
    font-weight: 550;
    color: rgb(85, 85, 85);
    font-size: 1.5em;
}
a{
    padding-top: 1em;
    border: 1px solid black;
    padding: 1em;
    border-radius: 3em;
}
@media (max-width: 768px) {
    section {
        flex-direction: column;
        height: auto;
    }
    
    .intro-container, .profile-container {
        width: 100%;
        text-align: center;
        padding: 2em;
    }

    .intro {
        padding-left: 0; 
    }

    .profile-container {
        width: 100%;
        height: auto;
    }

    ul {
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }

    nav {
        margin-left: 0;
    }

    li {
        font-size: 1.2em;
    }

    a {
        display: inline-block;
        width: 100%;
        text-align: center;
    }
}

</style>