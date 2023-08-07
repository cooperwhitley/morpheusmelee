/*---constants---*/
const attacks = [
    { name: 'BITE', info: '', pawLocation: '5 / 1 / 6 / 2' },
    { name: 'SCRATCH', info: '', pawLocation: '6 / 1 / 7 / 2' },
    { name: 'LUNGE', info: '', pawLocation: '5 / 6 / 6 / 7' },
    { name: 'SWIPE', info: '', pawLocation: '6 / 6 / 7 / 7' }
];
const menuOptionLocations = [
    ['top-left', 'top-right'],
    ['bottom-left', 'bottom-right']
];


/*---state variables---*/

// text window
// turn
// win condition


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