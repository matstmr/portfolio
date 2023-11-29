const boxcard = document.querySelector('.box-contour-card-accueil');
const card = document.querySelector('.contour-card-accueil');

// Paramètre de lissage
const lerpFactor = 0.1;

// Variables pour les angles actuels
let currentAngleX = 0;
let currentAngleY = 0;

function updateRotation() {
    // Lissage des angles actuels vers les nouveaux angles
    currentAngleX = lerp(currentAngleX, targetAngleX, lerpFactor);
    currentAngleY = lerp(currentAngleY, targetAngleY, lerpFactor);

    // Application de la transformation
    card.style.transform = `rotateX(${currentAngleX}deg) rotateY(${currentAngleY}deg)`;

    // Planification de la prochaine mise à jour
    requestAnimationFrame(updateRotation);
}

let targetAngleX = 0;
let targetAngleY = 0;

card.addEventListener("mousemove", event => {
    let rect = boxcard.getBoundingClientRect();

    let x = event.clientX - rect.x;
    let y = event.clientY - rect.y;

    let midCardWidth = rect.width / 2;
    let midCardHeight = rect.height / 2;

    // Nouveaux angles en fonction de la position de la souris
    targetAngleX = (y - midCardHeight) / 16;
    targetAngleY = -(x - midCardWidth) / 16;

    // Si la fonction n'est pas déjà planifiée, planifier la première mise à jour
    if (!animationFrameRequested) {
        requestAnimationFrame(updateRotation);
        animationFrameRequested = true;
    }
});

let animationFrameRequested = false;

card.addEventListener("mouseleave", () => {
    // Réinitialisation à l'angle initial
    targetAngleX = 0;
    targetAngleY = 0;

    // Annuler la planification de la prochaine mise à jour
    animationFrameRequested = false;
});

// Fonction d'interpolation linéaire
function lerp(a, b, t) {
    return (1 - t) * a + t * b;
}




const hardCoverFront = document.querySelector('.hardcover_front');
const hardCoverBack = document.querySelector('.hardcover_back');
const book = document.querySelector('.book');

//const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const page4 = document.querySelector('.page4');
const page5 = document.querySelector('.page5');
const page6 = document.querySelector('.page6');
const page7 = document.querySelector('.page7');
const page8 = document.querySelector('.page8');


hardCoverFront.addEventListener('click', () => {

    book.classList.add('lecture');

    setTimeout(() => {
        /*
        page2.style.left = '0';
        page2.style.width = '98%';
        page3.style.width = '98%';
        page4.style.width = '98%';
        page5.style.width = '98%';
        page1.style.width = '98%';
        page2.style.left = '0';
        page1.style.left = '0';
        page3.style.left = '0';
        page4.style.left = '0';
        page5.style.left = '0';
        */
        hardCoverFront.style.transform = 'rotateY(-180deg)';
        hardCoverBack.style.transform = 'translateX(25px)';
        //page1.style.transform = 'rotateY(0deg) translateZ(10px) translateX(28px) translateY(8px)';
        page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(26px) translateY(8px)';
        page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(24px) translateY(8px)';
        page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(22px) translateY(8px)';
        page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(20px) translateY(8px)';
        page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(18px) translateY(8px)';
        page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(16px) translateY(8px)';
        page8.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';


        /*setTimeout(() => {
            page5.style.backgroundColor = 'white';
            hardCoverFront.style.zIndex = '-110';
            page5.style.zIndex = '110';
            page5.style.transform = 'rotateY(-180deg) translateY(5px) translateX(5px)';
 
            // Rotation supplémentaire de 180 degrés pour afficher la page arrière correctement orientée
            document.querySelector('.page-back').style.display = 'flex';
            document.querySelector('.page-back').style.opacity = 1;
            page5Back.style.transform = 'rotateY(180deg)';
        }, 200);*/
    }, 100);
});

