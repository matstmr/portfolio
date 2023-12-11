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
const titreHardCoverFront = document.querySelector('.hardcover_front h1');
const pHardCoverFront = document.querySelector('.hardcover_front p');

//const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const page4 = document.querySelector('.page4');
const page5 = document.querySelector('.page5');
const page6 = document.querySelector('.page6');
const page7 = document.querySelector('.page7');
const page8 = document.querySelector('.page8');


hardCoverFront.addEventListener('click', () => {

    if (book.classList.contains('lecture')) {
        book.classList.remove('lecture');
        setTimeout(() => {
            hardCoverFront.style.transform = 'rotateY(-34deg) translateZ(8px)';
            hardCoverBack.style.transform = 'rotateY(-15deg) translateZ(-5px)';
            //page1.style.transform = 'rotateY(-20deg) translateY(10px)';
            page2.style.transform = 'rotateY(-22deg) translateY(10px)';
            page3.style.transform = 'rotateY(-24deg) translateY(10px)';
            page4.style.transform = 'rotateY(-26deg) translateY(10px)';
            page5.style.transform = 'rotateY(-28deg) translateY(10px)';
            page6.style.transform = 'rotateY(-30deg) translateY(10px)';
            page7.style.transform = 'rotateY(-32deg) translateY(10px)';
            page8.style.transform = 'rotateY(-34deg) translateY(10px)';
            titreHardCoverFront.style.display = 'block';
            pHardCoverFront.style.display = 'block';
        }, 100);
    } else {
        book.classList.add('lecture');
        setTimeout(() => {
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
            titreHardCoverFront.style.display = 'none';
            pHardCoverFront.style.display = 'none';
        }, 100);
    }
});

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

let mousemove82 = false;
let mousemove72 = false;
let mousemove62 = false;
let mousemove52 = false;
let mousemove42 = false;
let mousemove32 = false;
let mousemove22 = false;

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
    clearInterval(autoTurnTimer);
    mousemove81 = true;
});

elementPage81.addEventListener('touchstart', (e) => {
    isDragging81 = true;
    initialX = e.touches[0].clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove81 = true;
    e.preventDefault();

    isDragging82 = false;
    isDragging71 = false;
    isDragging72 = false;
    isDragging61 = false;
    isDragging62 = false;
    isDragging51 = false;
    isDragging52 = false;
    isDragging41 = false;
    isDragging42 = false;
    isDragging31 = false;
    isDragging32 = false;
    isDragging21 = false;
    isDragging22 = false;
});
elementPage71.addEventListener('mousedown', (e) => {
    isDragging71 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove71 = true;
});
elementPage71.addEventListener('touchstart', (e) => {
    isDragging71 = true;
    initialX = e.touches[0].clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove71 = true;
    e.preventDefault();

    isDragging82 = false;
    isDragging81 = false;
    isDragging72 = false;
    isDragging61 = false;
    isDragging62 = false;
    isDragging51 = false;
    isDragging52 = false;
    isDragging41 = false;
    isDragging42 = false;
    isDragging31 = false;
    isDragging32 = false;
    isDragging21 = false;
    isDragging22 = false;
});
elementPage61.addEventListener('mousedown', (e) => {
    isDragging61 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove61 = true;

});
elementPage61.addEventListener('touchstart', (e) => {
    isDragging61 = true;
    initialX = e.touches[0].clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove61 = true;
    e.preventDefault();

    isDragging82 = false;
    isDragging81 = false;
    isDragging72 = false;
    isDragging71 = false;
    isDragging62 = false;
    isDragging51 = false;
    isDragging52 = false;
    isDragging41 = false;
    isDragging42 = false;
    isDragging31 = false;
    isDragging32 = false;
    isDragging21 = false;
    isDragging22 = false;
});
elementPage51.addEventListener('mousedown', (e) => {
    isDragging51 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove51 = true;

});
elementPage51.addEventListener('touchstart', (e) => {
    isDragging51 = true;
    initialX = e.touches[0].clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove51 = true;
    e.preventDefault();

    isDragging82 = false;
    isDragging81 = false;
    isDragging72 = false;
    isDragging71 = false;
    isDragging62 = false;
    isDragging61 = false;
    isDragging52 = false;
    isDragging41 = false;
    isDragging42 = false;
    isDragging31 = false;
    isDragging32 = false;
    isDragging21 = false;
    isDragging22 = false;
});
elementPage41.addEventListener('mousedown', (e) => {
    isDragging41 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove41 = true;

});
elementPage41.addEventListener('touchstart', (e) => {
    isDragging41 = true;
    initialX = e.touches[0].clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove41 = true;
    e.preventDefault();

    isDragging82 = false;
    isDragging81 = false;
    isDragging72 = false;
    isDragging71 = false;
    isDragging62 = false;
    isDragging61 = false;
    isDragging52 = false;
    isDragging51 = false;
    isDragging42 = false;
    isDragging31 = false;
    isDragging32 = false;
    isDragging21 = false;
    isDragging22 = false;
});
elementPage31.addEventListener('mousedown', (e) => {
    isDragging31 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove31 = true;

});
elementPage31.addEventListener('touchstart', (e) => {
    isDragging31 = true;
    initialX = e.touches[0].clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove31 = true;
    e.preventDefault();

    isDragging82 = false;
    isDragging81 = false;
    isDragging72 = false;
    isDragging71 = false;
    isDragging62 = false;
    isDragging61 = false;
    isDragging52 = false;
    isDragging51 = false;
    isDragging42 = false;
    isDragging41 = false;
    isDragging32 = false;
    isDragging21 = false;
    isDragging22 = false;
});
elementPage21.addEventListener('mousedown', (e) => {
    isDragging21 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove21 = true;

});
elementPage21.addEventListener('touchstart', (e) => {
    isDragging21 = true;
    initialX = e.touches[0].clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove21 = true;
    e.preventDefault();

    isDragging82 = false;
    isDragging81 = false;
    isDragging72 = false;
    isDragging71 = false;
    isDragging62 = false;
    isDragging61 = false;
    isDragging52 = false;
    isDragging51 = false;
    isDragging42 = false;
    isDragging41 = false;
    isDragging32 = false;
    isDragging31 = false;
    isDragging22 = false;
});
/*elementPage11.addEventListener('mousedown', (e) => {
    isDragging11 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);

});*/

