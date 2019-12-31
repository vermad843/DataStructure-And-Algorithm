/* Stacks */

// functions : push, pop, peek ,length


let letters = [];

let word = "racecar"

let rword = "";

for (let i = 0; i < word.length; i++) {
    const element = word[i];
    letters.push(element);  
}

for (let i = 0; i < word.length; i++) {
    rword += letters.pop();  
}

if(rword === word) {
    console.log(word + ' is a palindrome');
}else {
    console.log(word + ' is not a palindrome');
}