/*
page5Front.addEventListener('click', () => {
    if (!page5.classList.contains('actif')) {
        page5.style.transform = 'rotateY(-180deg) translateY(5px) translateX(5px)';
        hardCoverFront.style.zIndex = '-110';
        page5.style.zIndex = '110';
        page5.classList.add('actif');
 
        page4.style.transform = 'rotateY(0deg) translateZ(9px) translateX(-5px) translateY(5px)';
        page3.style.transform = 'rotateY(0deg) translateZ(6px) translateX(0px) translateY(5px)';
        page2.style.transform = 'rotateY(0deg) translateZ(3px) translateX(5px) translateY(5px)';
        page1.style.transform = 'rotateY(0deg) translateZ(0px) translateX(10px) translateY(5px)';
    }
});
 
page5Back.addEventListener('click', () => {
    if (page5.classList.contains('actif')) {
        hardCoverFront.style.zIndex = '100';
        page5.style.zIndex = '1';
        page5.classList.remove('actif');
 
        page5.style.transform = 'rotateY(0deg) translateZ(9px) translateX(-5px) translateY(5px)';
        page4.style.transform = 'rotateY(0deg) translateZ(9px) translateX(0px) translateY(5px)';
        page3.style.transform = 'rotateY(0deg) translateZ(6px) translateX(5px) translateY(5px)';
        page2.style.transform = 'rotateY(0deg) translateZ(3px) translateX(10px) translateY(5px)';
        page1.style.transform = 'rotateY(0deg) translateZ(0px) translateX(15px) translateY(5px)';
    }
});
 
page4.addEventListener('click', () => {
    if (!page4.classList.contains('actif')) {
        page5.classList.remove('actif');
        page4.style.transform = 'rotateY(-180deg) translateY(5px) translateX(5px)';
        page4.style.zIndex = '111';
        page4.classList.add('actif');
 
        page5.style.transform = 'rotateY(-180deg) translateY(5px) translateX(10px) translateZ(0px)';
        page4.style.transform = 'rotateY(-180deg) translateY(5px) translateX(5px) translateZ(-3px)';
 
       page3.style.transform = 'rotateY(0deg) translateZ(6px) translateX(-5px) translateY(5px)';
        page2.style.transform = 'rotateY(0deg) translateZ(3px) translateX(0px) translateY(5px)';
        page1.style.transform = 'rotateY(0deg) translateZ(0px) translateX(5px) translateY(5px)';
    } else {
        if (page4.classList.contains('actif')) {
            page4.style.zIndex = '1';
            page4.classList.remove('actif');
            page5.classList.add('actif');
 
            page5.style.transform = 'rotateY(-180deg) translateY(5px) translateX(5px) translateZ(0px)';
 
            page4.style.transform = 'rotateY(0deg) translateZ(9px) translateX(-5px) translateY(5px)';
            page3.style.transform = 'rotateY(0deg) translateZ(6px) translateX(0px) translateY(5px)';
            page2.style.transform = 'rotateY(0deg) translateZ(3px) translateX(5px) translateY(5px)';
            page1.style.transform = 'rotateY(0deg) translateZ(0px) translateX(10px) translateY(5px)';
        }
    }
});
 
page3.addEventListener('click', () => {
    if (!page3.classList.contains('actif')) {
        page4.classList.remove('actif');
        page3.style.zIndex = '112';
        page3.classList.add('actif');
 
        page5.style.transform = 'rotateY(-180deg) translateY(5px) translateX(15px) translateZ(0px)';
        page4.style.transform = 'rotateY(-180deg) translateY(5px) translateX(10px) translateZ(-3px)';
        page3.style.transform = 'rotateY(-180deg) translateY(5px) translateX(5px) translateZ(-6px)';
 
        page2.style.transform = 'rotateY(0deg) translateZ(3px) translateX(-5px) translateY(5px)';
        page1.style.transform = 'rotateY(0deg) translateZ(0px) translateX(0px) translateY(5px)';
    } else {
        if (page3.classList.contains('actif')) {
            page3.style.zIndex = '1';
            page3.classList.remove('actif');
            page4.classList.add('actif');
 
            page5.style.transform = 'rotateY(-180deg) translateY(5px) translateX(10px) translateZ(0px)';
            page4.style.transform = 'rotateY(-180deg) translateY(5px) translateX(5px) translateZ(-3px)';
 
            page3.style.transform = 'rotateY(0deg) translateZ(6px) translateX(-5px) translateY(5px)';
            page2.style.transform = 'rotateY(0deg) translateZ(3px) translateX(0px) translateY(5px)';
            page1.style.transform = 'rotateY(0deg) translateZ(0px) translateX(5px) translateY(5px)';
        }
    }
});
 
page2.addEventListener('click', () => {
    if (!page2.classList.contains('actif')) {
        page3.classList.remove('actif');
        page2.style.zIndex = '113';
        page2.classList.add('actif');
 
 
        page5.style.transform = 'rotateY(-180deg) translateY(5px) translateX(20px) translateZ(0px)';
        page4.style.transform = 'rotateY(-180deg) translateY(5px) translateX(15px) translateZ(-3px)';
        page3.style.transform = 'rotateY(-180deg) translateY(5px) translateX(10px) translateZ(-6px)';
        page2.style.transform = 'rotateY(-180deg) translateY(5px) translateX(5px) translateZ(-9px)';
 
        page1.style.transform = 'rotateY(0deg) translateZ(0px) translateX(-5px) translateY(5px)';
    } else {
        if (page2.classList.contains('actif')) {
            page2.style.zIndex = '1';
            page2.classList.remove('actif');
            page3.classList.add('actif');
 
            page5.style.transform = 'rotateY(-180deg) translateY(5px) translateX(15px) translateZ(0px)';
            page4.style.transform = 'rotateY(-180deg) translateY(5px) translateX(10px) translateZ(-3px)';
            page3.style.transform = 'rotateY(-180deg) translateY(5px) translateX(5px) translateZ(-6px)';
 
            page2.style.transform = 'rotateY(0deg) translateZ(3px) translateX(-5px) translateY(5px)';
            page1.style.transform = 'rotateY(0deg) translateZ(0px) translateX(0px) translateY(5px)';
        }
    }
});
 
page1.addEventListener('click', () => {
    if (!page1.classList.contains('actif')) {
        page2.classList.remove('actif');
        page1.style.zIndex = '114';
        page1.classList.add('actif');
 
        page5.style.transform = 'rotateY(-180deg) translateY(5px) translateX(25px) translateZ(0px)';
        page4.style.transform = 'rotateY(-180deg) translateY(5px) translateX(20px) translateZ(-3px)';
        page3.style.transform = 'rotateY(-180deg) translateY(5px) translateX(15px) translateZ(-6px)';
        page2.style.transform = 'rotateY(-180deg) translateY(5px) translateX(10px) translateZ(-9px)';
        page1.style.transform = 'rotateY(-180deg) translateY(5px) translateX(5px) translateZ(-12px)';
 
    } else {
        if (page1.classList.contains('actif')) {
            page1.style.transform = 'rotateY(0deg) translateZ(0px) translateX(-5px) translateY(5px)';
            page1.style.zIndex = '1';
            page1.classList.remove('actif');
            page2.classList.add('actif');
 
            page5.style.transform = 'rotateY(-180deg) translateY(5px) translateX(20px) translateZ(0px)';
            page4.style.transform = 'rotateY(-180deg) translateY(5px) translateX(15px) translateZ(-3px)';
            page3.style.transform = 'rotateY(-180deg) translateY(5px) translateX(10px) translateZ(-6px)';
            page2.style.transform = 'rotateY(-180deg) translateY(5px) translateX(5px) translateZ(-9px)';
 
        }
    }
});


*/

