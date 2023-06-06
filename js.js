const area = document.querySelector('.area');
const add = document.querySelector('.add');


area.addEventListener('input', getCharacters);

function sendTest(wordsLength, p, str, readTime) {
    add.innerHTML = `
    <p>Characters: ${str}</p>
    <p>Total words: ${wordsLength}</p>
    <p>Paragraphs: ${p}</p>
    <p>Reading time(in minutes): ${readTime}</p>
    
    `
}


function getCharacters() {

    let str = area.value.split('').filter( c => c != ' ').length;

    let wordsLength = area.value.trim().split(/\s+/).length;

    let p = area.value.split('\n').length;

    let readTime = (wordsLength * 60 ) / 200;

    sendTest(wordsLength, p, str, readTime);
}
getCharacters();
