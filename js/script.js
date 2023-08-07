/*---constants---*/
const attacks = [
    { name: 'BITE', info: '' },
    { name: 'SCRATCH', info: '' },
    { name: 'LUNGE', info: '' },
    { name: 'SWIPE', info: '' }
];
const menuOptionLocations = [
    ['top-left', 'top-right'],
    ['bottom-left', 'bottom-right']
];


/*---state variables---*/

// text window
// turn
// player health
// enemy health
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


/*---functions---*/

// init
// deploy action titles to menu option divs
menuOptionEls.forEach((option) => {
    option.innerText = attacks[menuOptionEls.indexOf(option)].name;
});
// init player turn
// handle player move choice
// enemy turn
// add text (called by move handler and enemy turn)


/*---event listeners---*/

// menu choices
// textbox advance