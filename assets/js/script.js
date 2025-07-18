"use strict";

window.onscroll = function() {
    const button = document.getElementById('scrollToTop');
    button.style.display = window.scrollY > 200 ? 'block' : 'none';
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection1() {
    document.getElementById('voidsection').scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection2() {
    document.getElementById('invsection').scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection3() {
    document.getElementById('lionsection').scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection4() {
    document.getElementById('mirasection').scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection5() {
    document.getElementById('pudgesection').scrollIntoView({ behavior: 'smooth' });
}


const ranks = [
    { title: 'Herald', image: 'img/Herald.jpg', description: '0 - 769 MMR' },
    { title: 'Guardian', image: 'img/Guardian.jpg', description: '770 - 1549 MMR' },
    { title: 'Crusader', image: 'img/Crusader.jpg', description: '1550 - 2399 MMR' },
    { title: 'Archon', image: 'img/Archon.jpg', description: '2400 - 3399 MMR' },
    { title: 'Legend', image: 'img/Legend.jpg', description: '3400 - 4399 MMR' },
    { title: 'Ancient', image: 'img/Ancient.jpg', description: '4400 - 5399 MMR' },
    { title: 'Divine', image: 'img/Divine.jpg', description: '5400 - 6399 MMR' },
    { title: 'Immortal', image: 'img/Immortal.jpg', description: '6400 - 10000 MMR' }
];

let currentIndex = 0;

const titleElement = document.getElementById('rank-title');
const imageElement = document.getElementById('rank-image');
const descriptionElement = document.getElementById('rank-description');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

function updateRank() {
    const rank = ranks[currentIndex];
    titleElement.textContent = rank.title;
    imageElement.src = rank.image;
    descriptionElement.textContent = rank.description;
}

leftButton.onclick = function() {
    currentIndex = (currentIndex - 1 + ranks.length) % ranks.length;
    updateRank();
};

rightButton.onclick = function() {
    currentIndex = (currentIndex + 1) % ranks.length;
    updateRank();
};

updateRank();
