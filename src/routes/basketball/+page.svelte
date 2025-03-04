<main>
    <div class="court">
        <div class="basket">
            <div class="rim"></div>
            <div class="net"></div>
        </div>
        <div class="ball"><svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="27.5" cy="27.5" r="27.5" fill="#B87336"/>
            <rect x="27" width="1" height="55" fill="black"/>
            <rect y="28" width="55" height="1" fill="black"/>
            <path d="M46.2075 48C30.8999 32.1235 32.1961 23.135 46.2075 7" stroke="black"/>
            <path d="M9 48C24.3076 32.1235 23.0114 23.135 9 7" stroke="black"/>
            </svg>
            </div>
    </div>
</main>

<style>
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
    background-color: rgb(147, 147, 147);
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
    border-radius: 50%;
    position: absolute;
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50%);
}
</style>