//PARTIE SUR LE REVERSE
elementPage82.addEventListener('mousedown', (e) => {
    isDragging82 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove82 = true;

});
elementPage82.addEventListener('touchstart', (e) => {
    isDragging82 = true;
    initialX = e.touches[0].clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove82 = true;
    e.preventDefault();

    isDragging21 = false;
    isDragging81 = false;
    isDragging72 = false;
    isDragging71 = false;
    isDragging62 = false;
    isDragging61 = false;
    isDragging52 = false;
    isDragging51 = false;
    isDragging42 = false;
    isDragging41 = false;
    isDragging32 = false;
    isDragging31 = false;
    isDragging22 = false;
});
elementPage72.addEventListener('mousedown', (e) => {
    isDragging72 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove72 = true;
});
elementPage72.addEventListener('touchstart', (e) => {
    isDragging72 = true;
    initialX = e.touches[0].clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove72 = true;
    e.preventDefault();

    isDragging21 = false;
    isDragging81 = false;
    isDragging82 = false;
    isDragging71 = false;
    isDragging62 = false;
    isDragging61 = false;
    isDragging52 = false;
    isDragging51 = false;
    isDragging42 = false;
    isDragging41 = false;
    isDragging32 = false;
    isDragging31 = false;
    isDragging22 = false;
});
elementPage62.addEventListener('mousedown', (e) => {
    isDragging62 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove62 = true;
});
elementPage62.addEventListener('touchstart', (e) => {
    isDragging62 = true;
    initialX = e.touches[0].clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove62 = true;
    e.preventDefault();

    isDragging21 = false;
    isDragging81 = false;
    isDragging72 = false;
    isDragging71 = false;
    isDragging82 = false;
    isDragging61 = false;
    isDragging52 = false;
    isDragging51 = false;
    isDragging42 = false;
    isDragging41 = false;
    isDragging32 = false;
    isDragging31 = false;
    isDragging22 = false;
});
elementPage52.addEventListener('mousedown', (e) => {
    isDragging52 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove52 = true;
});
elementPage52.addEventListener('touchstart', (e) => {
    isDragging52 = true;
    initialX = e.touches[0].clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer);
    mousemove52 = true;
    e.preventDefault();

    isDragging21 = false;
    isDragging81 = false;
    isDragging72 = false;
    isDragging71 = false;
    isDragging62 = false;
    isDragging61 = false;
    isDragging82 = false;
    isDragging51 = false;
    isDragging42 = false;
    isDragging41 = false;
    isDragging32 = false;
    isDragging31 = false;
    isDragging22 = false;
});
elementPage42.addEventListener('mousedown', (e) => {
    isDragging42 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag
    mousemove42 = true;
});
elementPage42.addEventListener('touchstart', (e) => {
    isDragging42 = true;
    initialX = e.touches[0].clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag
    mousemove42 = true;
    e.preventDefault();

    isDragging21 = false;
    isDragging81 = false;
    isDragging72 = false;
    isDragging71 = false;
    isDragging62 = false;
    isDragging61 = false;
    isDragging52 = false;
    isDragging51 = false;
    isDragging82 = false;
    isDragging41 = false;
    isDragging32 = false;
    isDragging31 = false;
    isDragging22 = false;
});
elementPage32.addEventListener('mousedown', (e) => {
    isDragging32 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag
    mousemove32 = true;
});
elementPage32.addEventListener('touchstart', (e) => {
    isDragging32 = true;
    initialX = e.touches[0].clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag
    mousemove32 = true;
    e.preventDefault();

    isDragging21 = false;
    isDragging81 = false;
    isDragging72 = false;
    isDragging71 = false;
    isDragging62 = false;
    isDragging61 = false;
    isDragging52 = false;
    isDragging51 = false;
    isDragging42 = false;
    isDragging41 = false;
    isDragging82 = false;
    isDragging31 = false;
    isDragging22 = false;
});
elementPage22.addEventListener('mousedown', (e) => {
    isDragging22 = true;
    initialX = e.clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag
    mousemove22 = true;
});
elementPage22.addEventListener('touchstart', (e) => {
    isDragging22 = true;
    initialX = e.touches[0].clientX;
    deltaX = 0;
    totalDistance = 0; // Garder une trace de la distance totale parcourue
    clearInterval(autoTurnTimer); // Clear the auto-turn timer when starting a new drag
    mousemove22 = true;
    e.preventDefault();

    isDragging21 = false;
    isDragging81 = false;
    isDragging72 = false;
    isDragging71 = false;
    isDragging62 = false;
    isDragging61 = false;
    isDragging52 = false;
    isDragging51 = false;
    isDragging42 = false;
    isDragging41 = false;
    isDragging32 = false;
    isDragging31 = false;
    isDragging82 = false;
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

        initialX = currentX;
    }

    if (isDragging82) {
        const currentX = e.clientX;
        const deltaX = currentX - initialX;

        page8.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-329px) translateY(8px)';

        mask81.style.transform = 'translate3d(0, 0px, 0px)';
        mask82.style.transform = 'translate3d(0, 0px, 0px)';

        mask81.classList.remove('mask');
        mask82.classList.remove('mask');
        mask81.classList.add('right-mask-side');
        mask82.classList.add('right-mask-side');

        elementPage81.classList.remove('right-flip-side');
        elementPage82.classList.remove('flip-side');
        elementPage81.classList.add('right-side');
        elementPage82.classList.add('right-side');
        elementPage81.style.boxShadow = '20px 0px 30px rgba(40, 40, 40, 0.2)';

        mask81.style.zIndex = 113;
        mask82.style.zIndex = 90;

        // Mettre à jour la distance totale parcourue
        totalDistance += deltaX;

        // Bornes des valeurs
        const maxTranslation = 345; // La valeur maximale de la translation
        const minTranslation = 0;  // La valeur minimale de la translation

        // Limiter la valeur de la transformation en fonction de la distance totale
        let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
        deltaX82 = totalDistance;

        if (deltaX82 > 145) {
            //page1.style.transform = 'rotateY(0deg) translateZ(10px) translateX(28px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
            page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
        } else {
            //page1.style.transform = 'rotateY(0deg) translateZ(10px) translateX(26px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
            page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
        }

        // Appliquer la transformation aux éléments
        mask81.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
        mask82.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

        elementPage81.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
        elementPage82.style.transform = `translate3d(${-translation}px, 0, 0)`;


        if (translation <= 10) {
            elementPage81.style.opacity = 0;
        } else {
            elementPage81.style.opacity = 1;
        }

        initialX = currentX;
    }


    if (isDragging71) {
        const currentX = e.clientX;
        const deltaX = currentX - initialX;
        page7.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';

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
            //elementPage82.style.transform = 'translate3d(-347px, 0, 0)';
            //page1.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
            page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-333px) translateY(8px)';
        } else {
            //elementPage82.style.transform = 'translate3d(-345px, 0, 0)';
            //page1.style.transform = 'rotateY(0deg) translateZ(11px) translateX(26px) translateY(8px)';
            page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';

            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-331px) translateY(8px)';
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

        initialX = currentX;
    }

    if (isDragging72) {
        const currentX = e.clientX;
        const deltaX = currentX - initialX;
        page7.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-331px) translateY(8px)';

        mask71.style.transform = 'translate3d(0, 0px, 0px)';
        mask72.style.transform = 'translate3d(0, 0px, 0px)';

        mask71.classList.remove('mask');
        mask72.classList.remove('mask');
        mask71.classList.add('right-mask-side');
        mask72.classList.add('right-mask-side');

        elementPage71.classList.remove('right-flip-side');
        elementPage72.classList.remove('flip-side');
        elementPage71.classList.add('right-side');
        elementPage72.classList.add('right-side');
        elementPage71.style.boxShadow = '20px 0px 30px rgba(40, 40, 40, 0.2)';

        mask71.style.zIndex = 113;
        mask72.style.zIndex = 90;

        // Mettre à jour la distance totale parcourue
        totalDistance += deltaX;

        // Bornes des valeurs
        const maxTranslation = 345; // La valeur maximale de la translation
        const minTranslation = 0;  // La valeur minimale de la translation

        // Limiter la valeur de la transformation en fonction de la distance totale
        let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
        deltaX72 = totalDistance;

        if (deltaX72 > 200) {
            page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';

            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-331px) translateY(8px)';
        } else {
            page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-333px) translateY(8px)';
        }


        // Appliquer la transformation aux éléments
        mask71.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
        mask72.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

        elementPage71.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
        elementPage72.style.transform = `translate3d(${-translation}px, 0, 0)`;
        if (translation <= 10) {
            elementPage71.style.opacity = 0;
        } else {
            elementPage71.style.opacity = 1;
        }

        initialX = currentX;
    }

    if (isDragging61) {
        const currentX = e.clientX;
        const deltaX = currentX - initialX;
        page6.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';

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
            //elementPage82.style.transform = 'translate3d(-349px, 0, 0)';
            //elementPage72.style.transform = 'translate3d(-347px, 0, 0)';
            //page1.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
            page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-333px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-335px) translateY(8px)';
        } else {
            //elementPage82.style.transform = 'translate3d(-347px, 0, 0)';
            //elementPage72.style.transform = 'translate3d(-345px, 0, 0)';
            //page1.style.transform = 'rotateY(0deg) translateZ(12px) translateX(24px) translateY(8px)';
            page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';

            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-331px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-333px) translateY(8px)';
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

        initialX = currentX;
    }

    if (isDragging62) {
        const currentX = e.clientX;
        const deltaX = currentX - initialX;

        page6.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-333px) translateY(8px)';

        mask61.style.transform = 'translate3d(0, 0px, 0px)';
        mask62.style.transform = 'translate3d(0, 0px, 0px)';

        mask61.classList.remove('mask');
        mask62.classList.remove('mask');
        mask61.classList.add('right-mask-side');
        mask62.classList.add('right-mask-side');

        elementPage61.classList.remove('right-flip-side');
        elementPage62.classList.remove('flip-side');
        elementPage61.classList.add('right-side');
        elementPage62.classList.add('right-side');
        elementPage61.style.boxShadow = '20px 0px 30px rgba(40, 40, 40, 0.2)';

        mask61.style.zIndex = 113;
        mask62.style.zIndex = 90;


        // Mettre à jour la distance totale parcourue
        totalDistance += deltaX;

        // Bornes des valeurs
        const maxTranslation = 345; // La valeur maximale de la translation
        const minTranslation = 0;  // La valeur minimale de la translation

        // Limiter la valeur de la transformation en fonction de la distance totale
        let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
        deltaX62 = totalDistance;

        if (deltaX62 > 200) {
            page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';

            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-331px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-333px) translateY(8px)';
        } else {
            page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-333px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-335px) translateY(8px)';
        }


        // Appliquer la transformation aux éléments
        mask61.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
        mask62.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

        elementPage61.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
        elementPage62.style.transform = `translate3d(${-translation}px, 0, 0)`;

        if (translation <= 10) {
            elementPage61.style.opacity = 0;
        } else {
            elementPage61.style.opacity = 1;
        }

        initialX = currentX;
    }

    if (isDragging51) {
        const currentX = e.clientX;
        const deltaX = currentX - initialX;
        page5.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';

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
            //elementPage82.style.transform = 'translate3d(-351px, 0, 0)';
            //elementPage72.style.transform = 'translate3d(-349px, 0, 0)';
            //page1.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
            page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-333px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-335px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-337px) translateY(8px)';
        } else {
            //elementPage82.style.transform = 'translate3d(-349px, 0, 0)';
            //elementPage72.style.transform = 'translate3d(-347px, 0, 0)';
            //elementPage62.style.transform = 'translate3d(-345px, 0, 0)';

            //page1.style.transform = 'rotateY(0deg) translateZ(13px) translateX(22px) translateY(8px)';
            page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';

            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-331px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-333px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-335px) translateY(8px)';
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

        initialX = currentX;
    }

    if (isDragging52) {
        const currentX = e.clientX;
        const deltaX = currentX - initialX;

        page5.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-335px) translateY(8px)';

        mask51.style.transform = 'translate3d(0, 0px, 0px)';
        mask52.style.transform = 'translate3d(0, 0px, 0px)';

        mask51.classList.remove('mask');
        mask52.classList.remove('mask');
        mask51.classList.add('right-mask-side');
        mask52.classList.add('right-mask-side');

        elementPage51.classList.remove('right-flip-side');
        elementPage52.classList.remove('flip-side');
        elementPage51.classList.add('right-side');
        elementPage52.classList.add('right-side');
        elementPage51.style.boxShadow = '20px 0px 30px rgba(40, 40, 40, 0.2)';

        mask51.style.zIndex = 113;
        mask52.style.zIndex = 90;

        // Mettre à jour la distance totale parcourue
        totalDistance += deltaX;

        // Bornes des valeurs
        const maxTranslation = 345; // La valeur maximale de la translation
        const minTranslation = 0;  // La valeur minimale de la translation

        // Limiter la valeur de la transformation en fonction de la distance totale
        let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
        deltaX52 = totalDistance;

        if (deltaX52 > 200) {
            page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';

            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-331px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-333px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-335px) translateY(8px)';
        } else {
            page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-333px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-335px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-337px) translateY(8px)';
        }


        // Appliquer la transformation aux éléments
        mask51.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
        mask52.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

        elementPage51.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
        elementPage52.style.transform = `translate3d(${-translation}px, 0, 0)`;

        if (translation <= 10) {
            elementPage51.style.opacity = 0;
        } else {
            elementPage51.style.opacity = 1;
        }

        initialX = currentX;
    }

    if (isDragging41) {
        const currentX = e.clientX;
        const deltaX = currentX - initialX;
        page4.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';

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
            //elementPage82.style.transform = 'translate3d(-353px, 0, 0)';
            //elementPage72.style.transform = 'translate3d(-351px, 0, 0)';
            //elementPage62.style.transform = 'translate3d(-349px, 0, 0)';
            //elementPage52.style.transform = 'translate3d(-347px, 0, 0)';
            page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

            page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-333px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-335px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-337px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-339px) translateY(8px)';
        } else {
            //elementPage82.style.transform = 'translate3d(-351px, 0, 0)';
            //elementPage72.style.transform = 'translate3d(-349px, 0, 0)';
            //elementPage62.style.transform = 'translate3d(-347px, 0, 0)';
            //elementPage52.style.transform = 'translate3d(-345px, 0, 0)';

            //page1.style.transform = 'rotateY(0deg) translateZ(14px) translateX(20px) translateY(8px)';
            page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';


            page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-331px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-333px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-335px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-337px) translateY(8px)';
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

        initialX = currentX;
    }

    if (isDragging42) {
        const currentX = e.clientX;
        const deltaX = currentX - initialX;

        page4.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-337px) translateY(8px)';

        mask41.style.transform = 'translate3d(0, 0px, 0px)';
        mask42.style.transform = 'translate3d(0, 0px, 0px)';

        mask41.classList.remove('mask');
        mask42.classList.remove('mask');
        mask41.classList.add('right-mask-side');
        mask42.classList.add('right-mask-side');

        elementPage41.classList.remove('right-flip-side');
        elementPage42.classList.remove('flip-side');
        elementPage41.classList.add('right-side');
        elementPage42.classList.add('right-side');
        elementPage41.style.boxShadow = '20px 0px 30px rgba(40, 40, 40, 0.2)';

        mask41.style.zIndex = 113;
        mask42.style.zIndex = 90;

        // Mettre à jour la distance totale parcourue
        totalDistance += deltaX;

        // Bornes des valeurs
        const maxTranslation = 345; // La valeur maximale de la translation
        const minTranslation = 0;  // La valeur minimale de la translation

        // Limiter la valeur de la transformation en fonction de la distance totale
        let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
        deltaX42 = totalDistance;

        if (deltaX42 > 200) {
            page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';


            page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-331px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-333px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-335px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-337px) translateY(8px)';
        } else {
            page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';


            page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-333px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-335px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-337px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-339px) translateY(8px)';
        }


        // Appliquer la transformation aux éléments
        mask41.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
        mask42.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

        elementPage41.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
        elementPage42.style.transform = `translate3d(${-translation}px, 0, 0)`;

        if (translation <= 10) {
            elementPage41.style.opacity = 0;
        } else {
            elementPage41.style.opacity = 1;
        }

        initialX = currentX;
    }

    if (isDragging31) {
        const currentX = e.clientX;
        const deltaX = currentX - initialX;

        page3.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';

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
            //elementPage82.style.transform = 'translate3d(-355px, 0, 0)';
            //elementPage72.style.transform = 'translate3d(-353px, 0, 0)';
            //elementPage62.style.transform = 'translate3d(-351px, 0, 0)';
            //elementPage52.style.transform = 'translate3d(-349px, 0, 0)';
            //elementPage42.style.transform = 'translate3d(-347px, 0, 0)';

            //page1.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
            page2.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

            page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-333px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-335px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-337px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-339px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-341px) translateY(8px)';
        } else {
            //elementPage82.style.transform = 'translate3d(-353px, 0, 0)';
            //elementPage72.style.transform = 'translate3d(-351px, 0, 0)';
            //elementPage62.style.transform = 'translate3d(-349px, 0, 0)';
            //elementPage52.style.transform = 'translate3d(-347px, 0, 0)';
            //elementPage42.style.transform = 'translate3d(-345px, 0, 0)';

            //page1.style.transform = 'rotateY(0deg) translateZ(15px) translateX(18px) translateY(8px)';
            page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';

            page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-331px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-333px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-335px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-337px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-339px) translateY(8px)';
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

        initialX = currentX;
    }

    if (isDragging32) {
        const currentX = e.clientX;
        const deltaX = currentX - initialX;

        page3.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-339px) translateY(8px)';

        mask31.style.transform = 'translate3d(0, 0px, 0px)';
        mask32.style.transform = 'translate3d(0, 0px, 0px)';

        mask31.classList.remove('mask');
        mask32.classList.remove('mask');
        mask31.classList.add('right-mask-side');
        mask32.classList.add('right-mask-side');

        elementPage31.classList.remove('right-flip-side');
        elementPage32.classList.remove('flip-side');
        elementPage31.classList.add('right-side');
        elementPage32.classList.add('right-side');
        elementPage31.style.boxShadow = '20px 0px 30px rgba(40, 40, 40, 0.2)';

        mask31.style.zIndex = 113;
        mask32.style.zIndex = 90;

        // Mettre à jour la distance totale parcourue
        totalDistance += deltaX;

        // Bornes des valeurs
        const maxTranslation = 345; // La valeur maximale de la translation
        const minTranslation = 0;  // La valeur minimale de la translation

        // Limiter la valeur de la transformation en fonction de la distance totale
        let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
        deltaX32 = totalDistance;

        if (deltaX32 > 200) {
            page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';

            page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-331px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-333px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-335px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-337px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-339px) translateY(8px)';
        } else {
            page2.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

            page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-333px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-335px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-327px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-339px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-341px) translateY(8px)';
        }

        // Appliquer la transformation aux éléments
        mask31.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
        mask32.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

        elementPage31.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
        elementPage32.style.transform = `translate3d(${-translation}px, 0, 0)`;

        if (translation <= 10) {
            elementPage31.style.opacity = 0;
        } else {
            elementPage31.style.opacity = 1;
        }

        initialX = currentX;
    }

    if (isDragging21) {
        const currentX = e.clientX;
        const deltaX = currentX - initialX;
        page2.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';

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
            //elementPage32.style.transform = 'translate3d(-347px, 0, 0)';

            //page1.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(-333px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-335px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-337px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-339px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-341px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-343px) translateY(8px)';
        } else {
            //elementPage32.style.transform = 'translate3d(-345px, 0, 0)';

            //page1.style.transform = 'rotateY(0deg) translateZ(16px) translateX(16px) translateY(8px)';
            page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(-331px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-333px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-335px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-337px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-339px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-341px) translateY(8px)';
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

        initialX = currentX;
    }

    if (isDragging22) {
        const currentX = e.clientX;
        const deltaX = currentX - initialX;

        page2.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-341px) translateY(8px)';

        mask21.style.transform = 'translate3d(0, 0px, 0px)';
        mask22.style.transform = 'translate3d(0, 0px, 0px)';

        mask21.classList.remove('mask');
        mask22.classList.remove('mask');
        mask21.classList.add('right-mask-side');
        mask22.classList.add('right-mask-side');

        elementPage21.classList.remove('right-flip-side');
        elementPage22.classList.remove('flip-side');
        elementPage21.classList.add('right-side');
        elementPage22.classList.add('right-side');
        elementPage21.style.boxShadow = '20px 0px 30px rgba(40, 40, 40, 0.2)';

        mask21.style.zIndex = 113;
        mask22.style.zIndex = 90;

        // Mettre à jour la distance totale parcourue
        totalDistance += deltaX;

        // Bornes des valeurs
        const maxTranslation = 345; // La valeur maximale de la translation
        const minTranslation = 0;  // La valeur minimale de la translation

        // Limiter la valeur de la transformation en fonction de la distance totale
        let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
        deltaX22 = totalDistance;

        if (deltaX22 > 200) {
            page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(-331px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-333px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-335px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-337px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-339px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-341px) translateY(8px)';
        } else {
            page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(-333px) translateY(8px)';
            page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-335px) translateY(8px)';
            page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-337px) translateY(8px)';
            page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-339px) translateY(8px)';
            page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-341px) translateY(8px)';
            page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-343px) translateY(8px)';
        }

        // Appliquer la transformation aux éléments
        mask21.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
        mask22.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

        elementPage21.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
        elementPage22.style.transform = `translate3d(${-translation}px, 0, 0)`;

        if (translation <= 10) {
            elementPage21.style.opacity = 0;
        } else {
            elementPage21.style.opacity = 1;
        }

        initialX = currentX;
    }
})

    document.addEventListener('touchmove', (e) => {
        if (isDragging81) {
            const currentX = e.touches[0].clientX;
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
    
            initialX = currentX;
        }
    
        if (isDragging82) {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - initialX;
    
            page8.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-329px) translateY(8px)';
    
            mask81.style.transform = 'translate3d(0, 0px, 0px)';
            mask82.style.transform = 'translate3d(0, 0px, 0px)';
    
            mask81.classList.remove('mask');
            mask82.classList.remove('mask');
            mask81.classList.add('right-mask-side');
            mask82.classList.add('right-mask-side');
    
            elementPage81.classList.remove('right-flip-side');
            elementPage82.classList.remove('flip-side');
            elementPage81.classList.add('right-side');
            elementPage82.classList.add('right-side');
            elementPage81.style.boxShadow = '20px 0px 30px rgba(40, 40, 40, 0.2)';
    
            mask81.style.zIndex = 113;
            mask82.style.zIndex = 90;
    
            // Mettre à jour la distance totale parcourue
            totalDistance += deltaX;
    
            // Bornes des valeurs
            const maxTranslation = 345; // La valeur maximale de la translation
            const minTranslation = 0;  // La valeur minimale de la translation
    
            // Limiter la valeur de la transformation en fonction de la distance totale
            let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
            deltaX82 = totalDistance;
    
            if (deltaX82 > 145) {
                //page1.style.transform = 'rotateY(0deg) translateZ(10px) translateX(28px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
            } else {
                //page1.style.transform = 'rotateY(0deg) translateZ(10px) translateX(26px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
            }
    
            // Appliquer la transformation aux éléments
            mask81.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
            mask82.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;
    
            elementPage81.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
            elementPage82.style.transform = `translate3d(${-translation}px, 0, 0)`;
    
    
            if (translation <= 10) {
                elementPage81.style.opacity = 0;
            } else {
                elementPage81.style.opacity = 1;
            }
    
            initialX = currentX;
        }
    
    
        if (isDragging71) {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - initialX;
            page7.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';
    
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
                //elementPage82.style.transform = 'translate3d(-347px, 0, 0)';
                //page1.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
                page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
    
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-333px) translateY(8px)';
            } else {
                //elementPage82.style.transform = 'translate3d(-345px, 0, 0)';
                //page1.style.transform = 'rotateY(0deg) translateZ(11px) translateX(26px) translateY(8px)';
                page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
    
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-331px) translateY(8px)';
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
    
            initialX = currentX;
        }
    
        if (isDragging72) {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - initialX;
            page7.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-331px) translateY(8px)';
    
            mask71.style.transform = 'translate3d(0, 0px, 0px)';
            mask72.style.transform = 'translate3d(0, 0px, 0px)';
    
            mask71.classList.remove('mask');
            mask72.classList.remove('mask');
            mask71.classList.add('right-mask-side');
            mask72.classList.add('right-mask-side');
    
            elementPage71.classList.remove('right-flip-side');
            elementPage72.classList.remove('flip-side');
            elementPage71.classList.add('right-side');
            elementPage72.classList.add('right-side');
            elementPage71.style.boxShadow = '20px 0px 30px rgba(40, 40, 40, 0.2)';
    
            mask71.style.zIndex = 113;
            mask72.style.zIndex = 90;
    
            // Mettre à jour la distance totale parcourue
            totalDistance += deltaX;
    
            // Bornes des valeurs
            const maxTranslation = 345; // La valeur maximale de la translation
            const minTranslation = 0;  // La valeur minimale de la translation
    
            // Limiter la valeur de la transformation en fonction de la distance totale
            let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
            deltaX72 = totalDistance;
    
            if (deltaX72 > 200) {
                page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
    
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-331px) translateY(8px)';
            } else {
                page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
    
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-333px) translateY(8px)';
            }
    
    
            // Appliquer la transformation aux éléments
            mask71.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
            mask72.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;
    
            elementPage71.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
            elementPage72.style.transform = `translate3d(${-translation}px, 0, 0)`;
            if (translation <= 10) {
                elementPage71.style.opacity = 0;
            } else {
                elementPage71.style.opacity = 1;
            }
    
            initialX = currentX;
        }
    
        if (isDragging61) {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - initialX;
            page6.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';
    
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
                //elementPage82.style.transform = 'translate3d(-349px, 0, 0)';
                //elementPage72.style.transform = 'translate3d(-347px, 0, 0)';
                //page1.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
    
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-333px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-335px) translateY(8px)';
            } else {
                //elementPage82.style.transform = 'translate3d(-347px, 0, 0)';
                //elementPage72.style.transform = 'translate3d(-345px, 0, 0)';
                //page1.style.transform = 'rotateY(0deg) translateZ(12px) translateX(24px) translateY(8px)';
                page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
    
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-331px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-333px) translateY(8px)';
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
    
            initialX = currentX;
        }
    
        if (isDragging62) {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - initialX;
    
            page6.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-333px) translateY(8px)';
    
            mask61.style.transform = 'translate3d(0, 0px, 0px)';
            mask62.style.transform = 'translate3d(0, 0px, 0px)';
    
            mask61.classList.remove('mask');
            mask62.classList.remove('mask');
            mask61.classList.add('right-mask-side');
            mask62.classList.add('right-mask-side');
    
            elementPage61.classList.remove('right-flip-side');
            elementPage62.classList.remove('flip-side');
            elementPage61.classList.add('right-side');
            elementPage62.classList.add('right-side');
            elementPage61.style.boxShadow = '20px 0px 30px rgba(40, 40, 40, 0.2)';
    
            mask61.style.zIndex = 113;
            mask62.style.zIndex = 90;
    
    
            // Mettre à jour la distance totale parcourue
            totalDistance += deltaX;
    
            // Bornes des valeurs
            const maxTranslation = 345; // La valeur maximale de la translation
            const minTranslation = 0;  // La valeur minimale de la translation
    
            // Limiter la valeur de la transformation en fonction de la distance totale
            let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
            deltaX62 = totalDistance;
    
            if (deltaX62 > 200) {
                page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
    
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-331px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-333px) translateY(8px)';
            } else {
                page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
    
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-333px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-335px) translateY(8px)';
            }
    
    
            // Appliquer la transformation aux éléments
            mask61.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
            mask62.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;
    
            elementPage61.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
            elementPage62.style.transform = `translate3d(${-translation}px, 0, 0)`;
    
            if (translation <= 10) {
                elementPage61.style.opacity = 0;
            } else {
                elementPage61.style.opacity = 1;
            }
    
            initialX = currentX;
        }
    
        if (isDragging51) {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - initialX;
            page5.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';
    
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
                //elementPage82.style.transform = 'translate3d(-351px, 0, 0)';
                //elementPage72.style.transform = 'translate3d(-349px, 0, 0)';
                //page1.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
    
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-333px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-335px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-337px) translateY(8px)';
            } else {
                //elementPage82.style.transform = 'translate3d(-349px, 0, 0)';
                //elementPage72.style.transform = 'translate3d(-347px, 0, 0)';
                //elementPage62.style.transform = 'translate3d(-345px, 0, 0)';
    
                //page1.style.transform = 'rotateY(0deg) translateZ(13px) translateX(22px) translateY(8px)';
                page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
    
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-331px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-333px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-335px) translateY(8px)';
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
    
            initialX = currentX;
        }
    
        if (isDragging52) {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - initialX;
    
            page5.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-335px) translateY(8px)';
    
            mask51.style.transform = 'translate3d(0, 0px, 0px)';
            mask52.style.transform = 'translate3d(0, 0px, 0px)';
    
            mask51.classList.remove('mask');
            mask52.classList.remove('mask');
            mask51.classList.add('right-mask-side');
            mask52.classList.add('right-mask-side');
    
            elementPage51.classList.remove('right-flip-side');
            elementPage52.classList.remove('flip-side');
            elementPage51.classList.add('right-side');
            elementPage52.classList.add('right-side');
            elementPage51.style.boxShadow = '20px 0px 30px rgba(40, 40, 40, 0.2)';
    
            mask51.style.zIndex = 113;
            mask52.style.zIndex = 90;
    
            // Mettre à jour la distance totale parcourue
            totalDistance += deltaX;
    
            // Bornes des valeurs
            const maxTranslation = 345; // La valeur maximale de la translation
            const minTranslation = 0;  // La valeur minimale de la translation
    
            // Limiter la valeur de la transformation en fonction de la distance totale
            let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
            deltaX52 = totalDistance;
    
            if (deltaX52 > 200) {
                page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
    
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-331px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-333px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-335px) translateY(8px)';
            } else {
                page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
    
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-333px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-335px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-337px) translateY(8px)';
            }
    
    
            // Appliquer la transformation aux éléments
            mask51.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
            mask52.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;
    
            elementPage51.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
            elementPage52.style.transform = `translate3d(${-translation}px, 0, 0)`;
    
            if (translation <= 10) {
                elementPage51.style.opacity = 0;
            } else {
                elementPage51.style.opacity = 1;
            }
    
            initialX = currentX;
        }
    
        if (isDragging41) {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - initialX;
            page4.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';
    
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
                //elementPage82.style.transform = 'translate3d(-353px, 0, 0)';
                //elementPage72.style.transform = 'translate3d(-351px, 0, 0)';
                //elementPage62.style.transform = 'translate3d(-349px, 0, 0)';
                //elementPage52.style.transform = 'translate3d(-347px, 0, 0)';
                page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
    
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-333px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-335px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-337px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-339px) translateY(8px)';
            } else {
                //elementPage82.style.transform = 'translate3d(-351px, 0, 0)';
                //elementPage72.style.transform = 'translate3d(-349px, 0, 0)';
                //elementPage62.style.transform = 'translate3d(-347px, 0, 0)';
                //elementPage52.style.transform = 'translate3d(-345px, 0, 0)';
    
                //page1.style.transform = 'rotateY(0deg) translateZ(14px) translateX(20px) translateY(8px)';
                page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
    
    
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-331px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-333px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-335px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-337px) translateY(8px)';
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
    
            initialX = currentX;
        }
    
        if (isDragging42) {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - initialX;
    
            page4.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-337px) translateY(8px)';
    
            mask41.style.transform = 'translate3d(0, 0px, 0px)';
            mask42.style.transform = 'translate3d(0, 0px, 0px)';
    
            mask41.classList.remove('mask');
            mask42.classList.remove('mask');
            mask41.classList.add('right-mask-side');
            mask42.classList.add('right-mask-side');
    
            elementPage41.classList.remove('right-flip-side');
            elementPage42.classList.remove('flip-side');
            elementPage41.classList.add('right-side');
            elementPage42.classList.add('right-side');
            elementPage41.style.boxShadow = '20px 0px 30px rgba(40, 40, 40, 0.2)';
    
            mask41.style.zIndex = 113;
            mask42.style.zIndex = 90;
    
            // Mettre à jour la distance totale parcourue
            totalDistance += deltaX;
    
            // Bornes des valeurs
            const maxTranslation = 345; // La valeur maximale de la translation
            const minTranslation = 0;  // La valeur minimale de la translation
    
            // Limiter la valeur de la transformation en fonction de la distance totale
            let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
            deltaX42 = totalDistance;
    
            if (deltaX42 > 200) {
                page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
    
    
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-331px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-333px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-335px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-337px) translateY(8px)';
            } else {
                page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
    
    
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-333px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-335px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-337px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-339px) translateY(8px)';
            }
    
    
            // Appliquer la transformation aux éléments
            mask41.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
            mask42.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;
    
            elementPage41.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
            elementPage42.style.transform = `translate3d(${-translation}px, 0, 0)`;
    
            if (translation <= 10) {
                elementPage41.style.opacity = 0;
            } else {
                elementPage41.style.opacity = 1;
            }
    
            initialX = currentX;
        }
    
        if (isDragging31) {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - initialX;
    
            page3.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';
    
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
                //elementPage82.style.transform = 'translate3d(-355px, 0, 0)';
                //elementPage72.style.transform = 'translate3d(-353px, 0, 0)';
                //elementPage62.style.transform = 'translate3d(-351px, 0, 0)';
                //elementPage52.style.transform = 'translate3d(-349px, 0, 0)';
                //elementPage42.style.transform = 'translate3d(-347px, 0, 0)';
    
                //page1.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page2.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
    
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-333px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-335px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-337px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-339px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-341px) translateY(8px)';
            } else {
                //elementPage82.style.transform = 'translate3d(-353px, 0, 0)';
                //elementPage72.style.transform = 'translate3d(-351px, 0, 0)';
                //elementPage62.style.transform = 'translate3d(-349px, 0, 0)';
                //elementPage52.style.transform = 'translate3d(-347px, 0, 0)';
                //elementPage42.style.transform = 'translate3d(-345px, 0, 0)';
    
                //page1.style.transform = 'rotateY(0deg) translateZ(15px) translateX(18px) translateY(8px)';
                page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
    
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-331px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-333px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-335px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-337px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-339px) translateY(8px)';
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
    
            initialX = currentX;
        }
    
        if (isDragging32) {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - initialX;
    
            page3.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-339px) translateY(8px)';
    
            mask31.style.transform = 'translate3d(0, 0px, 0px)';
            mask32.style.transform = 'translate3d(0, 0px, 0px)';
    
            mask31.classList.remove('mask');
            mask32.classList.remove('mask');
            mask31.classList.add('right-mask-side');
            mask32.classList.add('right-mask-side');
    
            elementPage31.classList.remove('right-flip-side');
            elementPage32.classList.remove('flip-side');
            elementPage31.classList.add('right-side');
            elementPage32.classList.add('right-side');
            elementPage31.style.boxShadow = '20px 0px 30px rgba(40, 40, 40, 0.2)';
    
            mask31.style.zIndex = 113;
            mask32.style.zIndex = 90;
    
            // Mettre à jour la distance totale parcourue
            totalDistance += deltaX;
    
            // Bornes des valeurs
            const maxTranslation = 345; // La valeur maximale de la translation
            const minTranslation = 0;  // La valeur minimale de la translation
    
            // Limiter la valeur de la transformation en fonction de la distance totale
            let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
            deltaX32 = totalDistance;
    
            if (deltaX32 > 200) {
                page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
    
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-331px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-333px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-335px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-337px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-339px) translateY(8px)';
            } else {
                page2.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
    
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-333px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-335px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-327px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-339px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-341px) translateY(8px)';
            }
    
            // Appliquer la transformation aux éléments
            mask31.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
            mask32.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;
    
            elementPage31.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
            elementPage32.style.transform = `translate3d(${-translation}px, 0, 0)`;
    
            if (translation <= 10) {
                elementPage31.style.opacity = 0;
            } else {
                elementPage31.style.opacity = 1;
            }
    
            initialX = currentX;
        }
    
        if (isDragging21) {
            console.log('Bonjour')
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - initialX;

            page2.style.transform = 'rotateY(0deg) translateZ(18px) translateX(14px) translateY(8px)';
    
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
                //elementPage32.style.transform = 'translate3d(-347px, 0, 0)';
    
                //page1.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(16px) translateX(-333px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-335px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-337px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-339px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-341px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-343px) translateY(8px)';
            } else {
                //elementPage32.style.transform = 'translate3d(-345px, 0, 0)';
    
                //page1.style.transform = 'rotateY(0deg) translateZ(16px) translateX(16px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(-331px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-333px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-335px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-337px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-339px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-341px) translateY(8px)';
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
    
            initialX = currentX;
        }
    
        if (isDragging22) {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - initialX;
    
            page2.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-341px) translateY(8px)';
    
            mask21.style.transform = 'translate3d(0, 0px, 0px)';
            mask22.style.transform = 'translate3d(0, 0px, 0px)';
    
            mask21.classList.remove('mask');
            mask22.classList.remove('mask');
            mask21.classList.add('right-mask-side');
            mask22.classList.add('right-mask-side');
    
            elementPage21.classList.remove('right-flip-side');
            elementPage22.classList.remove('flip-side');
            elementPage21.classList.add('right-side');
            elementPage22.classList.add('right-side');
            elementPage21.style.boxShadow = '20px 0px 30px rgba(40, 40, 40, 0.2)';
    
            mask21.style.zIndex = 113;
            mask22.style.zIndex = 90;
    
            // Mettre à jour la distance totale parcourue
            totalDistance += deltaX;
    
            // Bornes des valeurs
            const maxTranslation = 345; // La valeur maximale de la translation
            const minTranslation = 0;  // La valeur minimale de la translation
    
            // Limiter la valeur de la transformation en fonction de la distance totale
            let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));
            deltaX22 = totalDistance;
    
            if (deltaX22 > 200) {
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(-331px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-333px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-335px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-337px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-339px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-341px) translateY(8px)';
            } else {
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(-333px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-335px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-337px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-339px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-341px) translateY(8px)';
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-343px) translateY(8px)';
            }
    
            // Appliquer la transformation aux éléments
            mask21.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
            mask22.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;
    
            elementPage21.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
            elementPage22.style.transform = `translate3d(${-translation}px, 0, 0)`;
    
            if (translation <= 10) {
                elementPage21.style.opacity = 0;
            } else {
                elementPage21.style.opacity = 1;
            }
    
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
    if (isDragging81 && mousemove81 && elementPage81.classList.contains('right-flip-side')) {
        isDragging81 = false;
        mousemove81 = false;
        if (deltaX81 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask81.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask82.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage81.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage82.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    //page1.style.transform = 'rotateY(0deg) translateZ(10px) translateX(26px) translateY(8px)';
                    page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                    page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                    page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                }

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre71.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage82.style.zIndex = 1;
                    elementPage81.style.zIndex = 10;
                    mask82.style.zIndex = 1;
                    mask81.style.zIndex = 10;
                    page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-331px) translateY(8px)';
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
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask81.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask82.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage81.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage82.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(26px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(24px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(22px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(20px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(18px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(16px) translateY(8px)';


                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    mask81.classList.add('right-mask-side');
                    mask82.classList.add('right-mask-side');
                    mask81.classList.remove('mask');
                    mask82.classList.remove('mask');


                    elementPage81.classList.add('right-side');
                    elementPage82.classList.add('right-side');
                    elementPage81.classList.remove('right-flip-side');
                    elementPage82.classList.remove('flip-side');
                    mask81.style.transform = `translate3d(0px, 0, 0)`;
                    mask82.style.transform = `translate3d(0px, 0, 0)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask82.style.zIndex = 1;
                    mask81.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }
    } else if (isDragging81 && mousemove81 && elementPage81.classList.contains('right-side')) {
        isDragging81 = false;
        mousemove81 = false;
    }

    if (isDragging82 && mousemove82 && elementPage82.classList.contains('right-side')) {
        isDragging82 = false;
        mousemove82 = false;
        if (deltaX82 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask81.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask82.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage81.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage82.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre71.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage82.style.zIndex = 1;
                    elementPage81.style.zIndex = 10;
                    mask82.style.zIndex = 1;
                    mask81.style.zIndex = 10;
                    page8.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';
                    mask81.style.transform = 'translate3d(0px, 0, 0) translateX(0px)';
                    elementPage81.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage82.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-331px) translateY(8px)';

                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask81.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask82.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage81.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage82.style.transform = `translate3d(${-translation}px, 0, 0)`;


                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= 0) {
                    mask81.classList.remove('mask');
                    mask82.classList.remove('mask');
                    mask81.classList.add('right-mask-side');
                    mask82.classList.add('right-mask-side');

                    elementPage81.classList.remove('right-flip-side');
                    elementPage82.classList.remove('flip-side');
                    elementPage81.classList.add('right-side');
                    elementPage82.classList.add('right-side');
                    mask81.style.transform = `translate3d(0px, 0, 0)`;
                    mask82.style.transform = `translate3d(10px, 0px, 0px)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask82.style.zIndex = 10;
                    mask81.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue         
                }
            }, 10);
        }
    } else if (isDragging82 && mousemove82 && elementPage82.classList.contains('right-flip-side')) {
        isDragging82 = false;
        mousemove82 = false;
    }

    if (isDragging71 && mousemove71 && elementPage71.classList.contains('right-flip-side')) {
        isDragging71 = false;
        mousemove71 = false;
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
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask71.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask72.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage71.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage72.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    //elementPage82.style.transform = 'translate3d(-347px, 0, 0)';
                    //page1.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
                    page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                    page6.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                }

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
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask71.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask72.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage71.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage72.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)'

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    mask71.classList.add('right-mask-side');
                    mask72.classList.add('right-mask-side');
                    mask71.classList.remove('mask');
                    mask72.classList.remove('mask');


                    elementPage71.classList.add('right-side');
                    elementPage72.classList.add('right-side');
                    elementPage71.classList.remove('right-flip-side');
                    elementPage72.classList.remove('flip-side');
                    mask71.style.transform = `translate3d(0px, 0, 0)`;
                    mask72.style.transform = `translate3d(0px, 0, 0)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask72.style.zIndex = 1;
                    mask71.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }

    } else if (isDragging71 && mousemove71 && elementPage71.classList.contains('right-side')) {
        isDragging71 = false;
        mousemove71 = false;
    }

    if (isDragging72 && mousemove72 && elementPage72.classList.contains('right-side')) {
        isDragging72 = false;
        mousemove72 = false;
        if (deltaX72 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask71.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask72.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage71.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage72.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 300) {

                    page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                    page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                }

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre61.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage72.style.zIndex = 1;
                    elementPage71.style.zIndex = 10;
                    mask72.style.zIndex = 1;
                    mask71.style.zIndex = 10;
                    page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                    mask71.style.transform = 'translate3d(0px, 0, 0) translateX(0px)';
                    elementPage71.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage72.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';


                }
            }, 10);
        } else {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-331px) translateY(8px)';

                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask71.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask72.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage71.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage72.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= 0) {
                    mask71.classList.remove('mask');
                    mask72.classList.remove('mask');
                    mask71.classList.add('right-mask-side');
                    mask72.classList.add('right-mask-side');

                    elementPage71.classList.remove('right-flip-side');
                    elementPage72.classList.remove('flip-side');
                    elementPage71.classList.add('right-side');
                    elementPage72.classList.add('right-side');
                    mask71.style.transform = `translate3d(0px, 0, 0)`;
                    mask72.style.transform = `translate3d(10px, 0px, 0px)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask72.style.zIndex = 10;
                    mask71.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue   
                }
            }, 10);
        }
    } else if (isDragging72 && mousemove72 && elementPage72.classList.contains('right-flip-side')) {
        isDragging72 = false;
        mousemove72 = false;
    }


    if (isDragging61 && mousemove61 && elementPage61.classList.contains('right-flip-side')) {
        isDragging61 = false;
        mousemove61 = false;
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
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask61.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask62.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage61.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage62.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    //elementPage82.style.transform = 'translate3d(-349px, 0, 0)';
                    //elementPage72.style.transform = 'translate3d(-347px, 0, 0)';
                    //page1.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                    page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                    page5.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                }

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
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask61.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask62.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage61.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage62.style.transform = `translate3d(${-translation}px, 0, 0)`;


                page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)'

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    mask61.classList.add('right-mask-side');
                    mask62.classList.add('right-mask-side');
                    mask61.classList.remove('mask');
                    mask62.classList.remove('mask');


                    elementPage61.classList.add('right-side');
                    elementPage62.classList.add('right-side');
                    elementPage61.classList.remove('right-flip-side');
                    elementPage62.classList.remove('flip-side');
                    mask61.style.transform = `translate3d(0px, 0, 0)`;
                    mask62.style.transform = `translate3d(0px, 0, 0)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask62.style.zIndex = 1;
                    mask61.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }

    } else if (isDragging61 && mousemove61 && elementPage61.classList.contains('right-side')) {
        isDragging61 = false;
        mousemove61 = false;
    }

    if (isDragging62 && mousemove62 && elementPage62.classList.contains('right-side')) {
        isDragging62 = false;
        mousemove62 = false;
        if (deltaX62 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask61.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask62.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage61.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage62.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                }

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre61.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage62.style.zIndex = 1;
                    elementPage61.style.zIndex = 10;
                    mask62.style.zIndex = 1;
                    mask61.style.zIndex = 10;
                    page6.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                    mask61.style.transform = 'translate3d(0px, 0, 0) translateX(0px)';
                    elementPage61.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage62.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-331px) translateY(8px)';

                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask61.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask62.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage61.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage62.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= 0) {
                    mask61.classList.remove('mask');
                    mask62.classList.remove('mask');
                    mask61.classList.add('right-mask-side');
                    mask62.classList.add('right-mask-side');

                    elementPage61.classList.remove('right-flip-side');
                    elementPage62.classList.remove('flip-side');
                    elementPage61.classList.add('right-side');
                    elementPage62.classList.add('right-side');
                    mask61.style.transform = `translate3d(0px, 0, 0)`;
                    mask62.style.transform = `translate3d(10px, 0px, 0px)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask62.style.zIndex = 10;
                    mask61.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue  
                }
            }, 10);
        }
    } else if (isDragging62 && mousemove62 && elementPage62.classList.contains('right-flip-side')) {
        isDragging62 = false;
        mousemove62 = false;
    }

    if (isDragging51 && mousemove51 && elementPage51.classList.contains('right-flip-side')) {
        isDragging51 = false;
        mousemove51 = false;
        if (deltaX51 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask51.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask52.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage51.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage52.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    //elementPage82.style.transform = 'translate3d(-351px, 0, 0)';
                    //elementPage72.style.transform = 'translate3d(-349px, 0, 0)';
                    //elementPage62.style.transform = 'translate3d(-347px, 0, 0)';

                    //page1.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                    page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                }

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
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask51.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask52.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage51.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage52.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    mask51.classList.add('right-mask-side');
                    mask52.classList.add('right-mask-side');
                    mask51.classList.remove('mask');
                    mask52.classList.remove('mask');


                    elementPage51.classList.add('right-side');
                    elementPage52.classList.add('right-side');
                    elementPage51.classList.remove('right-flip-side');
                    elementPage52.classList.remove('flip-side');
                    mask51.style.transform = `translate3d(0px, 0, 0)`;
                    mask52.style.transform = `translate3d(0px, 0, 0)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask52.style.zIndex = 1;
                    mask51.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }
    } else if (isDragging51 && mousemove51 && elementPage51.classList.contains('right-side')) {
        isDragging51 = false;
        mousemove51 = false;
    }

    if (isDragging52 && mousemove52 && elementPage52.classList.contains('right-side')) {
        isDragging52 = false;
        mousemove52 = false;
        if (deltaX52 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask51.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask52.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage51.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage52.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                }

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre61.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage52.style.zIndex = 1;
                    elementPage51.style.zIndex = 10;
                    mask52.style.zIndex = 1;
                    mask51.style.zIndex = 10;
                    page5.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                    mask51.style.transform = 'translate3d(0px, 0, 0) translateX(0px)';
                    elementPage51.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage52.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-331px) translateY(8px)';

                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask51.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask52.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage51.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage52.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= 0) {
                    mask51.classList.remove('mask');
                    mask52.classList.remove('mask');
                    mask51.classList.add('right-mask-side');
                    mask62.classList.add('right-mask-side');

                    elementPage51.classList.remove('right-flip-side');
                    elementPage52.classList.remove('flip-side');
                    elementPage51.classList.add('right-side');
                    elementPage52.classList.add('right-side');
                    mask51.style.transform = `translate3d(0px, 0, 0)`;
                    mask52.style.transform = `translate3d(10px, 0px, 0px)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask52.style.zIndex = 10;
                    mask51.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue        
                }
            }, 10);
        }
    } else if (isDragging52 && mousemove52 && elementPage52.classList.contains('right-flip-side')) {
        isDragging52 = false;
        mousemove52 = false;
    }

    if (isDragging41 && mousemove41 && elementPage41.classList.contains('right-flip-side')) {
        isDragging41 = false;
        mousemove41 = false;
        if (deltaX41 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask41.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask42.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage41.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage42.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    //elementPage82.style.transform = 'translate3d(-353px, 0, 0)';
                    //elementPage72.style.transform = 'translate3d(-351px, 0, 0)';
                    //elementPage62.style.transform = 'translate3d(-349px, 0, 0)';
                    //elementPage52.style.transform = 'translate3d(-347px, 0, 0)';
                    page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                }

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
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask41.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask42.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage41.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage42.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    mask41.classList.add('right-mask-side');
                    mask42.classList.add('right-mask-side');
                    mask41.classList.remove('mask');
                    mask42.classList.remove('mask');


                    elementPage41.classList.add('right-side');
                    elementPage42.classList.add('right-side');
                    elementPage41.classList.remove('right-flip-side');
                    elementPage42.classList.remove('flip-side');
                    mask41.style.transform = `translate3d(0px, 0, 0)`;
                    mask42.style.transform = `translate3d(0px, 0, 0)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask42.style.zIndex = 1;
                    mask41.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }



    } else if (isDragging41 && mousemove41 && elementPage41.classList.contains('right-side')) {
        isDragging41 = false;
        mousemove41 = false;
    }

    if (isDragging42 && mousemove42 && elementPage42.classList.contains('right-side')) {
        isDragging42 = false;
        mousemove42 = false;
        if (deltaX42 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask41.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask42.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage41.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage42.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                }

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre61.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage42.style.zIndex = 1;
                    elementPage41.style.zIndex = 10;
                    mask42.style.zIndex = 1;
                    mask41.style.zIndex = 10;
                    page4.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                    mask41.style.transform = 'translate3d(0px, 0, 0) translateX(0px)';
                    elementPage41.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage42.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-331px) translateY(8px)';

                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask41.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask42.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage41.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage42.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= 0) {
                    mask41.classList.remove('mask');
                    mask42.classList.remove('mask');
                    mask41.classList.add('right-mask-side');
                    mask42.classList.add('right-mask-side');

                    elementPage41.classList.remove('right-flip-side');
                    elementPage42.classList.remove('flip-side');
                    elementPage41.classList.add('right-side');
                    elementPage42.classList.add('right-side');
                    mask41.style.transform = `translate3d(0px, 0, 0)`;
                    mask42.style.transform = `translate3d(10px, 0px, 0px)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask42.style.zIndex = 10;
                    mask41.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue         
                }
            }, 10);
        }
    } else if (isDragging42 && mousemove42 && elementPage42.classList.contains('right-flip-side')) {
        isDragging42 = false;
        mousemove42 = false;
    }

    if (isDragging31 && mousemove31 && elementPage31.classList.contains('right-flip-side')) {
        isDragging31 = false;
        mousemove31 = false;
        if (deltaX31 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask31.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask32.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage31.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage32.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    //page1.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                    page2.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                }
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
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask31.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask32.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage31.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage32.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(15px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    mask31.classList.add('right-mask-side');
                    mask32.classList.add('right-mask-side');
                    mask31.classList.remove('mask');
                    mask32.classList.remove('mask');


                    elementPage31.classList.add('right-side');
                    elementPage32.classList.add('right-side');
                    elementPage31.classList.remove('right-flip-side');
                    elementPage32.classList.remove('flip-side');
                    mask31.style.transform = `translate3d(0px, 0, 0)`;
                    mask32.style.transform = `translate3d(0px, 0, 0)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask32.style.zIndex = 1;
                    mask31.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }

    } else if (isDragging31 && mousemove31 && elementPage31.classList.contains('right-side')) {
        isDragging31 = false;
        mousemove31 = false;
    }

    if (isDragging32 && mousemove32 && elementPage32.classList.contains('right-side')) {
        isDragging32 = false;
        mousemove32 = false;
        if (deltaX32 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask31.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask32.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage31.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage32.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                }

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre61.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage32.style.zIndex = 1;
                    elementPage31.style.zIndex = 10;
                    mask32.style.zIndex = 1;
                    mask31.style.zIndex = 10;
                    page3.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                    mask31.style.transform = 'translate3d(0px, 0, 0) translateX(0px)';
                    elementPage31.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage32.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(-331px) translateY(8px)';

                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask31.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask32.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage31.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage32.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= 0) {
                    mask31.classList.remove('mask');
                    mask32.classList.remove('mask');
                    mask31.classList.add('right-mask-side');
                    mask32.classList.add('right-mask-side');

                    elementPage31.classList.remove('right-flip-side');
                    elementPage32.classList.remove('flip-side');
                    elementPage31.classList.add('right-side');
                    elementPage32.classList.add('right-side');
                    mask31.style.transform = `translate3d(0px, 0, 0)`;
                    mask32.style.transform = `translate3d(10px, 0px, 0px)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask32.style.zIndex = 10;
                    mask31.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue
                }
            }, 10);
        }
    } else if (isDragging32 && mousemove32 && elementPage32.classList.contains('right-flip-side')) {
        isDragging32 = false;
        mousemove32 = false;
    }

    if (isDragging21 && mousemove21 && elementPage21.classList.contains('right-flip-side')) {
        isDragging21 = false;
        mousemove21 = false;
        if (deltaX21 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask21.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask22.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage21.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage22.style.transform = `translate3d(${-translation}px, 0, 0)`;


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
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask21.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask22.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage21.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage22.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    mask21.classList.add('right-mask-side');
                    mask22.classList.add('right-mask-side');
                    mask21.classList.remove('mask');
                    mask22.classList.remove('mask');


                    elementPage21.classList.add('right-side');
                    elementPage22.classList.add('right-side');
                    elementPage21.classList.remove('right-flip-side');
                    elementPage22.classList.remove('flip-side');
                    mask21.style.transform = `translate3d(0px, 0, 0)`;
                    mask22.style.transform = `translate3d(0px, 0, 0)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask22.style.zIndex = 1;
                    mask21.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 15);
        }
    } else if (isDragging21 && mousemove21 && elementPage21.classList.contains('right-side')) {
        isDragging21 = false;
        mousemove21 = false;
    }

    if (isDragging22 && mousemove22 && elementPage22.classList.contains('right-side')) {
        isDragging22 = false;
        mousemove22 = false;
        if (deltaX22 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask21.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask22.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage21.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage22.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    page8.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-331px) translateY(8px)';
                    page7.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-331px) translateY(8px)';
                    page6.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-331px) translateY(8px)';
                    page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-331px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(-331px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-331px) translateY(8px)';
                }

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre61.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage22.style.zIndex = 1;
                    elementPage21.style.zIndex = 10;
                    mask22.style.zIndex = 1;
                    mask21.style.zIndex = 10;
                    page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(14px) translateY(8px)';
                    mask21.style.transform = 'translate3d(0px, 0, 0) translateX(0px)';
                    elementPage21.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage22.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                page2.style.transform = 'rotateY(0deg) translateZ(16px) translateX(-331px) translateY(8px)';

                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask21.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask22.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage21.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage22.style.transform = `translate3d(${-translation}px, 0, 0)`;


                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-331px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-331px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-331px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-331px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-331px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(-331px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= 0) {
                    mask21.classList.remove('mask');
                    mask22.classList.remove('mask');
                    mask21.classList.add('right-mask-side');
                    mask22.classList.add('right-mask-side');

                    elementPage21.classList.remove('right-flip-side');
                    elementPage22.classList.remove('flip-side');
                    elementPage21.classList.add('right-side');
                    elementPage22.classList.add('right-side');
                    mask21.style.transform = `translate3d(0px, 0, 0)`;
                    mask22.style.transform = `translate3d(10px, 0px, 0px)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask22.style.zIndex = 10;
                    mask21.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue     
                }
            }, 10);
        }
    } else if (isDragging22 && mousemove22 && elementPage22.classList.contains('right-flip-side')) {
        isDragging22 = false;
        mousemove22 = false;
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

document.addEventListener('touchend', () => {
    if (isDragging81 && mousemove81 && elementPage81.classList.contains('right-flip-side')) {
        isDragging81 = false;
        mousemove81 = false;
        if (deltaX81 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask81.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask82.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage81.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage82.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    //page1.style.transform = 'rotateY(0deg) translateZ(10px) translateX(26px) translateY(8px)';
                    page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                    page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                    page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                }

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre71.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage82.style.zIndex = 1;
                    elementPage81.style.zIndex = 10;
                    mask82.style.zIndex = 1;
                    mask81.style.zIndex = 10;
                    page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-331px) translateY(8px)';
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
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask81.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask82.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage81.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage82.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(26px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(24px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(22px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(20px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(18px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(16px) translateY(8px)';


                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    mask81.classList.add('right-mask-side');
                    mask82.classList.add('right-mask-side');
                    mask81.classList.remove('mask');
                    mask82.classList.remove('mask');


                    elementPage81.classList.add('right-side');
                    elementPage82.classList.add('right-side');
                    elementPage81.classList.remove('right-flip-side');
                    elementPage82.classList.remove('flip-side');
                    mask81.style.transform = `translate3d(0px, 0, 0)`;
                    mask82.style.transform = `translate3d(0px, 0, 0)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask82.style.zIndex = 1;
                    mask81.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }
    } else if (isDragging81 && mousemove81 && elementPage81.classList.contains('right-side')) {
        isDragging81 = false;
        mousemove81 = false;
    }

    if (isDragging82 && mousemove82 && elementPage82.classList.contains('right-side')) {
        isDragging82 = false;
        mousemove82 = false;
        if (deltaX82 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask81.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask82.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage81.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage82.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre71.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage82.style.zIndex = 1;
                    elementPage81.style.zIndex = 10;
                    mask82.style.zIndex = 1;
                    mask81.style.zIndex = 10;
                    page8.style.transform = 'rotateY(0deg) translateZ(17px) translateX(14px) translateY(8px)';
                    mask81.style.transform = 'translate3d(0px, 0, 0) translateX(0px)';
                    elementPage81.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage82.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-331px) translateY(8px)';

                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask81.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask82.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage81.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage82.style.transform = `translate3d(${-translation}px, 0, 0)`;


                // Your existing code for manual page turning
                // ...

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= 0) {
                    mask81.classList.remove('mask');
                    mask82.classList.remove('mask');
                    mask81.classList.add('right-mask-side');
                    mask82.classList.add('right-mask-side');

                    elementPage81.classList.remove('right-flip-side');
                    elementPage82.classList.remove('flip-side');
                    elementPage81.classList.add('right-side');
                    elementPage82.classList.add('right-side');
                    mask81.style.transform = `translate3d(0px, 0, 0)`;
                    mask82.style.transform = `translate3d(10px, 0px, 0px)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask82.style.zIndex = 10;
                    mask81.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue         
                }
            }, 10);
        }
    } else if (isDragging82 && mousemove82 && elementPage82.classList.contains('right-flip-side')) {
        isDragging82 = false;
        mousemove82 = false;
    }

    if (isDragging71 && mousemove71 && elementPage71.classList.contains('right-flip-side')) {
        isDragging71 = false;
        mousemove71 = false;
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
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask71.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask72.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage71.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage72.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    //elementPage82.style.transform = 'translate3d(-347px, 0, 0)';
                    //page1.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
                    page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                    page6.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                }

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
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask71.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask72.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage71.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage72.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)'

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    mask71.classList.add('right-mask-side');
                    mask72.classList.add('right-mask-side');
                    mask71.classList.remove('mask');
                    mask72.classList.remove('mask');


                    elementPage71.classList.add('right-side');
                    elementPage72.classList.add('right-side');
                    elementPage71.classList.remove('right-flip-side');
                    elementPage72.classList.remove('flip-side');
                    mask71.style.transform = `translate3d(0px, 0, 0)`;
                    mask72.style.transform = `translate3d(0px, 0, 0)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask72.style.zIndex = 1;
                    mask71.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }

    } else if (isDragging71 && mousemove71 && elementPage71.classList.contains('right-side')) {
        isDragging71 = false;
        mousemove71 = false;
    }

    if (isDragging72 && mousemove72 && elementPage72.classList.contains('right-side')) {
        isDragging72 = false;
        mousemove72 = false;
        if (deltaX72 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask71.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask72.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage71.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage72.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 300) {

                    page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(24px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                    page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page6.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                }

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre61.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage72.style.zIndex = 1;
                    elementPage71.style.zIndex = 10;
                    mask72.style.zIndex = 1;
                    mask71.style.zIndex = 10;
                    page7.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                    mask71.style.transform = 'translate3d(0px, 0, 0) translateX(0px)';
                    elementPage71.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage72.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';


                }
            }, 10);
        } else {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-331px) translateY(8px)';

                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask71.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask72.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage71.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage72.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= 0) {
                    mask71.classList.remove('mask');
                    mask72.classList.remove('mask');
                    mask71.classList.add('right-mask-side');
                    mask72.classList.add('right-mask-side');

                    elementPage71.classList.remove('right-flip-side');
                    elementPage72.classList.remove('flip-side');
                    elementPage71.classList.add('right-side');
                    elementPage72.classList.add('right-side');
                    mask71.style.transform = `translate3d(0px, 0, 0)`;
                    mask72.style.transform = `translate3d(10px, 0px, 0px)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask72.style.zIndex = 10;
                    mask71.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue   
                }
            }, 10);
        }
    } else if (isDragging72 && mousemove72 && elementPage72.classList.contains('right-flip-side')) {
        isDragging72 = false;
        mousemove72 = false;
    }


    if (isDragging61 && mousemove61 && elementPage61.classList.contains('right-flip-side')) {
        isDragging61 = false;
        mousemove61 = false;
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
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask61.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask62.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage61.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage62.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    //elementPage82.style.transform = 'translate3d(-349px, 0, 0)';
                    //elementPage72.style.transform = 'translate3d(-347px, 0, 0)';
                    //page1.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                    page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                    page5.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                }

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
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask61.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask62.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage61.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage62.style.transform = `translate3d(${-translation}px, 0, 0)`;


                page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)'

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    mask61.classList.add('right-mask-side');
                    mask62.classList.add('right-mask-side');
                    mask61.classList.remove('mask');
                    mask62.classList.remove('mask');


                    elementPage61.classList.add('right-side');
                    elementPage62.classList.add('right-side');
                    elementPage61.classList.remove('right-flip-side');
                    elementPage62.classList.remove('flip-side');
                    mask61.style.transform = `translate3d(0px, 0, 0)`;
                    mask62.style.transform = `translate3d(0px, 0, 0)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask62.style.zIndex = 1;
                    mask61.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }

    } else if (isDragging61 && mousemove61 && elementPage61.classList.contains('right-side')) {
        isDragging61 = false;
        mousemove61 = false;
    }

    if (isDragging62 && mousemove62 && elementPage62.classList.contains('right-side')) {
        isDragging62 = false;
        mousemove62 = false;
        if (deltaX62 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask61.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask62.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage61.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage62.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    page2.style.transform = 'rotateY(0deg) translateZ(12px) translateX(22px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page5.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                }

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre61.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage62.style.zIndex = 1;
                    elementPage61.style.zIndex = 10;
                    mask62.style.zIndex = 1;
                    mask61.style.zIndex = 10;
                    page6.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                    mask61.style.transform = 'translate3d(0px, 0, 0) translateX(0px)';
                    elementPage61.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage62.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-331px) translateY(8px)';

                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask61.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask62.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage61.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage62.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= 0) {
                    mask61.classList.remove('mask');
                    mask62.classList.remove('mask');
                    mask61.classList.add('right-mask-side');
                    mask62.classList.add('right-mask-side');

                    elementPage61.classList.remove('right-flip-side');
                    elementPage62.classList.remove('flip-side');
                    elementPage61.classList.add('right-side');
                    elementPage62.classList.add('right-side');
                    mask61.style.transform = `translate3d(0px, 0, 0)`;
                    mask62.style.transform = `translate3d(10px, 0px, 0px)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask62.style.zIndex = 10;
                    mask61.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue  
                }
            }, 10);
        }
    } else if (isDragging62 && mousemove62 && elementPage62.classList.contains('right-flip-side')) {
        isDragging62 = false;
        mousemove62 = false;
    }

    if (isDragging51 && mousemove51 && elementPage51.classList.contains('right-flip-side')) {
        isDragging51 = false;
        mousemove51 = false;
        if (deltaX51 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask51.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask52.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage51.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage52.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    //elementPage82.style.transform = 'translate3d(-351px, 0, 0)';
                    //elementPage72.style.transform = 'translate3d(-349px, 0, 0)';
                    //elementPage62.style.transform = 'translate3d(-347px, 0, 0)';

                    //page1.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                    page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                }

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
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask51.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask52.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage51.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage52.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    mask51.classList.add('right-mask-side');
                    mask52.classList.add('right-mask-side');
                    mask51.classList.remove('mask');
                    mask52.classList.remove('mask');


                    elementPage51.classList.add('right-side');
                    elementPage52.classList.add('right-side');
                    elementPage51.classList.remove('right-flip-side');
                    elementPage52.classList.remove('flip-side');
                    mask51.style.transform = `translate3d(0px, 0, 0)`;
                    mask52.style.transform = `translate3d(0px, 0, 0)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask52.style.zIndex = 1;
                    mask51.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }
    } else if (isDragging51 && mousemove51 && elementPage51.classList.contains('right-side')) {
        isDragging51 = false;
        mousemove51 = false;
    }

    if (isDragging52 && mousemove52 && elementPage52.classList.contains('right-side')) {
        isDragging52 = false;
        mousemove52 = false;
        if (deltaX52 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask51.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask52.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage51.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage52.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    page2.style.transform = 'rotateY(0deg) translateZ(13px) translateX(20px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                }

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre61.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage52.style.zIndex = 1;
                    elementPage51.style.zIndex = 10;
                    mask52.style.zIndex = 1;
                    mask51.style.zIndex = 10;
                    page5.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                    mask51.style.transform = 'translate3d(0px, 0, 0) translateX(0px)';
                    elementPage51.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage52.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-331px) translateY(8px)';

                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask51.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask52.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage51.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage52.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= 0) {
                    mask51.classList.remove('mask');
                    mask52.classList.remove('mask');
                    mask51.classList.add('right-mask-side');
                    mask62.classList.add('right-mask-side');

                    elementPage51.classList.remove('right-flip-side');
                    elementPage52.classList.remove('flip-side');
                    elementPage51.classList.add('right-side');
                    elementPage52.classList.add('right-side');
                    mask51.style.transform = `translate3d(0px, 0, 0)`;
                    mask52.style.transform = `translate3d(10px, 0px, 0px)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask52.style.zIndex = 10;
                    mask51.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue        
                }
            }, 10);
        }
    } else if (isDragging52 && mousemove52 && elementPage52.classList.contains('right-flip-side')) {
        isDragging52 = false;
        mousemove52 = false;
    }

    if (isDragging41 && mousemove41 && elementPage41.classList.contains('right-flip-side')) {
        isDragging41 = false;
        mousemove41 = false;
        if (deltaX41 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask41.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask42.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage41.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage42.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    //elementPage82.style.transform = 'translate3d(-353px, 0, 0)';
                    //elementPage72.style.transform = 'translate3d(-351px, 0, 0)';
                    //elementPage62.style.transform = 'translate3d(-349px, 0, 0)';
                    //elementPage52.style.transform = 'translate3d(-347px, 0, 0)';
                    page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                }

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
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask41.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask42.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage41.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage42.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    mask41.classList.add('right-mask-side');
                    mask42.classList.add('right-mask-side');
                    mask41.classList.remove('mask');
                    mask42.classList.remove('mask');


                    elementPage41.classList.add('right-side');
                    elementPage42.classList.add('right-side');
                    elementPage41.classList.remove('right-flip-side');
                    elementPage42.classList.remove('flip-side');
                    mask41.style.transform = `translate3d(0px, 0, 0)`;
                    mask42.style.transform = `translate3d(0px, 0, 0)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask42.style.zIndex = 1;
                    mask41.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }



    } else if (isDragging41 && mousemove41 && elementPage41.classList.contains('right-side')) {
        isDragging41 = false;
        mousemove41 = false;
    }

    if (isDragging42 && mousemove42 && elementPage42.classList.contains('right-side')) {
        isDragging42 = false;
        mousemove42 = false;
        if (deltaX42 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask41.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask42.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage41.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage42.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    page2.style.transform = 'rotateY(0deg) translateZ(14px) translateX(18px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                }

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre61.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage42.style.zIndex = 1;
                    elementPage41.style.zIndex = 10;
                    mask42.style.zIndex = 1;
                    mask41.style.zIndex = 10;
                    page4.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                    mask41.style.transform = 'translate3d(0px, 0, 0) translateX(0px)';
                    elementPage41.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage42.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-331px) translateY(8px)';

                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask41.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask42.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage41.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage42.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= 0) {
                    mask41.classList.remove('mask');
                    mask42.classList.remove('mask');
                    mask41.classList.add('right-mask-side');
                    mask42.classList.add('right-mask-side');

                    elementPage41.classList.remove('right-flip-side');
                    elementPage42.classList.remove('flip-side');
                    elementPage41.classList.add('right-side');
                    elementPage42.classList.add('right-side');
                    mask41.style.transform = `translate3d(0px, 0, 0)`;
                    mask42.style.transform = `translate3d(10px, 0px, 0px)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask42.style.zIndex = 10;
                    mask41.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue         
                }
            }, 10);
        }
    } else if (isDragging42 && mousemove42 && elementPage42.classList.contains('right-flip-side')) {
        isDragging42 = false;
        mousemove42 = false;
    }

    if (isDragging31 && mousemove31 && elementPage31.classList.contains('right-flip-side')) {
        isDragging31 = false;
        mousemove31 = false;
        if (deltaX31 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask31.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask32.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage31.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage32.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    //page1.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                    page2.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                }
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
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask31.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask32.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage31.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage32.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(15px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    mask31.classList.add('right-mask-side');
                    mask32.classList.add('right-mask-side');
                    mask31.classList.remove('mask');
                    mask32.classList.remove('mask');


                    elementPage31.classList.add('right-side');
                    elementPage32.classList.add('right-side');
                    elementPage31.classList.remove('right-flip-side');
                    elementPage32.classList.remove('flip-side');
                    mask31.style.transform = `translate3d(0px, 0, 0)`;
                    mask32.style.transform = `translate3d(0px, 0, 0)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask32.style.zIndex = 1;
                    mask31.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 10);
        }

    } else if (isDragging31 && mousemove31 && elementPage31.classList.contains('right-side')) {
        isDragging31 = false;
        mousemove31 = false;
    }

    if (isDragging32 && mousemove32 && elementPage32.classList.contains('right-side')) {
        isDragging32 = false;
        mousemove32 = false;
        if (deltaX32 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask31.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask32.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage31.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage32.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    page2.style.transform = 'rotateY(0deg) translateZ(15px) translateX(16px) translateY(8px)';
                }

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre61.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage32.style.zIndex = 1;
                    elementPage31.style.zIndex = 10;
                    mask32.style.zIndex = 1;
                    mask31.style.zIndex = 10;
                    page3.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';
                    mask31.style.transform = 'translate3d(0px, 0, 0) translateX(0px)';
                    elementPage31.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage32.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(-331px) translateY(8px)';

                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask31.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask32.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage31.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage32.style.transform = `translate3d(${-translation}px, 0, 0)`;

                page2.style.transform = 'rotateY(0deg) translateZ(16px) translateX(14px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= 0) {
                    mask31.classList.remove('mask');
                    mask32.classList.remove('mask');
                    mask31.classList.add('right-mask-side');
                    mask32.classList.add('right-mask-side');

                    elementPage31.classList.remove('right-flip-side');
                    elementPage32.classList.remove('flip-side');
                    elementPage31.classList.add('right-side');
                    elementPage32.classList.add('right-side');
                    mask31.style.transform = `translate3d(0px, 0, 0)`;
                    mask32.style.transform = `translate3d(10px, 0px, 0px)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask32.style.zIndex = 10;
                    mask31.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue
                }
            }, 10);
        }
    } else if (isDragging32 && mousemove32 && elementPage32.classList.contains('right-flip-side')) {
        isDragging32 = false;
        mousemove32 = false;
    }

    if (isDragging21 && mousemove21 && elementPage21.classList.contains('right-flip-side')) {
        isDragging21 = false;
        mousemove21 = false;
        if (deltaX21 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask21.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask22.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage21.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage22.style.transform = `translate3d(${-translation}px, 0, 0)`;


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
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask21.style.transform = `translate3d(${maxTranslation - translation}px, 0, 0)`;
                mask22.style.transform = `translate3d(${maxTranslation - (translation - 10)}px, 0, 0)`;
                elementPage21.style.transform = `translate3d(${translation}px, 0, 0)`;
                elementPage22.style.transform = `translate3d(${-translation}px, 0, 0)`;

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= -345) {
                    mask21.classList.add('right-mask-side');
                    mask22.classList.add('right-mask-side');
                    mask21.classList.remove('mask');
                    mask22.classList.remove('mask');


                    elementPage21.classList.add('right-side');
                    elementPage22.classList.add('right-side');
                    elementPage21.classList.remove('right-flip-side');
                    elementPage22.classList.remove('flip-side');
                    mask21.style.transform = `translate3d(0px, 0, 0)`;
                    mask22.style.transform = `translate3d(0px, 0, 0)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask22.style.zIndex = 1;
                    mask21.style.zIndex = 10;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue                        
                }
            }, 15);
        }
    } else if (isDragging21 && mousemove21 && elementPage21.classList.contains('right-side')) {
        isDragging21 = false;
        mousemove21 = false;
    }

    if (isDragging22 && mousemove22 && elementPage22.classList.contains('right-side')) {
        isDragging22 = false;
        mousemove22 = false;
        if (deltaX22 > 150) {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance += 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask21.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask22.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage21.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage22.style.transform = `translate3d(${-translation}px, 0, 0)`;

                if (totalDistance > 200) {
                    page8.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-331px) translateY(8px)';
                    page7.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-331px) translateY(8px)';
                    page6.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-331px) translateY(8px)';
                    page5.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-331px) translateY(8px)';
                    page4.style.transform = 'rotateY(0deg) translateZ(15px) translateX(-331px) translateY(8px)';
                    page3.style.transform = 'rotateY(0deg) translateZ(17px) translateX(-331px) translateY(8px)';
                }

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance >= 345) {
                    ombre61.style.display = 'none';
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    elementPage22.style.zIndex = 1;
                    elementPage21.style.zIndex = 10;
                    mask22.style.zIndex = 1;
                    mask21.style.zIndex = 10;
                    page2.style.transform = 'rotateY(0deg) translateZ(11px) translateX(14px) translateY(8px)';
                    mask21.style.transform = 'translate3d(0px, 0, 0) translateX(0px)';
                    elementPage21.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                    elementPage22.style.boxShadow = '0px -1px 2px rgba(150, 150, 150, 0.8)';
                }
            }, 10);
        } else {
            // Start the auto-turn timer
            autoTurnTimer = setInterval(() => {
                // Bornes des valeurs
                page2.style.transform = 'rotateY(0deg) translateZ(16px) translateX(-331px) translateY(8px)';

                const maxTranslation = 345; // La valeur maximale de la translation
                const minTranslation = 0;  // La valeur minimale de la translation
                // Increment the total distance by a small amount (adjust as needed)
                totalDistance -= 6;
                let translation = Math.min(maxTranslation, Math.max(minTranslation, totalDistance));

                // Appliquer la transformation aux éléments
                mask21.style.transform = `translate3d(${0 + translation}px, 0, 0)`;
                mask22.style.transform = `translate3d(${0 + (translation + 10)}px, 0, 0)`;

                elementPage21.style.transform = `translate3d(${-345 + translation}px, 0, 0)`;
                elementPage22.style.transform = `translate3d(${-translation}px, 0, 0)`;


                page8.style.transform = 'rotateY(0deg) translateZ(10px) translateX(-331px) translateY(8px)';
                page7.style.transform = 'rotateY(0deg) translateZ(11px) translateX(-331px) translateY(8px)';
                page6.style.transform = 'rotateY(0deg) translateZ(12px) translateX(-331px) translateY(8px)';
                page5.style.transform = 'rotateY(0deg) translateZ(13px) translateX(-331px) translateY(8px)';
                page4.style.transform = 'rotateY(0deg) translateZ(14px) translateX(-331px) translateY(8px)';
                page3.style.transform = 'rotateY(0deg) translateZ(15px) translateX(-331px) translateY(8px)';

                // Check if the total distance exceeds a certain value (adjust as needed)
                if (totalDistance <= 0) {
                    mask21.classList.remove('mask');
                    mask22.classList.remove('mask');
                    mask21.classList.add('right-mask-side');
                    mask22.classList.add('right-mask-side');

                    elementPage21.classList.remove('right-flip-side');
                    elementPage22.classList.remove('flip-side');
                    elementPage21.classList.add('right-side');
                    elementPage22.classList.add('right-side');
                    mask21.style.transform = `translate3d(0px, 0, 0)`;
                    mask22.style.transform = `translate3d(10px, 0px, 0px)`;
                    clearInterval(autoTurnTimer); // Stop the timer when the desired distance is reached
                    deltaX = 0;
                    mask22.style.zIndex = 10;
                    mask21.style.zIndex = 1;
                    totalDistance = 0; // Garder une trace de la distance totale parcourue     
                }
            }, 10);
        }
    } else if (isDragging22 && mousemove22 && elementPage22.classList.contains('right-flip-side')) {
        isDragging22 = false;
        mousemove22 = false;
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

// Fonction pour gérer le clic ou le toucher suivant
const handleSuivant = () => {
    if (compteur === 0) {
        presentation.classList.remove('appear');
        presentation.classList.add('disappear');
        iut.classList.remove('disappear');
        iut.classList.add('appear');
        compteur = 1;
    } else if (compteur === 1) {
        iut.classList.remove('appear');
        iut.classList.add('disappear');
        wild.classList.remove('disappear');
        wild.classList.add('appear');
        compteur = 2;
    } else if (compteur === 2) {
        wild.classList.remove('appear');
        wild.classList.add('disappear');
        presentation.classList.remove('disappear');
        presentation.classList.add('appear');
        compteur = 0;
    }
};

// Fonction pour gérer le clic ou le toucher précédent
const handlePrecedent = () => {
    if (compteur === 1) {
        presentation.classList.remove('disappear');
        presentation.classList.add('appear');
        iut.classList.remove('appear');
        iut.classList.add('disappear');
        compteur = 0;
    } else if (compteur === 2) {
        iut.classList.remove('disappear');
        iut.classList.add('appear');
        wild.classList.remove('appear');
        wild.classList.add('disappear');
        compteur = 1;
    } else if (compteur === 0) {
        presentation.classList.remove('appear');
        presentation.classList.add('disappear');
        wild.classList.remove('disappear');
        wild.classList.add('appear');
        compteur = 2;
    }
};

// Ajoutez des écouteurs d'événements pour le clic ou le toucher
suivant.addEventListener('click', handleSuivant);
precedent.addEventListener('click', handlePrecedent);

// Ajoutez des écouteurs d'événements pour les écrans tactiles
suivant.addEventListener('touchstart', handleSuivant);
precedent.addEventListener('touchstart', handlePrecedent);

const lienAvecImageKarma = document.getElementById('lienAvecImageKarma');

// Fonction pour gérer le clic ou le toucher sur le lien avec l'image
const handleLienAvecImageClickKarma = () => {
    // Votre logique ici, par exemple une redirection vers une autre page
    window.open('https://matstmr.github.io/karmamanga/index.html', '_blank');
};

// Ajoutez un écouteur d'événements pour le clic
lienAvecImageKarma.addEventListener('click', handleLienAvecImageClickKarma);
// Ajoutez un écouteur d'événements pour le toucher sur les écrans tactiles
lienAvecImageKarma.addEventListener('touchend', handleLienAvecImageClickKarma);


const lienAvecImagePokemon = document.getElementById('lienAvecImagePokemon');

// Fonction pour gérer le clic ou le toucher sur le lien avec l'image
const handleLienAvecImageClickPokemon = () => {
    // Votre logique ici, par exemple une redirection vers une autre page
    window.open('https://matstmr.github.io/pokedexcard/', '_blank');
};

// Ajoutez un écouteur d'événements pour le clic
lienAvecImagePokemon.addEventListener('click', handleLienAvecImageClickPokemon);
// Ajoutez un écouteur d'événements pour le toucher sur les écrans tactiles
lienAvecImagePokemon.addEventListener('touchstart', (event) => {
    handleLienAvecImageClickPokemon();
    event.stopPropagation();

});