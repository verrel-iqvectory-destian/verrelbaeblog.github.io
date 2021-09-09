//============== MENU 1 ==============
//============== DROPDOWN TUTORIAL ==============
const tutorial = document.querySelector('.tutorial__dropdown');
const dropdownTutorial = document.querySelector('.dropdown-tutorial');
const iconTutorial = document.querySelector('.tutorial-icons');

//============== DROPDOWN DM ==============
const dm = document.querySelector('.dm__dropdown');
const dropdownDm = document.querySelector('.dropdown-dm');
const iconDm = document.querySelector('.dm-icons');


//============== DROPDOWN WDD ==============
const wdd = document.querySelector('.wdd__dropdown');
const dropdownWdd = document.querySelector('.dropdown-wdd');
const iconWdd = document.querySelector('.wdd-icons');

//============== DROPDOWN IB ==============
const ib = document.querySelector('.ib__dropdown');
const dropdownIb = document.querySelector('.dropdown-ib');
const iconIb = document.querySelector('.ib-icons');

//============== MENU 2 ==============
//============== DROPDOWN DOMAIN ==============
const domain = document.querySelector('.domain__navbar');
const dropdownDomain = document.querySelector('.dropdown-domain');
const iconDomain = document.querySelector('.domain-icons');

//============== DROPDOWN WEBSITE ==============
const website = document.querySelector('.website__navbar');
const dropdownWebsite = document.querySelector('.dropdown-website');
const iconWebsite = document.querySelector('.website-icons');

//============== MENU 1 ==============
//============== DROPDOWN TUTORIAL ==============
tutorial.onclick = () => {
    dropdownTutorial.classList.toggle('show');
    iconTutorial.classList.toggle('icons');
};

//============== DROPDOWN DM ==============
dm.onclick = () => {
    dropdownDm.classList.toggle('show');
    iconDm.classList.toggle('icons');
};

//============== DROPDOWN WDD ==============
wdd.onclick = () => {
    dropdownWdd.classList.toggle('show');
    iconWdd.classList.toggle('icons');
};

//============== DROPDOWN WDD ==============
ib.onclick = () => {
    dropdownIb.classList.toggle('show');
    iconIb.classList.toggle('icons');
};


//============== MENU 2 ==============
//============== DROPDOWN DOMAIN ==============
domain.onclick = () => {
    dropdownDomain.classList.toggle('show');
    iconDomain.classList.toggle('icons');
};

//============== DROPDOWN WEBSITE ==============
website.onclick = () => {
    dropdownWebsite.classList.toggle('show');
    iconWebsite.classList.toggle('icons');
};