const txtAnim = document.querySelector('.txtAnim');

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20
})
    .typeString('Alternant en développement web')
    .pauseFor(300)
    .deleteChars(31)
    .typeString('Je maîtrise HTML')
    .pauseFor(200)
    .deleteChars(4)
    .typeString('CSS')
    .pauseFor(200)
    .deleteChars(3)
    .typeString('Javascript')
    .pauseFor(200)
    .deleteChars(10)
    .typeString('React, Node')
    .pauseFor(200)
    .start();

// ANIMATION DE LA CARTE D'ACCUEIL 
/*const boxcard = document.querySelector('.box-contour-card-accueil');
const card = document.querySelector('.contour-card-accueil');
 
card.addEventListener("mousemove", event => {
    let rect = boxcard.getBoundingClientRect()
 
    let x = event.clientX - rect.x
    let y = event.clientY - rect.y
 
    let midCardWidth = rect.width / 2
    let midCardHeight = rect.height / 2
 
    let angleX = (y - midCardHeight) / 16
    let angleY = -(x - midCardWidth) / 16
 
    card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`
});
 
card.addEventListener("mouseleave", event => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
 
 
});*/

const mask81 = document.getElementById('pageMask81');
const mask82 = document.getElementById('pageMask82');
const elementPage81 = document.getElementById("page-81");
const elementPage82 = document.getElementById("page-82");

const mask71 = document.getElementById('pageMask71');
const mask72 = document.getElementById('pageMask72');
const elementPage71 = document.getElementById("page-71");
const elementPage72 = document.getElementById("page-72");
const ombre71 = document.querySelector('.ombre71');

const mask61 = document.getElementById('pageMask61');
const mask62 = document.getElementById('pageMask62');
const elementPage61 = document.getElementById("page-61");
const elementPage62 = document.getElementById("page-62");
const ombre61 = document.querySelector('.ombre61');


const mask51 = document.getElementById('pageMask51');
const mask52 = document.getElementById('pageMask52');
const elementPage51 = document.getElementById("page-51");
const elementPage52 = document.getElementById("page-52");
const ombre51 = document.querySelector('.ombre51');


const mask41 = document.getElementById('pageMask41');
const mask42 = document.getElementById('pageMask42');
const elementPage41 = document.getElementById("page-41");
const elementPage42 = document.getElementById("page-42");
const ombre41 = document.querySelector('.ombre41');


const mask31 = document.getElementById('pageMask31');
const mask32 = document.getElementById('pageMask32');
const elementPage31 = document.getElementById("page-31");
const elementPage32 = document.getElementById("page-32");
const ombre31 = document.querySelector('.ombre31');


const mask21 = document.getElementById('pageMask21');
const mask22 = document.getElementById('pageMask22');
const elementPage21 = document.getElementById("page-21");
const elementPage22 = document.getElementById("page-22");
const ombre21 = document.querySelector('.ombre21');

/*
const mask11 = document.getElementById('pageMask11');
const mask12 = document.getElementById('pageMask12');
const elementPage11 = document.getElementById("page-11");
const elementPage12 = document.getElementById("page-12");
const ombre11 = document.querySelector('.ombre11');*/

const objectifKarma = document.querySelector('#page-61 .objectif-karma');
const compKarma = document.querySelector('#page-61 .competence-karma');
const traitKarma = document.querySelector('#page-61 .trait');

const objectifPokemon = document.querySelector('#page-62 .objectif-pokemon');
const compPokemon = document.querySelector('#page-62 .competence-pokemon');
const traitPokemon = document.querySelector('#page-62 .trait');

let isDragging81 = false;
let isDragging71 = false;
let isDragging61 = false;
let isDragging51 = false;
let isDragging41 = false;
let isDragging31 = false;
let isDragging21 = false;
//let isDragging11 = false;

let isDragging82 = false;
let isDragging72 = false;
let isDragging62 = false;
let isDragging52 = false;
let isDragging42 = false;
let isDragging32 = false;
let isDragging22 = false;
//let isDragging12 = false;

let deltaX81;
let deltaX71;
let deltaX61;
let deltaX51;
let deltaX41;
let deltaX31;
let deltaX21;
//let deltaX11;
let mousemove81 = false;
let mousemove71 = false;
let mousemove61 = false;
let mousemove51 = false;
let mousemove41 = false;
let mousemove31 = false;
let mousemove21 = false;
//let mousemove11 = false;

let deltaX82;
let deltaX72;
let deltaX62;
let deltaX52;
let deltaX42;
let deltaX32;
let deltaX22;
let deltaX12;
let initialX = 0;
let totalDistance = 0; // Garder une trace de la distance totale parcourue
let autoTurnTimer; // Timer for automatic page turning


elementPage81.addEventListener('mousedown', (e) => {
    isDragging81 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});
elementPage71.addEventListener('mousedown', (e) => {
    isDragging71 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});
elementPage61.addEventListener('mousedown', (e) => {
    isDragging61 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});
elementPage51.addEventListener('mousedown', (e) => {
    isDragging51 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});
elementPage41.addEventListener('mousedown', (e) => {
    isDragging41 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});
elementPage31.addEventListener('mousedown', (e) => {
    isDragging31 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});
elementPage21.addEventListener('mousedown', (e) => {
    isDragging21 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});
