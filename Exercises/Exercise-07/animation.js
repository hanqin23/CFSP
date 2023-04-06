

let age = 25;
let height = 5;
let nounSet = ["apple", "peach", "airplane", "car", "earth"];
let verbSet = ["do", "make", "polish", "build", "hover"];
let adjectiveSet = ["small", "big", "dark", "light", "orange"];


if (age < 8){
    console.log("Check out the Merry-Go-Round. You'll love it!");
}
else if (65 > age > 8 && height>4.5) {
    console.log("Check out the Roller Coaster. It's awesome!");
  }
  else {
    console.log('Why not enjoy a float down the Lazy River?');
  }

for (let i = 0; i < 5; i++) {
    let noun = nounSet[Math.floor(Math.random() * nounSet.length)];
    let verb = verbSet[Math.floor(Math.random() * verbSet.length)];
    let adj = adjectiveSet[Math.floor(Math.random() * adjectiveSet.length)];

    let sentence = "my " + noun + " leaps " + adj + " when I " + verb + " the sky";
    console.log(sentence);
}
