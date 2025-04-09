
// Jäljittää rummun klikkauksen
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum") [i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;             
        makeSound(buttonInnerHTML);       // Luo rummun klikkaukselle äänen
        buttonAnimation(buttonInnerHTML); // Luo rummun klikkaukselle animaation
    });
}

// Jäljittää näppäimistön napin painalluksen
document.addEventListener("keypress", function(event) { 
    makeSound(event.key);       // Luo näppäimistön napille äänen
    buttonAnimation(event.key); // Luo näppäimistön napille animaation
});

// Soittaa sen äänen, jonka näppäintä painettiin
function makeSound(key) {
    switch (key) {                        
        case "w":   // Tämä, jos painettiin W                                  
            let tom1 = new Audio("sounds/tom-1.mp3"); 
            tom1.play();                              
            break;                                    
        case "a":   // Tämä, jos painettiin A
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break; 
        case "s":   // Tämä, jos painettiin S
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break; 
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break; 
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break; 
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break; 
        case "l":
            let kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break; 
        default: console.log(buttonInnerHTML);
    }
}

// Animoi sen näppäimen mitä painettiin
function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey) // Mistä napista kyse
    activeButton.classList.add("pressed"); // Nappi painautuu alas eli CSS-muotoilu vaihtuu
    setTimeout(function() { // Nappi nousee ylös
        activeButton.classList.remove("pressed"); // eli vaihtunut CSS poistetaan
    }, 100); // 0,1 sekunnin kuluttua napin painamisesta
}




