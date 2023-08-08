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
// check if text is printed
let textPrinted = false;
// store damage to be applied
let damageToApply;

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

// turn logic

// turn 0 - enemy greets morpheus
function turnZero() {
    // make textbox visible and menu choices invisible
    // print greeting text
    // move pawprint to bottom right of menu and only show if textPrinted is true
}

// turn 1 - morpheus chooses attack
function turnOne() {
    // make textbox invisible and menu choices visible
    // move pawprint based on highlighted menu selection
    // listen for action choice
}

// turn 2 - attack animation and flavor text for morpheus' attack
function turnTwo() {
    // make textPrinted false
    // make textbox visible and menu choices invisible
    // print action text
    // apply and animate damage received
    // move pawprint to bottom right of menu
    // check for winner
}

// turn 3 - enemy reaction text to morpheus' attack
function turnThree() {
    // make textPrinted false
    // if winner = true print win message, else print reaction text
}

// turn 4 - enemy chooses attack
function turnFour() {
    // make textPrinted false
    // choose random enemy attack
    // print what attack is chosen
}

// turn 5 - enemy attack animation & text
function turnFive() {
    // make textPrinted false
    // print action text
    // apply and animate damage received
    // check for winner
}

// turn 6 - morpheus reaction text to enemy attack
function turnSix() {
    // make textPrinted false
    // if winner = true print win message, else print reaction text
}

// /turn logic



// graphical functions
// move indicator based on hover
function moveSelectorElByHover(event) {
    menuSelectorEl.style.visibility = 'visible';
    menuSelectorEl.style.gridArea = attacks[menuOptionEls.indexOf(event.target)].pawLocation;
}
function removeSelectorElAfterHover() {
    menuSelectorEl.style.visibility = 'hidden';
}

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

// text print fn
async function typeSentence(str, elId) {
    const letters = str.split('');
    let i = 0;
    let typingTarget = elId;
    // time to wait calculates how long to wait for textPrinted to be true
    while (i < letters.length) {
        await waitForMs(100);
        typingTarget.append(letters[i]);
        i++
    }
    return;
}

// delete text fn
async function deleteSentence(elId) {
    const sentence = elId.innerText;
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        document.getElementById(elId).innerText = letters.join("");
    }
}

// wait promise constructor
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

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