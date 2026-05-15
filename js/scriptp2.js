//Rend les questions et les points des équipes à zéro, et fait que l'équipe 1 commence
let questionActuelle = "";
let pointsActuels = 0;

let equipeActuelle = 1;

let score1 = 0;
let score2 = 0;
let score3 = 0;


//Chatgpt utilisé pour les questions demandées, cette variable va inclure toutes les questions qui vont être demandées
var questions = "";


/* Je n'étais pas sûr entre avoir des questions individuelles qui cyclent ou le jeu entier, mais les questions 
individuelles prendront trop de temps et seront seulement implémenté si il y a du temps. Si vous lisez ce
commentaire, il n'y avait pas de temps */

//Crée une variable qui va décider entre plusieurs options différents pour les questions
//(chaque option va mener à un questionnaire différent avec les mêmes thèmes mais des questions qui diffèrent.)
var questionsChoix = (Math.random() * 10);
alert(questionsChoix)


//Premier option des questions
if (questionsChoix <= 2) {
    
    alert("Cycle 1 des questions!");
    
    questions = {

    // SCIENCE

    science100:{ 
        titre:"Science 100",
        question:"Quelle planète est rouge?",
        reponse:"mars"
    },

    science200:{
        titre:"Science 200",
        question:"Le gaz que nous respirons est: ",
        reponse:"l'oxygène"
    },

    science300:{
        titre:"Science 300",
        question:"Qu'est-ce que l'H2O?",
        reponse:"l'eau"
    },

    science400:{
        titre:"Science 400",
        question:"La force qui nous garde au sol est la: ",
        reponse:"gravité"
    },

    science500:{
        titre:"Science 500",
        question:"Le centre d'un atome est le: ",
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
        question:"Mot-clé pour variable, autre que var?",
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

}



//Deuxième cycle de questions

else if (questionsChoix > 2 && questionsChoix <= 4) {
    questions = {

            // SCIENCE
        
        science100:{
            titre:"Science 100",
            question:"L'organe qui pompe le sang est le:",
            reponse:"coeur"
        },
        
        science200:{
            titre:"Science 200",
            question:"L'état solide de l'eau est la:",
            reponse:"glace"
        },
        
        science300:{
            titre:"Science 300",
            question:"Quelle étoile éclaire la Terre?",
            reponse:"soleil"
        },
        
        science400:{
            titre:"Science 400",
            question:"Quel gaz les plantes absorbent-elles?",
            reponse:"dioxyde de carbone"
        },
        
        science500:{
            titre:"Science 500",
            question:"Instrument pour observer les étoiles?",
            reponse:"télescope"
        },
        
        // MATH
        
        math100:{
            titre:"Math 100",
            question:"20 - 8 = ?",
            reponse:"12"
        },
        
        math200:{
            titre:"Math 200",
            question:"6 × 6 = ?",
            reponse:"36"
        },
        
        math300:{
            titre:"Math 300",
            question:"100 ÷ 4 = ?",
            reponse:"25"
        },
        
        math400:{
            titre:"Math 400",
            question:"7x = 49, x = ?",
            reponse:"7"
        },
        
        math500:{
            titre:"Math 500",
            question:"25% de 200?",
            reponse:"50"
        },
        
        // HTML
        
        
        html100:{
            titre:"HTML 100",
            question:"Balise pour créer une liste ordonnée? (Avec <>)",
            reponse:"<ol>"
        },
        
        html200:{
            titre:"HTML 200",
            question:"Balise pour une cellule de tableau? (Avec <>)",
            reponse:"<td>"
        },
        
        html300:{
            titre:"HTML 300",
            question:"Balise pour une ligne de tableau? (Avec <>)",
            reponse:"<tr>"
        },
        
        html400:{
            titre:"HTML 400",
            question:" (Avec <>)",
            reponse:""
        },
        
        html500:{
            titre:"HTML 500",
            question:"Balise pour  (Avec <>)",
            reponse:""
        },
        
        // CSS
        
        css100:{
            titre:"CSS 100",
            question:"Propriété pour rendre le texte gras?",
            reponse:"font-weight"
        },
        
        css200:{
            titre:"CSS 200",
            question:"Propriété pour changer la police?",
            reponse:"font-family"
        },
        
        css300:{
            titre:"CSS 300",
            question:"Propriété pour cacher un élément?",
            reponse:"display"
        },
        
        css400:{
            titre:"CSS 400",
            question:"Valeur CSS pour affichage flexible?",
            reponse:"flex"
        },
        
        css500:{
            titre:"CSS 500",
            question:"Propriété pour ajouter une animation?",
            reponse:"animation"
        },
        
        // JAVASCRIPT
        
        js100:{
            titre:"JavaScript 100",
            question:"Mot-clé pour une fonction?",
            reponse:"function"
        },
        
        js200:{
            titre:"JavaScript 200",
            question:"Méthode pour sélectionner un élément par id?",
            reponse:"getElementById"
        },
        
        js300:{
            titre:"JavaScript 300",
            question:"Fonction pour convertir en texte JSON?",
            reponse:"JSON.stringify"
        },
        
        js400:{
            titre:"JavaScript 400",
            question:"Boucle pour parcourir un tableau?",
            reponse:"for"
        },
        
        js500:{
            titre:"JavaScript 500",
            question:"Méthode pour ajouter à la fin d'un tableau?",
            reponse:"push"
        }
    
    };

}


//Troisième cycle de questions

else if (questionsChoix > 4 && questionsChoix <= 6) {
    
    questions = {

    // SCIENCE

science100:{
    titre:"Science 100",
    question:"Quel organe utilise-t-on pour respirer?",
    reponse:"poumons"
},

science200:{
    titre:"Science 200",
    question:"Quelle planète est la plus proche du Soleil?",
    reponse:"mercure"
},

science300:{
    titre:"Science 300",
    question:"Quel animal est le plus grand mammifère?",
    reponse:"baleine bleue"
},

science400:{
    titre:"Science 400",
    question:"Quel métal est attiré par un aimant?",
    reponse:"fer"
},

science500:{
    titre:"Science 500",
    question:"Quel scientifique a proposé la théorie de la relativité?",
    reponse:"einstein"
},

// MATH

math100:{
    titre:"Math 100",
    question:"7 + 6 = ?",
    reponse:"13"
},

math200:{
    titre:"Math 200",
    question:"12 × 5 = ?",
    reponse:"60"
},

math300:{
    titre:"Math 300",
    question:"81 ÷ 9 = ?",
    reponse:"9"
},

math400:{
    titre:"Math 400",
    question:"9x = 81, x = ?",
    reponse:"9"
},

math500:{
    titre:"Math 500",
    question:"30% de 150?",
    reponse:"45"
},

// HTML

html100:{
    titre:"HTML 100",
    question:"Balise pour créer une ligne horizontale? (Avec <>)",
    reponse:"<hr>"
},

html200:{
    titre:"HTML 200",
    question:"Balise pour texte important? (Avec <>)",
    reponse:"<strong>"
},

html300:{
    titre:"HTML 300",
    question:"Balise pour liste ordonnée? (Avec <>)",
    reponse:"<ol>"
},

html400:{
    titre:"HTML 400",
    question:"Attribut pour une image source?",
    reponse:"src"
},

html500:{
    titre:"HTML 500",
    question:"Balise contenant le contenu visible? (Avec <>)",
    reponse:"<body>"
},

// CSS

css100:{
    titre:"CSS 100",
    question:"Propriété pour aligner le texte?",
    reponse:"text-align"
},

css200:{
    titre:"CSS 200",
    question:"Propriété pour changer la bordure?",
    reponse:"border"
},

css300:{
    titre:"CSS 300",
    question:"Propriété pour transformer le texte en majuscules?",
    reponse:"text-transform"
},

css400:{
    titre:"CSS 400",
    question:"Valeur CSS pour cacher un élément?",
    reponse:"none"
},

css500:{
    titre:"CSS 500",
    question:"Propriété pour contrôler l'ordre d'empilement?",
    reponse:"z-index"
},

// JAVASCRIPT

js100:{
    titre:"JavaScript 100",
    question:"Mot-clé pour créer une classe?",
    reponse:"class"
},

js200:{
    titre:"JavaScript 200",
    question:"Méthode pour ajouter un événement?",
    reponse:"addEventListener"
},

js300:{
    titre:"JavaScript 300",
    question:"Objet représentant la page web?",
    reponse:"document"
},

js400:{
    titre:"JavaScript 400",
    question:"Méthode pour convertir une chaîne en nombre décimal?",
    reponse:"parseFloat"
},

js500:{
    titre:"JavaScript 500",
    question:"Mot-clé pour gérer les erreurs?",
    reponse:"try"
}

};

}




//Quatrième cycle de questions

else if (questionsChoix > 6 && questionsChoix <= 8) {
    
    questions = {

// SCIENCE

science100:{
    titre:"Science 100",
    question:"Quel est l'organe de la vision?",
    reponse:"oeil"
},

science200:{
    titre:"Science 200",
    question:"Combien de pattes a une araignée?",
    reponse:"8"
},

science300:{
    titre:"Science 300",
    question:"Quel gaz produit le feu pour brûler?",
    reponse:"oxygène"
},

science400:{
    titre:"Science 400",
    question:"Quel est le satellite naturel de la Terre?",
    reponse:"lune"
},

science500:{
    titre:"Science 500",
    question:"Quel instrument mesure la température?",
    reponse:"thermomètre"
},

// MATH

math100:{
    titre:"Math 100",
    question:"14 + 9 = ?",
    reponse:"23"
},

math200:{
    titre:"Math 200",
    question:"11 × 11 = ?",
    reponse:"121"
},

math300:{
    titre:"Math 300",
    question:"144 ÷ 12 = ?",
    reponse:"12"
},

math400:{
    titre:"Math 400",
    question:"4x = 36, x = ?",
    reponse:"9"
},

math500:{
    titre:"Math 500",
    question:"50% de 90?",
    reponse:"45"
},

// HTML

html100:{
    titre:"HTML 100",
    question:"Balise pour texte en italique? (Avec <>)",
    reponse:"<i>"
},

html200:{
    titre:"HTML 200",
    question:"Balise pour créer un tableau? (Avec <>)",
    reponse:"<table>"
},

html300:{
    titre:"HTML 300",
    question:"Balise pour une division? (Avec <>)",
    reponse:"<div>"
},

html400:{
    titre:"HTML 400",
    question:"Balise pour une liste élément? (Avec <>)",
    reponse:"<li>"
},

html500:{
    titre:"HTML 500",
    question:"Attribut pour identifier un élément unique?",
    reponse:"id"
},

// CSS

css100:{
    titre:"CSS 100",
    question:"Propriété pour changer la couleur de fond?",
    reponse:"background-color"
},

css200:{
    titre:"CSS 200",
    question:"Propriété pour espacer les lettres?",
    reponse:"letter-spacing"
},

css300:{
    titre:"CSS 300",
    question:"Propriété pour mettre une ombre sur une boîte?",
    reponse:"box-shadow"
},

css400:{
    titre:"CSS 400",
    question:"Valeur CSS pour position absolue?",
    reponse:"absolute"
},

css500:{
    titre:"CSS 500",
    question:"Propriété pour changer la vitesse d'une transition?",
    reponse:"transition-duration"
},

// JAVASCRIPT

js100:{
    titre:"JavaScript 100",
    question:"Mot-clé pour une condition alternative?",
    reponse:"else"
},

js200:{
    titre:"JavaScript 200",
    question:"Méthode pour afficher une boîte de confirmation?",
    reponse:"confirm()"
},

js300:{
    titre:"JavaScript 300",
    question:"Méthode pour joindre deux chaînes?",
    reponse:"concat"
},

js400:{
    titre:"JavaScript 400",
    question:"Événement déclenché lors du chargement de la page?",
    reponse:"onload"
},

js500:{
    titre:"JavaScript 500",
    question:"Structure utilisée pour capturer une erreur?",
    reponse:"catch"
}
    
};

}


//Cinquième cycle de questions

else if (questionsChoix > 8 && questionsChoix <= 10) {
    
    questions = {

   // SCIENCE

science100:{
    titre:"Science 100",
    question:"Quel organe sert à entendre?",
    reponse:"oreille"
},

science200:{
    titre:"Science 200",
    question:"Quel animal pond des oeufs?",
    reponse:"poule"
},

science300:{
    titre:"Science 300",
    question:"Quelle planète possède des anneaux?",
    reponse:"saturne"
},

science400:{
    titre:"Science 400",
    question:"Comment appelle-t-on les animaux qui mangent des plantes?",
    reponse:"herbivores"
},

science500:{
    titre:"Science 500",
    question:"Quel appareil mesure les tremblements de terre?",
    reponse:"sismographe"
},

// MATH

math100:{
    titre:"Math 100",
    question:"18 - 7 = ?",
    reponse:"11"
},

math200:{
    titre:"Math 200",
    question:"8 × 9 = ?",
    reponse:"72"
},

math300:{
    titre:"Math 300",
    question:"49 ÷ 7 = ?",
    reponse:"7"
},

math400:{
    titre:"Math 400",
    question:"6x = 54, x = ?",
    reponse:"9"
},

math500:{
    titre:"Math 500",
    question:"10% de 500?",
    reponse:"50"
},

// HTML

html100:{
    titre:"HTML 100",
    question:"Balise pour un bouton cliquable? (Avec <>)",
    reponse:"<button>"
},

html200:{
    titre:"HTML 200",
    question:"Balise pour une citation courte? (Avec <>)",
    reponse:"<q>"
},

html300:{
    titre:"HTML 300",
    question:"Balise pour du texte barré? (Avec <>)",
    reponse:"<s>"
},

html400:{
    titre:"HTML 400",
    question:"Balise pour sélectionner une option? (Avec <>)",
    reponse:"<select>"
},

html500:{
    titre:"HTML 500",
    question:"Attribut pour afficher un texte d'aide dans un champ?",
    reponse:"placeholder"
},

// CSS

css100:{
    titre:"CSS 100",
    question:"Propriété pour rendre un élément transparent?",
    reponse:"opacity"
},

css200:{
    titre:"CSS 200",
    question:"Propriété pour transformer un élément?",
    reponse:"transform"
},

css300:{
    titre:"CSS 300",
    question:"Propriété pour changer le curseur?",
    reponse:"cursor"
},

css400:{
    titre:"CSS 400",
    question:"Valeur CSS pour afficher un élément en bloc?",
    reponse:"block"
},

css500:{
    titre:"CSS 500",
    question:"Propriété pour créer une transition animée?",
    reponse:"transition"
},

// JAVASCRIPT

js100:{
    titre:"JavaScript 100",
    question:"Mot-clé pour créer un objet?",
    reponse:"new"
},

js200:{
    titre:"JavaScript 200",
    question:"Méthode pour écrire dans le HTML?",
    reponse:"innerHTML"
},

js300:{
    titre:"JavaScript 300",
    question:"Méthode pour retirer le premier élément d'un tableau?",
    reponse:"shift"
},

js400:{
    titre:"JavaScript 400",
    question:"Événement déclenché lors d'un changement de valeur?",
    reponse:"onchange"
},

js500:{
    titre:"JavaScript 500",
    question:"Méthode pour convertir un objet en JSON?",
    reponse:"JSON.stringify"
}
    
};


}


//Ouvre la question une fois qu'elle a été sélectionnée
function ouvrirQuestion(id, points){

    //Cherche l'id de la question pour vérifier laquelle a été sélectionnée
    questionActuelle = id;

    pointsActuels = points;

    //Cache le plateau
    document.getElementById("pagePlateau").style.display =
        "none";

    //Affiche la question
    document.getElementById("pageQuestion").style.display =
        "block";

    //Affiche les informations de la question
    document.getElementById("titreQuestion").innerText =
        questions[id].titre;

    document.getElementById("texteQuestion").innerText =
        questions[id].question;

    document.getElementById("reponseUtilisateur").value =
        "";

    document.getElementById("resultat").innerText =
        "";
}


//Compare la réponse au résultat voulu
function verifierReponse(){

    //Prend la réponse entrée et la met en lowercase
    let reponse =
        document.getElementById("reponseUtilisateur")
        .value
        .toLowerCase();

    //Compare la réponse avec la bonne réponse
    if(reponse === questions[questionActuelle].reponse){

        document.getElementById("resultat").innerText =
            "Bonne réponse!";

        ajouterPoints();
    }

    else{

        document.getElementById("resultat").innerText =
            'Mauvaise réponse! La bonne réponse était "' +
            questions[questionActuelle].reponse + '"';
    }
}


//Ajoute les points si la bonne réponse a été soumise
function ajouterPoints(){

    if(equipeActuelle === 1){

        //Ajoute les points à l'équipe 1
        score1 = score1 + pointsActuels;

        document.getElementById("score1").innerText =
            score1;

        //Passe à l'équipe 2
        equipeActuelle = 2;

        document.getElementById("tour1").innerText = "";

        document.getElementById("tour2").innerText =
            "RÉPOND";

        document.getElementById("tour3").innerText = "";
    }


    else if(equipeActuelle === 2){

        //Ajoute les points à l'équipe 2
        score2 = score2 + pointsActuels;

        document.getElementById("score2").innerText =
            score2;

        //Passe à l'équipe 3
        equipeActuelle = 3;

        document.getElementById("tour2").innerText = "";

        document.getElementById("tour3").innerText =
            "RÉPOND";

        document.getElementById("tour1").innerText = "";
    }


    else if(equipeActuelle === 3){

        //Ajoute les points à l'équipe 3
        score3 = score3 + pointsActuels;

        document.getElementById("score3").innerText =
            score3;

        //Retourne à l'équipe 1
        equipeActuelle = 1;

        document.getElementById("tour3").innerText = "";

        document.getElementById("tour1").innerText =
            "RÉPOND";

        document.getElementById("tour2").innerText = "";
    }


    //Le bouton devient utilisé
    document.getElementById(questionActuelle)
        .classList.add("used");

    //Retourne au plateau après 1 seconde
    setTimeout(retourPlateau, 1000);
}


//Retourne l'utilisateur au plateau de jeu original
function retourPlateau(){

    document.getElementById("pageQuestion").style.display =
        "none";

    document.getElementById("pagePlateau").style.display =
        "block";
}