/*elementPage11.addEventListener('mousedown', (e) => {
    isDragging11 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});*/

//PARTIE SUR LE REVERSE
elementPage82.addEventListener('mousedown', (e) => {
    isDragging82 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});
elementPage72.addEventListener('mousedown', (e) => {
    isDragging72 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});
elementPage62.addEventListener('mousedown', (e) => {
    isDragging62 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});
elementPage52.addEventListener('mousedown', (e) => {
    isDragging52 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});
elementPage42.addEventListener('mousedown', (e) => {
    isDragging412 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});
elementPage32.addEventListener('mousedown', (e) => {
    isDragging32 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});
elementPage22.addEventListener('mousedown', (e) => {
    isDragging22 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});
/*elementPage12.addEventListener('mousedown', (e) => {
    isDragging12 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag

});*/

document.addEventListener('mousemove', (e) => {
    if (isDragging81) {

        const currentX = e.clientX;
        const deltaX = currentX - initialX;

        mask81.style.transform = 'translate3d(345px, 0px, 0px)';
        mask82.style.transform = 'translate3d(345px, 0px, 0px)';


        mask81.classList.remove('right-mask-side');
        mask82.classList.remove('right-mask-side');
        mask81.classList.add('mask');
        mask82.classList.add('mask');


        elementPage81.classList.remove('right-side');
        elementPage82.classList.remove('right-side');
        elementPage81.classList.add('right-flip-side');
        elementPage82.classList.add('flip-side');
        elementPage82.style.boxShadow = '-20px 0px 30px rgba(40, 40, 40, 0.2)';


        mask81.style.zIndex = 90;
        mask82.style.zIndex = 113;

        // Mettre à jour la distance totale parcourue
        totalDistance -= deltaX;

        // Bornes des valeurs
        const maxTranslation = 345; // La valeur maximale de la translation
        const minTranslation = 0;  // La valeur minimale de la translation

        // Limiter la valeur de la transformation en fonction de la distance totale
        let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
        deltaX81 = totalDistance;


        if (deltaX81 > 200) {
            //page1.style.transform = 'rotateY(0deg) translateZ(10px) translateX(26px) translateY(8px)';
            page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
        } else {
            //page1.style.transform = 'rotateY(0deg) translateZ(10px) translateX(28px) translateY(8px)';
            page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(26px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(24px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(22px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(20px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(18px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(16px) translateY(8px)';
        }

        // Appliquer la transformation aux éléments
        mask81.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
        mask82.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
        elementPage81.style.transform = `translate3d(${translation}px, 0, 0)`;
        elementPage82.style.transform = `translate3d(${-translation}px, 0, 0)`;

        if (translation <= 10) {
            elementPage82.style.opacity = 0;
        } else {
            elementPage82.style.opacity = 1;
        }

        mousemove81 = true;
        initialX = currentX;
    }

    if (isDragging71) {
    const currentX = e.clientX;
    const deltaX = currentX - initialX;
    mask71.style.transform = 'translate3d(345px, 0px, 0px)';
    mask72.style.transform = 'translate3d(345px, 0px, 0px)';


    mask71.classList.remove('right-mask-side');
    mask72.classList.remove('right-mask-side');
    mask71.classList.add('mask');
    mask72.classList.add('mask');

    elementPage71.classList.remove('right-side');
    elementPage72.classList.remove('right-side');
    elementPage71.classList.add('right-flip-side');
    elementPage72.classList.add('flip-side');
    elementPage72.style.boxShadow = '-20px 0px 30px rgba(40, 40, 40, 0.2)';

    mask71.style.zIndex = 90;
    mask72.style.zIndex = 113;

    // Mettre à jour la distance totale parcourue
    totalDistance -= deltaX;

    // Bornes des valeurs
    const maxTranslation = 345; // La valeur maximale de la translation
    const minTranslation = 0;  // La valeur minimale de la translation

    // Limiter la valeur de la transformation en fonction de la distance totale
    let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
    deltaX71 = totalDistance;

    if (deltaX71 > 200) {
        elementPage82.style.transform = 'translate3d(-347px, 0, 0)';
        //page1.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
        page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
        page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
        page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
        page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
        page6.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
    } else {
        elementPage82.style.transform = 'translate3d(-345px, 0, 0)';
        //page1.style.transform = 'rotateY(0deg) translateZ(11px) translateX(26px) translateY(8px)';
        page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(24px) translateY(8px)';
        page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(22px) translateY(8px)';
        page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(20px) translateY(8px)';
        page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(18px) translateY(8px)';
        page6.style.transform = 'rotateY(0deg) translateZ(16px) translateX(16px) translateY(8px)';
    }


    // Appliquer la transformation aux éléments
    mask71.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
    mask72.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
    elementPage71.style.transform = `translate3d(${translation}px, 0, 0)`;
    elementPage72.style.transform = `translate3d(${-translation}px, 0, 0)`;

    if (translation <= 10) {
        elementPage72.style.opacity = 0;
    } else {
        elementPage72.style.opacity = 1;
    }

    mousemove71 = true;
    initialX = currentX;
}

if (isDragging61) {
    const currentX = e.clientX;
    const deltaX = currentX - initialX;
    mask61.style.transform = 'translate3d(345px, 0px, 0px)';
    mask62.style.transform = 'translate3d(345px, 0px, 0px)';


    mask61.classList.remove('right-mask-side');
    mask62.classList.remove('right-mask-side');
    mask61.classList.add('mask');
    mask62.classList.add('mask');


    elementPage61.classList.remove('right-side');
    elementPage62.classList.remove('right-side');
    elementPage61.classList.add('right-flip-side');
    elementPage62.classList.add('flip-side');
    elementPage62.style.boxShadow = '-20px 0px 30px rgba(40, 40, 40, 0.2)';

    mask61.style.zIndex = 90;
    mask62.style.zIndex = 113;

    // Mettre à jour la distance totale parcourue
    totalDistance -= deltaX;

    // Bornes des valeurs
    const maxTranslation = 345; // La valeur maximale de la translation
    const minTranslation = 0;  // La valeur minimale de la translation

    // Limiter la valeur de la transformation en fonction de la distance totale
    let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
    deltaX61 = totalDistance;

    if (deltaX61 > 200) {
        elementPage82.style.transform = 'translate3d(-349px, 0, 0)';
        elementPage72.style.transform = 'translate3d(-347px, 0, 0)';
        //page1.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
        page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
        page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
        page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
        page5.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

    } else {
        elementPage82.style.transform = 'translate3d(-347px, 0, 0)';
        elementPage72.style.transform = 'translate3d(-345px, 0, 0)';
        //page1.style.transform = 'rotateY(0deg) translateZ(12px) translateX(24px) translateY(8px)';
        page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(22px) translateY(8px)';
        page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(20px) translateY(8px)';
        page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(18px) translateY(8px)';
        page5.style.transform = 'rotateY(0deg) translateZ(16px) translateX(16px) translateY(8px)';

    }


    // Appliquer la transformation aux éléments
    mask61.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
    mask62.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
    elementPage61.style.transform = `translate3d(${translation}px, 0, 0)`;
    elementPage62.style.transform = `translate3d(${-translation}px, 0, 0)`;

    if (translation <= 10) {
        elementPage62.style.opacity = 0;
    } else {
        elementPage62.style.opacity = 1;
    }

    mousemove61 = true;
    initialX = currentX;
}

if (isDragging51) {
    const currentX = e.clientX;
    const deltaX = currentX - initialX;
    mask51.style.transform = 'translate3d(345px, 0px, 0px)';
    mask52.style.transform = 'translate3d(345px, 0px, 0px)';


    mask51.classList.remove('right-mask-side');
    mask52.classList.remove('right-mask-side');
    mask51.classList.add('mask');
    mask52.classList.add('mask');


    elementPage51.classList.remove('right-side');
    elementPage52.classList.remove('right-side');
    elementPage51.classList.add('right-flip-side');
    elementPage52.classList.add('flip-side');
    elementPage52.style.boxShadow = '-20px 0px 30px rgba(40, 40, 40, 0.2)';

    mask51.style.zIndex = 90;
    mask52.style.zIndex = 113;

    // Mettre à jour la distance totale parcourue
    totalDistance -= deltaX;

    // Bornes des valeurs
    const maxTranslation = 345; // La valeur maximale de la translation
    const minTranslation = 0;  // La valeur minimale de la translation

    // Limiter la valeur de la transformation en fonction de la distance totale
    let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
    deltaX51 = totalDistance;

    if (deltaX51 > 200) {
        elementPage82.style.transform = 'translate3d(-351px, 0, 0)';
        elementPage72.style.transform = 'translate3d(-349px, 0, 0)';
        elementPage62.style.transform = 'translate3d(-347px, 0, 0)';

        //page1.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
        page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
        page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
        page4.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
    } else {
        elementPage82.style.transform = 'translate3d(-349px, 0, 0)';
        elementPage72.style.transform = 'translate3d(-347px, 0, 0)';
        elementPage62.style.transform = 'translate3d(-345px, 0, 0)';

        //page1.style.transform = 'rotateY(0deg) translateZ(13px) translateX(22px) translateY(8px)';
        page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(20px) translateY(8px)';
        page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(18px) translateY(8px)';
        page4.style.transform = 'rotateY(0deg) translateZ(16px) translateX(16px) translateY(8px)';
    }


    // Appliquer la transformation aux éléments
    mask51.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
    mask52.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
    elementPage51.style.transform = `translate3d(${translation}px, 0, 0)`;
    elementPage52.style.transform = `translate3d(${-translation}px, 0, 0)`;

    if (translation <= 10) {
        elementPage52.style.opacity = 0;
    } else {
        elementPage52.style.opacity = 1;
    }

    mousemove51 = true;
    initialX = currentX;
}

if (isDragging41) {
    const currentX = e.clientX;
    const deltaX = currentX - initialX;
    mask41.style.transform = 'translate3d(345px, 0px, 0px)';
    mask42.style.transform = 'translate3d(345px, 0px, 0px)';


    mask41.classList.remove('right-mask-side');
    mask42.classList.remove('right-mask-side');
    mask41.classList.add('mask');
    mask42.classList.add('mask');


    elementPage41.classList.remove('right-side');
    elementPage42.classList.remove('right-side');
    elementPage41.classList.add('right-flip-side');
    elementPage42.classList.add('flip-side');
    elementPage42.style.boxShadow = '-20px 0px 30px rgba(40, 40, 40, 0.2)';

    mask41.style.zIndex = 90;
    mask42.style.zIndex = 113;

    // Mettre à jour la distance totale parcourue
    totalDistance -= deltaX;

    // Bornes des valeurs
    const maxTranslation = 345; // La valeur maximale de la translation
    const minTranslation = 0;  // La valeur minimale de la translation

    // Limiter la valeur de la transformation en fonction de la distance totale
    let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
    deltaX41 = totalDistance;

    if (deltaX41 > 200) {
        elementPage82.style.transform = 'translate3d(-353px, 0, 0)';
        elementPage72.style.transform = 'translate3d(-351px, 0, 0)';
        elementPage62.style.transform = 'translate3d(-349px, 0, 0)';
        elementPage52.style.transform = 'translate3d(-347px, 0, 0)';

        //page1.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
        page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
        page3.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
    } else {
        elementPage82.style.transform = 'translate3d(-351px, 0, 0)';
        elementPage72.style.transform = 'translate3d(-349px, 0, 0)';
        elementPage62.style.transform = 'translate3d(-347px, 0, 0)';
        elementPage52.style.transform = 'translate3d(-345px, 0, 0)';

        //page1.style.transform = 'rotateY(0deg) translateZ(14px) translateX(20px) translateY(8px)';
        page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(18px) translateY(8px)';
        page3.style.transform = 'rotateY(0deg) translateZ(16px) translateX(16px) translateY(8px)';
    }


    // Appliquer la transformation aux éléments
    mask41.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
    mask42.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
    elementPage41.style.transform = `translate3d(${translation}px, 0, 0)`;
    elementPage42.style.transform = `translate3d(${-translation}px, 0, 0)`;

    if (translation <= 10) {
        elementPage42.style.opacity = 0;
    } else {
        elementPage42.style.opacity = 1;
    }

    mousemove41 = true;
    initialX = currentX;
}

if (isDragging31) {
    const currentX = e.clientX;
    const deltaX = currentX - initialX;
    mask31.style.transform = 'translate3d(345px, 0px, 0px)';
    mask32.style.transform = 'translate3d(345px, 0px, 0px)';


    mask31.classList.remove('right-mask-side');
    mask32.classList.remove('right-mask-side');
    mask31.classList.add('mask');
    mask32.classList.add('mask');


    elementPage31.classList.remove('right-side');
    elementPage32.classList.remove('right-side');
    elementPage31.classList.add('right-flip-side');
    elementPage32.classList.add('flip-side');
    elementPage32.style.boxShadow = '-20px 0px 30px rgba(40, 40, 40, 0.2)';

    mask31.style.zIndex = 90;
    mask32.style.zIndex = 113;

    // Mettre à jour la distance totale parcourue
    totalDistance -= deltaX;

    // Bornes des valeurs
    const maxTranslation = 345; // La valeur maximale de la translation
    const minTranslation = 0;  // La valeur minimale de la translation

    // Limiter la valeur de la transformation en fonction de la distance totale
    let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
    deltaX31 = totalDistance;

    if (deltaX31 > 200) {
        elementPage82.style.transform = 'translate3d(-355px, 0, 0)';
        elementPage72.style.transform = 'translate3d(-353px, 0, 0)';
        elementPage62.style.transform = 'translate3d(-351px, 0, 0)';
        elementPage52.style.transform = 'translate3d(-349px, 0, 0)';
        elementPage42.style.transform = 'translate3d(-347px, 0, 0)';

        //page1.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
        page2.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
    } else {
        elementPage82.style.transform = 'translate3d(-353px, 0, 0)';
        elementPage72.style.transform = 'translate3d(-351px, 0, 0)';
        elementPage62.style.transform = 'translate3d(-349px, 0, 0)';
        elementPage52.style.transform = 'translate3d(-347px, 0, 0)';
        elementPage42.style.transform = 'translate3d(-345px, 0, 0)';

        //page1.style.transform = 'rotateY(0deg) translateZ(15px) translateX(18px) translateY(8px)';
        page2.style.transform = 'rotateY(0deg) translateZ(16px) translateX(16px) translateY(8px)';
    }


    // Appliquer la transformation aux éléments
    mask31.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
    mask32.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
    elementPage31.style.transform = `translate3d(${translation}px, 0, 0)`;
    elementPage32.style.transform = `translate3d(${-translation}px, 0, 0)`;

    if (translation <= 10) {
        elementPage32.style.opacity = 0;
    } else {
        elementPage32.style.opacity = 1;
    }

    mousemove31 = true;
    initialX = currentX;
}

if (isDragging21) {
    const currentX = e.clientX;
    const deltaX = currentX - initialX;
    mask21.style.transform = 'translate3d(345px, 0px, 0px)';
    mask22.style.transform = 'translate3d(345px, 0px, 0px)';


    mask21.classList.remove('right-mask-side');
    mask22.classList.remove('right-mask-side');
    mask21.classList.add('mask');
    mask22.classList.add('mask');


    elementPage21.classList.remove('right-side');
    elementPage22.classList.remove('right-side');
    elementPage21.classList.add('right-flip-side');
    elementPage22.classList.add('flip-side');
    elementPage22.style.boxShadow = '-20px 0px 30px rgba(40, 40, 40, 0.2)';

    mask21.style.zIndex = 90;
    mask22.style.zIndex = 113;

    // Mettre à jour la distance totale parcourue
    totalDistance -= deltaX;

    // Bornes des valeurs
    const maxTranslation = 345; // La valeur maximale de la translation
    const minTranslation = 0;  // La valeur minimale de la translation

    // Limiter la valeur de la transformation en fonction de la distance totale
    let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
    deltaX21 = totalDistance;

    if (deltaX21 > 200) {
        elementPage82.style.transform = 'translate3d(-357px, 0, 0)';
        elementPage72.style.transform = 'translate3d(-355px, 0, 0)';
        elementPage62.style.transform = 'translate3d(-353px, 0, 0)';
        elementPage52.style.transform = 'translate3d(-351px, 0, 0)';
        elementPage42.style.transform = 'translate3d(-349px, 0, 0)';
        elementPage32.style.transform = 'translate3d(-347px, 0, 0)';

        //page1.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

    } else {
        elementPage82.style.transform = 'translate3d(-355px, 0, 0)';
        elementPage72.style.transform = 'translate3d(-353px, 0, 0)';
        elementPage62.style.transform = 'translate3d(-351px, 0, 0)';
        elementPage52.style.transform = 'translate3d(-349px, 0, 0)';
        elementPage42.style.transform = 'translate3d(-347px, 0, 0)';
        elementPage32.style.transform = 'translate3d(-345px, 0, 0)';

        //page1.style.transform = 'rotateY(0deg) translateZ(16px) translateX(16px) translateY(8px)';

    }


    // Appliquer la transformation aux éléments
    mask21.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
    mask22.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
    elementPage21.style.transform = `translate3d(${translation}px, 0, 0)`;
    elementPage22.style.transform = `translate3d(${-translation}px, 0, 0)`;

    if (translation <= 10) {
        elementPage22.style.opacity = 0;
    } else {
        elementPage22.style.opacity = 1;
    }

    mousemove21 = true;
    initialX = currentX;
}

/*if (isDragging11) {
    page1.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';
    const currentX = e.clientX;
    const deltaX = currentX - initialX;
    mask11.style.transform = 'translate3d(345px, 0px, 0px)';
    mask12.style.transform = 'translate3d(345px, 0px, 0px)';


    mask11.classList.remove('right-mask-side');
    mask12.classList.remove('right-mask-side');
    mask11.classList.add('mask');
    mask12.classList.add('mask');


    elementPage11.classList.remove('right-side');
    elementPage12.classList.remove('right-side');
    elementPage11.classList.add('right-flip-side');
    elementPage12.classList.add('flip-side');
    elementPage12.style.boxShadow = '-20px 0px 30px rgba(40, 40, 40, 0.2)';

    mask11.style.zIndex = 90;
    mask12.style.zIndex = 113;

    // Mettre à jour la distance totale parcourue
    totalDistance -= deltaX;

    // Bornes des valeurs
    const maxTranslation = 345; // La valeur maximale de la translation
    const minTranslation = 0;  // La valeur minimale de la translation

    // Limiter la valeur de la transformation en fonction de la distance totale
    let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
    deltaX11 = totalDistance;

    if (deltaX11 > 200) {
        elementPage82.style.transform = 'translate3d(-359px, 0, 0)';
        elementPage72.style.transform = 'translate3d(-357px, 0, 0)';
        elementPage62.style.transform = 'translate3d(-355px, 0, 0)';
        elementPage52.style.transform = 'translate3d(-353px, 0, 0)';
        elementPage42.style.transform = 'translate3d(-351px, 0, 0)';
        elementPage32.style.transform = 'translate3d(-349px, 0, 0)';
        elementPage22.style.transform = 'translate3d(-347px, 0, 0)';
    } else {
        elementPage82.style.transform = 'translate3d(-357px, 0, 0)';
        elementPage72.style.transform = 'translate3d(-355px, 0, 0)';
        elementPage62.style.transform = 'translate3d(-353px, 0, 0)';
        elementPage52.style.transform = 'translate3d(-351px, 0, 0)';
        elementPage42.style.transform = 'translate3d(-349px, 0, 0)';
        elementPage32.style.transform = 'translate3d(-347px, 0, 0)';
        elementPage22.style.transform = 'translate3d(-345px, 0, 0)';
    }


    // Appliquer la transformation aux éléments
    mask11.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
    mask12.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
    elementPage11.style.transform = `translate3d(${translation}px, 0, 0)`;
    elementPage12.style.transform = `translate3d(${-translation}px, 0, 0)`;

    if (translation <= 10) {
        elementPage12.style.opacity = 0;
    } else {
        elementPage12.style.opacity = 1;
    }

    mousemove11 = true;
    initialX = currentX;
}*/
})


document.addEventListener('mouseup', () => {
    if (isDragging81 && mousemove81) {
        isDragging81 = false;
        if (deltaX81 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask81.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask82.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage81.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage82.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre71.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    console.log(isDragging81);
                    elementPage82.style.zIndex = 1;
                    elementPage81.style.zIndex = 10;
                    mask82.style.zIndex = 1;
                    mask81.style.zIndex = 10;
                    page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-329px) translateY(8px)';
                    mask82.style.transform = 'translate3d(10px, 0, 0) translateX(345px)';
                    elementPage81.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage82.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            elementPage82.style.opacity = 0;

            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask81.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask82.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage81.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage82.style.transform = `translate3d(${-translation}px, 0, 0)`;


                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask82.style.zIndex = 1;
                    mask81.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }
    }

    if (isDragging71 && mousemove71) {
        isDragging71 = false;
        if (deltaX71 > 150) {
            setTimeout(() => {
                objectifKarma.classList.add('fade-in');
            }, 200)
            setTimeout(() => {
                compKarma.classList.add('fade-in');
            }, 300)

            setTimeout(() => {
                traitKarma.classList.add('height-trait');
            }, 800)
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask71.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask72.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage71.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage72.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre61.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage72.style.zIndex = 2;
                    elementPage71.style.zIndex = 11;
                    mask72.style.zIndex = 1;
                    mask71.style.zIndex = 10;
                    page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-331px) translateY(8px)';
                    mask72.style.transform = 'translate3d(10px, 0, 0) translateX(345px)';
                    elementPage71.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage72.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            elementPage72.style.opacity = 0;

            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask71.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask72.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage71.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage72.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask72.style.zIndex = 1;
                    mask71.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }

    }
    if (isDragging61 && mousemove61) {
        isDragging61 = false;
        if (deltaX61 > 150) {
            setTimeout(() => {
                objectifPokemon.classList.add('fade-in');
            }, 200)
            setTimeout(() => {
                compPokemon.classList.add('fade-in');
            }, 300)

            setTimeout(() => {
                traitPokemon.classList.add('height-trait-reverse');
            }, 800)
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask61.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask62.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage61.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage62.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre51.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage62.style.zIndex = 3;
                    elementPage61.style.zIndex = 12;
                    mask62.style.zIndex = 1;
                    mask61.style.zIndex = 10;
                    page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-331px) translateY(8px)';
                    mask62.style.transform = 'translate3d(10px, 0, 0) translateX(345px)';
                    elementPage61.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage62.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            elementPage62.style.opacity = 0;

            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask61.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask62.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage61.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage62.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask62.style.zIndex = 1;
                    mask61.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }


    }
    if (isDragging51 && mousemove51) {
        isDragging51 = false;
        if (deltaX51 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask51.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask52.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage51.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage52.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre41.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage52.style.zIndex = 4;
                    elementPage51.style.zIndex = 13;
                    mask52.style.zIndex = 1;
                    mask51.style.zIndex = 10;
                    page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-331px) translateY(8px)';
                    mask52.style.transform = 'translate3d(10px, 0, 0) translateX(345px)';
                    elementPage51.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage52.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            elementPage52.style.opacity = 0;

            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask51.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask52.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage51.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage52.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask52.style.zIndex = 1;
                    mask51.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }
    }
    if (isDragging41 && mousemove41) {
        isDragging41 = false;
        if (deltaX41 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask41.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask42.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage41.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage42.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre31.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage42.style.zIndex = 5;
                    elementPage41.style.zIndex = 14;
                    mask42.style.zIndex = 1;
                    mask41.style.zIndex = 10;
                    page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-331px) translateY(8px)';
                    mask42.style.transform = 'translate3d(10px, 0, 0) translateX(345px)';
                    elementPage41.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage42.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            elementPage42.style.opacity = 0;

            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask41.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask42.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage41.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage42.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask42.style.zIndex = 1;
                    mask41.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }



    }
    if (isDragging31 && mousemove31) {
        isDragging31 = false;
        if (deltaX31 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask31.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask32.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage31.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage32.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre21.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage32.style.zIndex = 6;
                    elementPage31.style.zIndex = 15;
                    mask32.style.zIndex = 1;
                    mask31.style.zIndex = 10;
                    page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(-331px) translateY(8px)';
                    mask32.style.transform = 'translate3d(10px, 0, 0) translateX(345px)';
                    elementPage31.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage32.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            elementPage32.style.opacity = 0;

            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask31.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask32.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage31.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage32.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask32.style.zIndex = 1;
                    mask31.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }

    }
    if (isDragging21 && mousemove21) {
        isDragging21 = false;
        if (deltaX21 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask21.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask22.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage21.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage22.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    //ombre11.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage22.style.zIndex = 7;
                    elementPage21.style.zIndex = 16;
                    mask22.style.zIndex = 1;
                    mask21.style.zIndex = 10;
                    page2.style.transform = 'rotateY(0deg) translateZ(16px) translateX(-331px) translateY(8px)';
                    mask22.style.transform = 'translate3d(10px, 0, 0) translateX(345px)';
                    elementPage21.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage22.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            elementPage22.style.opacity = 0;

            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask21.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask22.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage21.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage22.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask22.style.zIndex = 1;
                    mask21.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 15);
        }
    }
    /*if (isDragging11 && mousemove11) {
        isDragging11 = false;
        if (deltaX11 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask11.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask12.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage11.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage12.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage12.style.zIndex = 8;
                    elementPage11.style.zIndex = 17;
                    mask12.style.zIndex = 1;
                    mask11.style.zIndex = 10;
                    page1.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-331px) translateY(8px)';
                    mask12.style.transform = 'translate3d(10px, 0, 0) translateX(345px)';
                    elementPage11.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage12.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            elementPage12.style.opacity = 0;

            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 4;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask11.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask12.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage11.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage12.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask12.style.zIndex = 1;
                    mask11.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }

    }*/
});



