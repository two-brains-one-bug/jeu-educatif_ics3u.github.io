//Rend les questions et les points des équipes à zéro, et fait que l'équipe 1 commence
let questionActuelle = "";
let pointsActuels = 0;

let equipeActuelle = 1;

let score1 = 0;
let score2 = 0;


//Assigne les questions à leurs sujets (Chatgpt utilisé pour les questions)
//Ajouter un système pour changer les questions possibles pour qu'ils ne soient pas toujours constantes

const questions = {

    // SCIENCE

    science100:{
        titre:"Science 100",
        question:"Quelle planète est rouge?",
        reponse:"mars"
    },

    science200:{
        titre:"Science 200",
        question:"Quel gaz respirons-nous?",
        reponse:"oxygène"
    },

    science300:{
        titre:"Science 300",
        question:"Qu'est-ce que H2O?",
        reponse:"eau"
    },

    science400:{
        titre:"Science 400",
        question:"Quelle force nous garde au sol?",
        reponse:"gravité"
    },

    science500:{
        titre:"Science 500",
        question:"Centre d'un atome?",
        reponse:"noyau"
    },

    // MATH

    math100:{
        titre:"Math 100",
        question:"10 + 5 = ?",
        reponse:"15"
    },

    math200:{
        titre:"Math 200",
        question:"9 × 7 = ?",
        reponse:"63"
    },

    math300:{
        titre:"Math 300",
        question:"Racine carrée de 64?",
        reponse:"8"
    },

    math400:{
        titre:"Math 400",
        question:"5x = 25, x = ?",
        reponse:"5"
    },

    math500:{
        titre:"Math 500",
        question:"15% de 300?",
        reponse:"45"
    },

    // HTML

    html100:{
        titre:"HTML 100",
        question:"Que signifie HTML?",
        reponse:"hypertext markup language"
    },

    html200:{
        titre:"HTML 200",
        question:"Balise pour paragraphe? (Avec <>)",
        reponse:"<p>"
    },

    html300:{
        titre:"HTML 300",
        question:"Balise pour lien? (Avec <>)",
        reponse:"<a>"
    },

    html400:{
        titre:"HTML 400",
        question:"Balise pour image? (Avec <>)",
        reponse:"<img>"
    },

    html500:{
        titre:"HTML 500",
        question:"Section des métadonnées? (Avec <>)",
        reponse:"<head>"
    },

    // CSS

    css100:{
        titre:"CSS 100",
        question:"Propriété couleur du texte?",
        reponse:"color"
    },

    css200:{
        titre:"CSS 200",
        question:"Couleur de fond?",
        reponse:"background-color"
    },

    css300:{
        titre:"CSS 300",
        question:"Taille du texte?",
        reponse:"font-size"
    },

    css400:{
        titre:"CSS 400",
        question:"Système lignes/colonnes?",
        reponse:"grid"
    },

    css500:{
        titre:"CSS 500",
        question:"Coins arrondis?",
        reponse:"border-radius"
    },

    // JAVASCRIPT

    js100:{
        titre:"JavaScript 100",
        question:"Mot-clé pour variable?",
        reponse:"let"
    },

    js200:{
        titre:"JavaScript 200",
        question:"Fonction console? (Avec parenthèses)",
        reponse:"console.log()"
    },

    js300:{
        titre:"JavaScript 300",
        question:"Fonction popup? (Avec parenthèses)",
        reponse:"alert()"
    },

    js400:{
        titre:"JavaScript 400",
        question:"Événement de clic?",
        reponse:"onclick"
    },

    js500:{
        titre:"JavaScript 500",
        question:"Boucle qui répète pendant que?",
        reponse:"while"
    }

};


//Ouvre la question une fois que'elle a été sélectionnée
function ouvrirQuestion(id, points){

    questionActuelle = id;
    pointsActuels = points;

    document.getElementById("pagePlateau").style.display =
        "none";

    document.getElementById("pageQuestion").style.display =
        "block";

    document.getElementById("titreQuestion").innerText =
        questions[id].titre;

    document.getElementById("texteQuestion").innerText =
        questions[id].question;

    document.getElementById("reponseUtilisateur").value =
        "";

    document.getElementById("resultat").innerText =
        "";
}


//Comare la réponse au résultat voulu
function verifierReponse(){

    let reponse =
        document.getElementById("reponseUtilisateur")
        .value
        .toLowerCase();

    if(reponse === questions[questionActuelle].reponse){

        document.getElementById("resultat").innerText =
            "Bonne réponse!";

        ajouterPoints();
    }
    else{

        document.getElementById("resultat").innerText =
            "Mauvaise réponse!";
    }
}


//Ajoute les points si la bonne réponse a été soumise
function ajouterPoints(){
    
//Pour l'équipe 1
    if(equipeActuelle === 1){

        score1 = score1 + pointsActuels;

        document.getElementById("score1").innerText =
            score1;

        equipeActuelle = 2;

        document.getElementById("tour1").innerText = "";

        document.getElementById("tour2").innerText =
            "RÉPOND";
    }
    else{
        
//Pour l'équipe 2

        score2 = score2 + pointsActuels;

        document.getElementById("score2").innerText =
            score2;

        equipeActuelle = 1;

        document.getElementById("tour2").innerText = "";

        document.getElementById("tour1").innerText =
            "RÉPOND";
    }

    document.getElementById(questionActuelle)
        .classList.add("used");

    setTimeout(retourPlateau, 1000);
}

//Retourne l'utilisateur au plateau de jeu original
function retourPlateau(){

    document.getElementById("pageQuestion").style.display =
        "none";

    document.getElementById("pagePlateau").style.display =
        "block";
}
