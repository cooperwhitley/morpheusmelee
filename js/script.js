/*---constants---*/
// player attacks
const player = {
    name: 'MORPHEUS',
    attacks: [
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
    ],
    reactions: [
        'MEOW', 
        'MROW', 
        'MROWOW', 
        'MEOWWWWWWW'
    ]
};
const menuOptionLocations = [
    ['top-left', 'top-right'],
    ['bottom-left', 'bottom-right']
];
// enemy attacks
    // cooper attacks
const cooper = {
    name: 'COOPER',
    attacks: [
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
    ],
    greetings: [
        'HI SWEET BOY', 
        'WHATCHA DOIN MORBY', 
        'AWW WASUP ANGEL BOY', 
        'MORBY!'
    ],
    reactions: [
        'WHY', 
        'OUCH!', 
        'HEY! WHAT WAS THAT ABOUT', 
        'WHY ARE YOU LIKE THIS'
    ],
    pronouns: ['HE', 'HIM', 'HIS'],
    health: 0
}

/*---state variables---*/

// text menu
let menu;
// turn, value 0-6, 0 being initial greeting, then loop combat in 1-6
let turn;
// win condition
let winner = 0;
//morph boy mode status
let morphBoyMode = 1;
// check if text is printed
let textPrinted = false;
// store damage to be applied
let damageToApply;
// move choice
let moveChoice;

// enemy choice
let enemy = cooper;

// health
enemy.health = 100;
player.health = 100;


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

// init();
function init() {
    winner = 0;
    turn = 0;
    menu = 0;
    turn0();
}
// turn logic

// turn 0 - enemy greets morpheus
function turn0() {
    // make textbox visible and menu choices invisible
    textBoxEl.style.visibility = 'visible'
    for (let option of menuOptionEls) {
        option.style.visibility = 'hidden'
    }
    // print greeting text
    let randomGreeting = `${enemy.name}: ${enemy.greetings[Math.floor(Math.random() * enemy.greetings.length)]}`
    typeSentence(randomGreeting, textBoxEl)
    // move pawprint to bottom right of menu and only show if textPrinted is true
    waitAndRenderSelectorEl(randomGreeting);
}

// turn 1 - morpheus chooses attack
function turn1() {
    // make textbox invisible and menu choices visible
    textBoxEl.style.visibility = 'hidden'
    for (let option of menuOptionEls) {
        option.style.visibility = 'visible'
    }
    // move pawprint based on highlighted menu selection
    // deploy action titles to menu option divs and add hover icon
    menuOptionEls.forEach((option) => {
        option.innerText = player.attacks[menuOptionEls.indexOf(option)].name;
        option.addEventListener('mouseover', moveSelectorElByHover);
        option.addEventListener('mouseout', removeSelectorElAfterHover);
        menuSelectorEl.style.justifySelf = 'flex-end';
    });
    // listen for action choice
}

moveChoice = player.attacks[1]
damageToApply = player.attacks[1].dmg
// turn 2 - attack animation and flavor text for morpheus' attack
function turn2() {
    // make textPrinted false
    textPrinted = false;
    textBoxEl.innerText = '';
    // make textbox visible and menu choices invisible
    textBoxEl.style.visibility = 'visible'
    for (let option of menuOptionEls) {
        option.style.visibility = 'hidden'
    }
    // print action text
    let actionText = `${moveChoice.info} ${enemy.name}`;
    typeSentence(actionText, textBoxEl);
    waitAndRenderSelectorEl(actionText);
    // apply and animate damage received
    enemy.health += damageToApply;
    enemyHealth.value += damageToApply;
    pain(enemySpriteEl);
}

// turn 3 - enemy reaction text to morpheus' attack
function turn3() {
    // make textPrinted false
    textPrinted = false;
    // clear text
    textBoxEl.innerText = '';
    textBoxEl.style.visibility = 'visible'
    // if winner = true print win message, else print reaction text
    checkWinner();
    let reactionText;
    if (winner === 1) {
        reactionText = `${enemy.name} GOT SO PISSED OFF THAT ${enemy.pronouns[0]} LEFT`
    } else if (winner === 0){
        reactionText = `${enemy.name}: ${enemy.reactions[Math.floor(Math.random() * enemy.reactions.length)]}`
    }
    typeSentence(reactionText, textBoxEl);
    waitAndRenderSelectorEl(reactionText);
}

turn3();
// turn 4 - enemy chooses attack
function turn4() {
    // make textPrinted false
    textPrinted = false;
    // choose random enemy attack
    // clear text
    // print what attack is chosen
}

// turn 5 - enemy attack animation & text
function turn5() {
    // make textPrinted false
    // clear text
    // print action text
    // apply and animate damage received
    // check for winner
}

// turn 6 - morpheus reaction text to enemy attack
function turn6() {
    // make textPrinted false
    // clear text
    // if winner = true print win message, else print reaction text
}

function advanceTurn() {
    // check if textPrinted
    // advance to next turn
}

function handleMoveChoice() {
    // set move choice
    // set damage to apply
}

function checkWinner() {
    if (enemy.health < 1) {
        winner = 1;
    } else if (player.health === 0) {
        winner = -1;
    } else winner = 0;
}
// /turn logic



// graphical functions
// move indicator based on hover
function moveSelectorElByHover(event) {
    menuSelectorEl.style.visibility = 'visible';
    menuSelectorEl.style.gridArea = player.attacks[menuOptionEls.indexOf(event.target)].pawLocation;
}
function removeSelectorElAfterHover() {
    menuSelectorEl.style.visibility = 'hidden';
}

function renderTextBoxEl() {

}
function renderMenuEls() {
    
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

async function pain(target) {
    target.style.animation = 'pain 50ms linear 5';
    for (i = 0; i <= 5; i++) {
    target.style.filter = 'invert(39%) sepia(77%) saturate(5000%) hue-rotate(3deg) brightness(105%) contrast(300%)'
    await waitForMs(25);
    target.style.filter = 'none';
    await waitForMs(25);
    }
    return;
}

// 
// text print fn
async function waitAndRenderSelectorEl(str) {
    const timeToWait = (str.length + 1) * 50;
    await waitForMs(timeToWait);
    textPrinted = true;
    menuSelectorEl.style.visibility = 'visible';
    menuSelectorEl.style.gridArea = '6 / 10 / 7 / 11';
    menuSelectorEl.style.justifySelf = 'center';
    return;
}

async function typeSentence(str, elId) {
    const letters = str.split('');
    let i = 0;
    let typingTarget = elId;
    while (i < letters.length) {
        await waitForMs(50);
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


    // menu choices
// menu hover
// textbox advance
// morph boy mode button
morphBoyModeEl.addEventListener('click', toggleMorphBoyMode);