document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        e.preventDefault();
    }
});

let compteur = 0;
const suivant = document.querySelector('.suivant');
const precedent = document.querySelector('.precedent');
const presentation = document.querySelector('.presentation');
const iut = document.querySelector('.annee-iut');
const wild = document.querySelector('.annee-wild');


suivant.addEventListener('click', () => {
    if (compteur == 0) {
        presentation.classList.remove('appear');
        presentation.classList.add('disappear');
        iut.classList.remove('disappear');
        iut.classList.add('appear');
        compteur = 1;
    } else if (compteur == 1) {
        iut.classList.remove('appear');
        iut.classList.add('disappear');
        wild.classList.remove('disappear');
        wild.classList.add('appear');
        compteur = 2;
    } else if (compteur == 2) {
        wild.classList.remove('appear');
        wild.classList.add('disappear');
        presentation.classList.remove('disappear');
        presentation.classList.add('appear');
        compteur = 0;
    }
});

precedent.addEventListener('click', () => {
    if (compteur == 1) {
        presentation.classList.remove('disappear');
        presentation.classList.add('appear');
        iut.classList.remove('appear');
        iut.classList.add('disappear');
        compteur = 0;
    } else if (compteur == 2) {
        iut.classList.remove('disappear');
        iut.classList.add('appear');
        wild.classList.remove('appear');
        wild.classList.add('disappear');
        compteur = 1;
    } else if (compteur == 0) {
        presentation.classList.remove('appear');
        presentation.classList.add('disappear');
        wild.classList.remove('disappear');
        wild.classList.add('appear');
        compteur = 2;
    }
});