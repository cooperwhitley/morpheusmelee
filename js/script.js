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
        info: 'COOPER USED NERF GUN',
        dmg: -10
    },
    {
        name: 'PET',
        info: 'COOPER PET MORPHEUS',
        dmg: -5
    },
    {
        name: 'GIVE TREAT',
        info: 'COOPER GAVE MORPHEUS A TREAT',
        dmg: -20
    },
    {
        name: 'SHOUT',
        info: '',
        dmg: -5
    }
]

/*---state variables---*/

// text menu
let menu;
// turn
let turn;
// win condition
let winner;


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

/*---functions---*/

// init
// move indicator based on hover
function moveSelectorElByHover(event) {
    menuSelectorEl.style.visibility = 'visible';
    menuSelectorEl.style.gridArea = attacks[menuOptionEls.indexOf(event.target)].pawLocation;
}
function removeSelectorElAfterHover(event) {
    menuSelectorEl.style.visibility = 'hidden';
}
// init player turn
function initPlayerTurn() {
    // deploy action titles to menu option divs
    menuOptionEls.forEach((option) => {
        option.innerText = attacks[menuOptionEls.indexOf(option)].name;
        option.addEventListener('mouseover', moveSelectorElByHover);
        option.addEventListener('mouseout', removeSelectorElAfterHover);
    });
}
initPlayerTurn();
// handle player move choice
// enemy turn
// add text (called by move handler and enemy turn)


/*---event listeners---*/

// menu choices
// menu hover
// textbox advance