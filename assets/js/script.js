"use strict"


window.onscroll = function() {
    const button = document.getElementById('scrollToTop');
    if (window.scrollY > 200) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollToSection1() {
    const section = document.getElementById('voidsection');
    section.scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection2() {
    const section = document.getElementById('invsection');
    section.scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection3() {
    const section = document.getElementById('lionsection');
    section.scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection4() {
    const section = document.getElementById('mirasection');
    section.scrollIntoView({ behavior: 'smooth' });
}
function scrollToSection5() {
    const section = document.getElementById('pudgesection');
    section.scrollIntoView({ behavior: 'smooth' });
}

const ranks = [
    { title:'Herald', image:'Images/Herald.jpg', description:'0 - 769 MMR' },
    { title:'Guardian', image:'Images/Guardian.jpg', description:'770 - 1549 MMR' },
    { title:'Crusader', image:'Images/Crusader.jpg', description:'1550 - 2399 MMR' },
    { title:'Archon', image:'Images/Archon.jpg', description:'2400 - 3399 MMR' },
    { title:'Legend', image:'Images/Legend.jpg', description:'3400 - 4399 MMR' },
    { title:'Ancient', image:'Images/Ancient.jpg', description:'4400 - 5399 MMR' },
    { title:'Divine', image:'Images/Divine.jpg', description:'5400 - 6399 MMR' },
    { title:'Immortal', image:'Images/Immortal.jpg', description:'6400 - 10000 MMR' },
    
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
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = ranks.length - 1;
    }
    updateRank();
}

rightButton.onclick = function() {
    currentIndex++;
    if (currentIndex >= ranks.length) {
        currentIndex = 0;
    }
    updateRank();
}

updateRank();