/*---constants---*/
// player attacks
const player = {
    name: 'MORPHEUS',
    attacks: [
        { 
            name: 'BITE', 
            info: 'MORPHEUS BIT', 
            pawLocation: '5 / 1 / 6 / 2',
            dmg: 15
        },
        { 
            name: 'SCRATCH',
            info: 'MORPHEUS SCRATCHED THE SHIT OUT OF',
            pawLocation: '6 / 1 / 7 / 2',
            dmg: 15
        },
        {
            name: 'LUNGE',
            info: 'MORPHEUS LUNGED AT',
            pawLocation: '5 / 6 / 6 / 7',
            dmg: 20
        },
        {
            name: 'SWIPE',
            info: 'MORPHEUS KNOCKED OVER A CUP WHILE STARING STRAIGHT AT',
            pawLocation: '6 / 6 / 7 / 7',
            dmg: 15
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
            dmg: 15
        },
        {
            name: 'PET',
            info: 'COOPER PET MORPHEUS AND SCRATCHED HIM BEHIND THE EAR',
            dmg: 10
        },
        {
            name: 'GIVE TREAT',
            info: "COOPER GAVE MORPHEUS A TASTY TREAT, HE DOESN'T DO THAT ENOUGH",
            dmg: 20
        },
        {
            name: 'SHOUT',
            info: 'COOPER YELLED AT MORPHEUS: "QUIT BEING AN ASSHOLE"',
            dmg: 10
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

// turn list
const turns = [turn0, turn1, turn2, turn3, turn4, turn5, turn6];

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
// move choice
let moveChoice;

// enemy choice
let enemy = cooper;
let enemyMoveChoice;


/*---cached elements---*/

// menu
const menuEl = document.getElementById('menu');
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
let playerHealth = document.getElementById('player-healthbar');
let enemyHealth = document.getElementById('enemy-healthbar');

// message boxes
let infoBoxEls = document.getElementsByClassName('infobox');

// try again button
let retryButton = document.getElementById('win-message');

// morph boy mode button
const morphBoyModeEl = document.getElementById('morphboy-mode');
const gameWindow = document.getElementById('game-window');
const bodyEl = document.querySelector('body');
/*---functions---*/

init();
function init() {
    winner = 0;
    turn = 0;
    menu = 0;
    retryButton.style.visibility = 'hidden';
    for (let item of infoBoxEls) {
        item.style.visibility = 'visible';
    } 
    enemySpriteEl.style.visibility = 'visible';
    playerSpriteEl.style.visibility = 'visible';
    player.health = 100;
    enemy.health = 0;
    playerHealth.value = 100;
    enemyHealth.value = 0;
    turn0();
}
// turn logic

// turn 0 - enemy greets morpheus
function turn0() {
    // make textbox visible and menu choices invisible
    renderTextBoxEl();
    // print greeting text
    let randomGreeting = `${enemy.name}: ${enemy.greetings[Math.floor(Math.random() * enemy.greetings.length)]}`
    typeSentence(randomGreeting, textBoxEl)
    // move pawprint to bottom right of menu and only show if textPrinted is true
    waitAndRenderSelectorEl(randomGreeting);
}

// turn 1 - morpheus chooses attack
function turn1() {
    // make textbox invisible and menu choices visible
    renderMenuEls();
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

// turn 2 - attack animation and flavor text for morpheus' attack
function turn2() {
    // make textPrinted false
    textPrinted = false;
    // make textbox visible and menu choices invisible
    renderTextBoxEl();
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
    renderTextBoxEl();
    // if winner = true print win message, else print reaction text
    checkWinner();
    let reactionText;
    if (winner === 1) {
        reactionText = `${enemy.name} GOT SO PISSED OFF THAT ${enemy.pronouns[0]} LEFT. YOU WIN?`
    } else if (winner === 0){
        reactionText = `${enemy.name}: ${enemy.reactions[Math.floor(Math.random() * enemy.reactions.length)]}`
    }
    typeSentence(reactionText, textBoxEl);
    waitAndRenderSelectorEl(reactionText);
}

// turn 4 - enemy chooses attack
function turn4() {
    // make textPrinted false
    textPrinted = false;
    renderTextBoxEl();
    // choose random enemy attack
    enemyMoveChoice = enemy.attacks[Math.floor(Math.random() * enemy.attacks.length)]
    // print what attack is chosen
    let enemyMoveName = `${enemy.name} USED ${enemyMoveChoice.name}`;
    typeSentence(enemyMoveName, textBoxEl);
    waitAndRenderSelectorEl(enemyMoveName);
}

// turn 5 - enemy attack animation & text
function turn5() {
    // make textPrinted false
    textPrinted = false;
    renderTextBoxEl();
    // print action text
    let enemyActionText = enemyMoveChoice.info;
    typeSentence(enemyActionText, textBoxEl);
    waitAndRenderSelectorEl(enemyActionText);
    // apply and animate damage received
    player.health -= enemyMoveChoice.dmg;
    playerHealth.value -= enemyMoveChoice.dmg;
    pain(playerSpriteEl);
}

// turn 6 - morpheus reaction text to enemy attack
function turn6() {
    // make textPrinted false
    textPrinted = false;
    renderTextBoxEl();
    // if winner = true print win message, else print reaction text
    checkWinner();
    let reactionText;
    if (winner === -1) {
        reactionText = `MORPHEUS IS NO LONGER EXCITED AND IS GONNA TAKE A NAP.`
    } else if (winner === 0){
        reactionText = `MORPHEUS: ${player.reactions[Math.floor(Math.random() * player.reactions.length)]}`
    }
    typeSentence(reactionText, textBoxEl);
    waitAndRenderSelectorEl(reactionText);
}

function advanceTurn() {
    // check if textPrinted
    if (textPrinted && turn != 1 && turn != 6 && winner === 0) {
        turn += 1;
        turns[turn]();
    } else if (textPrinted && turn === 6 && winner === 0) {
        turn = 1;
        turns[turn]();
    } else return;
}

function handleMoveChoice(evt) {
    let evtId = evt.target.getAttribute('id');
    let evtIdArr = evtId.split('')
    attackId = parseInt(evtIdArr[evtIdArr.length - 1]);
    moveChoice = player.attacks[attackId];
    damageToApply = moveChoice.dmg;
    turn += 1;
    turns[turn]();
}

function checkWinner() {
    if (enemy.health >= 100) {
        winner = 1;
        enemySpriteEl.style.visibility = 'hidden';
    } else if (player.health <= 0) {
        winner = -1;
        playerSpriteEl.style.visibility = 'hidden';
    } else winner = 0;
    if (winner !== 0) {
        retryButton.style.visibility = 'visible';
        for (let item of infoBoxEls) {
            item.style.visibility = 'hidden';
        }
    }
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
    textBoxEl.style.visibility = 'visible'
    for (let option of menuOptionEls) {
        option.style.visibility = 'hidden'
    }
    textBoxEl.innerText = '';
}
function renderMenuEls() {
    textBoxEl.style.visibility = 'hidden'
    for (let option of menuOptionEls) {
        option.style.visibility = 'visible'
    }
    textBoxEl.innerText = '';
    menuSelectorEl.style.visibility = 'hidden';
    menuSelectorEl.style.gridArea = player.attacks[0].pawLocation;
    menuSelectorEl.style.justifySelf = 'flex-end';
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
    target.style.animation = 'pain 50ms linear 10';
    for (i = 0; i <= 5; i++) {
        target.style.filter = 'invert(39%) sepia(77%) saturate(5000%) hue-rotate(3deg) brightness(105%) contrast(300%)'
        await waitForMs(25);
        target.style.filter = 'none';
        await waitForMs(25);
    }
    target.style.animation = 'none';
    return;
}

// 
// text print fn
async function waitAndRenderSelectorEl(str) {
    const timeToWait = (str.length + 1) * 25;
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
        await waitForMs(25);
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
for (let option of menuOptionEls) {
    option.addEventListener('click', handleMoveChoice);
}
// menu hover
// textbox advance
textBoxEl.addEventListener('click', advanceTurn);
menuEl.addEventListener('click', advanceTurn);
menuSelectorEl.addEventListener('click', advanceTurn);
// morph boy mode button
morphBoyModeEl.addEventListener('click', toggleMorphBoyMode);
retryButton.addEventListener('click', init);