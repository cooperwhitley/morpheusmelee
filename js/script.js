/*---constants---*/
// player attacks
const attacks = [
    { 
        name: 'BITE', 
        info: 'MORPHEUS BIT', 
        pawLocation: '5 / 1 / 6 / 2',
        dmg: 10
    },
    { 
        name: 'SCRATCH',
        info: 'MORPHEUS SCRATCHED THE SHIT OUT OF',
        pawLocation: '6 / 1 / 7 / 2',
        dmg: 10
    },
    {
        name: 'LUNGE',
        info: 'MORPHEUS LUNGED AT',
        pawLocation: '5 / 6 / 6 / 7',
        dmg: 15
    },
    {
        name: 'SWIPE',
        info: 'MORPHEUS SWIPED AT',
        pawLocation: '6 / 6 / 7 / 7',
        dmg: 5
    }
];
const menuOptionLocations = [
    ['top-left', 'top-right'],
    ['bottom-left', 'bottom-right']
];
// enemy attacks
    // cooper attacks
const cooperAttacks = [
    {
        name: 'NERF GUN',
        info: 'COOPER SHOT AT MORPHEUS',
        dmg: -10
    },
    {
        name: 'PET',
        info: 'COOPER PET MORPHEUS AND SCRATCHED HIM BEHIND THE EAR',
        dmg: -5
    },
    {
        name: 'GIVE TREAT',
        info: "COOPER GAVE MORPHEUS A TASTY TREAT, HE DOESN'T DO THAT ENOUGH",
        dmg: -20
    },
    {
        name: 'SHOUT',
        info: 'COOPER YELLED AT MORPHEUS: "QUIT BEING AN ASSHOLE"',
        dmg: -5
    }
]

/*---state variables---*/

// text menu
let menu;
// turn, value 0-6, 0 being initial greeting, then loop combat in 1-6
let turn;
// win condition
let winner;
//morph boy mode status
let morphBoyMode = 1;

/*---cached elements---*/

// menu option divs
const menuOptionEls = [];
for (i = 0; i <= 3; i++) {
    menuOptionEls.push(document.getElementById(`option-${i}`));
}
// menu selector
const menuSelectorEl = document.getElementById('selecticon');
// message text
const textBoxEl = document.getElementById('text');
// character sprites
const playerSpriteEl = document.getElementById('player');
const enemySpriteEl = document.getElementById('enemy');
// character health
let morpheusHealth = document.getElementById('player-healthbar');
let enemyHealth = document.getElementById('enemy-healthbar');

// morph boy mode button
const morphBoyModeEl = document.getElementById('morphboy-mode');
const gameWindow = document.getElementById('game-window');
const bodyEl = document.querySelector('body');
/*---functions---*/

// init
function init() {
    winner = null;
    turn = 0;
    menu = 0;
}
// move indicator based on hover
function moveSelectorElByHover(event) {
    menuSelectorEl.style.visibility = 'visible';
    menuSelectorEl.style.gridArea = attacks[menuOptionEls.indexOf(event.target)].pawLocation;
}
function removeSelectorElAfterHover() {
    menuSelectorEl.style.visibility = 'hidden';
}
// handle player move choice
// enemy turn
// add text (called by move handler and enemy turn)
function toggleMorphBoyMode() {
    morphBoyMode *= -1;
    if (morphBoyMode === -1) {
        gameWindow.style.filter = 'invert(40%) sepia(100%) hue-rotate(61deg) brightness(90%) contrast(350%) saturate(50%)';
        bodyEl.style.backgroundColor = 'rgba(184,185,189,255)';
    } else if (morphBoyMode === 1) {
        gameWindow.style.filter = 'none';
        bodyEl.style.backgroundColor = 'rgba(58, 58, 58,255)';
    }
};

/*---event listeners---*/

// deploy action titles to menu option divs and add hover icon
menuOptionEls.forEach((option) => {
    option.innerText = attacks[menuOptionEls.indexOf(option)].name;
    option.addEventListener('mouseover', moveSelectorElByHover);
    option.addEventListener('mouseout', removeSelectorElAfterHover);
});
    // menu choices
// menu hover
// textbox advance
// morph boy mode button
morphBoyModeEl.addEventListener('click', toggleMorphBoyMode);