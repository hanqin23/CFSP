console.log('this works');

let nouns = ["heart", "rainbow", "ocean"];
let verbs = ["look", "make", "continue"];
let adjectives = ["good", "different", "possible"];

//Pick a random element from each array
let noun = nouns[Math.floor(Math.random()*nouns.length)]
let verb = verbs[Math.floor(Math.random()*verbs.length)]
let adjective = adjectives[Math.floor(Math.random()*adjectives.length)]

console.log(noun)
console.log(verb)
console.log(adjective)

// Place it into the sentence

let paragraph = document.getElementById("sentencedisplay")
const btn = document.querySelector(".button");

function  generatesentence(){
    let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky`;
    paragraph.textcontent= `${sentence}`
}

btn.addEventListener("click", generatesentence)
