const characters = document.querySelector('.counter__wrapper-characters');
const show_charac = document.querySelector('.show_charac')
const area = document.querySelector('.area');
const words = document.querySelector('.show_word');
const show_paragraph = document.querySelector('.show_paragraph');
const show_read = document.querySelector('.show_read');
const test = document.querySelector('.test');
const out = document.querySelector('.out');


area.addEventListener('input', getCharacters);

function sendTest(wordsLength, p, str, readTime) {
    test.innerHTML = `
    <p>Characters: ${str}</p>
    <p>Total words: ${wordsLength}</p>
    <p>Paragraphs: ${p}</p>
    <p>Reading time(in minutes): ${readTime}</p>
    
    `
}


function getCharacters() {

    let str = area.value.split('').filter( c => c != ' ').length;
    show_charac.innerHTML = str;
    console.log(str);

    let wordsLength = area.value.trim().split(/\s+/).length;
    words.innerHTML = wordsLength;

    let p = area.value.split('\n').length;
    show_paragraph.innerHTML = p ;

    let readTime = (wordsLength * 60 ) / 200;
    show_read.innerHTML = readTime.toFixed(2);
    sendTest(wordsLength, p, str, readTime);
}
getCharacters();
