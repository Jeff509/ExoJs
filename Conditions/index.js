'use strict';

//exo1
var person = prompt('Vous avez quelle âge ?');
if (person <= 17) {
    alert('Vous ne pouvez pas entrez vous n’êtes pas majeur ');
} else if ((person => 18 && person <= 41)) {
    alert('Vous pouvez entrez vous êtes  majeur ');
} else {
    alert('Vous êtes maintenant le patron !');

};

// exo 2
var rand = Math.floor(Math.random() * (30)) + 1;
if ((rand >= 0) && (rand <= 10)) {
    alert(rand + " : Cool !")
} else if ((rand => 11) && (rand <= 20)) {
    alert(rand + " : Tepid !")
} else {
    alert(rand + " : Warm !")
}

// exo3

'use strict';
var date=new Date()
document.write("date.getDay() = "+date.getDay()+"<BR>")
var jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");

switch (Date) {
    case lundi:
    console.log("nous sommes" + Date)
    break;

    case mardi:
    console.log("nous sommes" + Date)
    break;

    case mercredi:
    console.log("nous sommes" + Date)
    break;

    case jeudi:
    console.log("nous sommes" + Date)
    break;

    case vendredi:
    console.log("nous sommes" + Date)
    break;

    case samedi:
    console.log("nous sommes" + Date)
    break;

    case dimanche:
    console.log("nous sommes" + Date)
    break;
}