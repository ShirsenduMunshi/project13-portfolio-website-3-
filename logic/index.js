//writeng animation

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
const phrases = ["Web Developer", "Web designer", "Peogrammer",];
const el = document.getElementById("typewriter");

let sleepTime = 100;
let curphraseIndex = 0;

const writeLoop = async () => {
    while (true) {
        let curWord = phrases[curphraseIndex];

        for(let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }
        
        await sleep(sleepTime); 
        
        for(let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime); 

        if (curphraseIndex === phrases.length -1) {
            curphraseIndex = 0;
        }
        else {
            curphraseIndex++;
        }
    }
};
writeLoop();

//footer button animation

function displaycoloron(){
    let btn = document.getElementById('footer-btn').style.background = "#000021"
    let abt = document.getElementById('footer-btn').style.transition =  "all 0.5s"
};

function displaycoloroff(){
    let btn = document.getElementById('footer-btn').style.background = "#20204fe0"
}

//burger event

document.querySelector('.burger').addEventListener('click', ()=>{
    document.querySelector('.side-navigation').classList.toggle('v-class-resp')
});
