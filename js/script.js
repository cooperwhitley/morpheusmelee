/*---constants---*/


// with great shame I am declaring all of my sound variables up here bc i can't figure out a better way to do it bc it's late and i'm tired
// sfx variable declarations
let morphSound0, morphSound1, morphSound2;
let hit0, hit1, hit2, hit3, hit4, hit5, hit6, hit7;
let cPain0, cPain1, cPain2, cSpeech0, cSpeech1, cSpeech2, cSpeech3;
let jPain0, jPain1, jPain2, jSpeech0, jSpeech1, jSpeech2;
let aPain0, aPain1, aPain2, aSpeech0, aSpeech1, aSpeech2, aSpeech3;
let ePain0, ePain1, ePain2, eSpeech0, eSpeech1, eSpeech2, eSpeech3;
// player
const player = {
    name: 'MORPHEUS',
    attacks: [
        { 
            name: 'BITE', 
            info: 'MORPHEUS CHOMPED DOWN ON', 
            pawLocation: '5 / 1 / 6 / 2',
            dmg: 10,
            sprite: './assets/sprites/bite.png'
        },
        { 
            name: 'SCRATCH',
            info: 'MORPHEUS SCRATCHED THE SHIT OUT OF',
            pawLocation: '6 / 1 / 7 / 2',
            dmg: 15,
            sprite: './assets/sprites/scratch.png'
        },
        {
            name: 'LUNGE',
            info: 'MORPHEUS FLEW ACROSS THE ROOM AND POUNCED ON',
            pawLocation: '5 / 6 / 6 / 7',
            dmg: 20,
            sprite: './assets/sprites/lunge.png'
        },
        {
            name: 'SWIPE',
            info: 'MORPHEUS KNOCKED OVER A CUP WHILE STARING STRAIGHT AT',
            pawLocation: '6 / 6 / 7 / 7',
            dmg: 15,
            sprite: './assets/sprites/swipe.png'
        }
    ],
    reactions: [
        'MEOW', 
        'MROW', 
        'MROWOW', 
        'MEOWWWWWWW'
    ],
    sounds: [morphSound0, morphSound1, morphSound2]
};
// enemies
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
            dmg: 25
        },
        {
            name: 'SHOUT',
            info: 'COOPER YELLED AT MORPHEUS',
            dmg: 10
        }
    ],
    greetings: [
        'MY BOY!', 
        'WHATCHA DOIN MORBY', 
        'AWW WASUP ANGEL BOY', 
        'HEY MORBY!'
    ],
    reactions: [
        'WHY', 
        'MORPHEUS!', 
        'HEY! WHAT WAS THAT ABOUT', 
        'WHY ARE YOU LIKE THIS'
    ],
    pronouns: ['HE', 'HIM'],
    health: 0,
    select: {
        icon: document.getElementById('cooper'),
        text: document.getElementById('cooper-name')
    },
    sprite: './assets/sprites/cooper.png',
    sounds: {
        pain: [cPain0, cPain1, cPain2],
        speech: [cSpeech0, cSpeech1, cSpeech2, cSpeech3]
    }
}

const jordan = {
    name: 'JORDAN',
    attacks: [
        {
            name: 'BITE',
            info: 'JORDAN BIT MORPHEUS???',
            dmg: 10
        },
        {
            name: 'SCREAM',
            info: 'JORDAN SCREAMED "AAAAAAAHH"',
            dmg: 15
        },
        {
            name: 'BREATHE WEIRD',
            info: 'JORDAN RAPIDLY INAHLED AND EXHALED REALLY LOUDLY',
            dmg: 20
        },
        {
            name: 'PICK UP',
            info: 'JORDAN PICKED UP MORPHEUS AND SWISHED HIM AROUND WHILE SINGING A LITTLE SONG',
            dmg: 15
        }
    ],
    greetings: [
        'HAVE YOU SEEN THE MORPHIN MAN',
        '*WHISTLES*',
        'WASSUP MARCUS'
    ],
    reactions: [
        'HEY!!',
        'QUIT IT',
        'GRRRR',
        'STOP IT MORPH'
    ],
    pronouns: ['SHE', 'HER'],
    health: 0,
    select: {
        icon: document.getElementById('jordan'),
        text: document.getElementById('jordan-name')
    },
    sprite: './assets/sprites/jordan.png',
    sounds: {
        pain: [jPain0, jPain1, jPain2],
        speech: [jSpeech0, jSpeech1, jSpeech2]
    }
}

const aly = {
    name: 'ALY',
    attacks: [
        {
            name: 'PICK UP',
            info: 'ALY MOVED MORPHEUS SOMEWHERE ELSE',
            dmg: 10
        },
        {
            name: 'GIVE TREAT',
            info: 'ALY GAVE MORPHEUS A LITTLE TREAT, LOVE IS THE ANSWER',
            dmg: 25},
        {
            name: 'YELL',
            info: 'ALY YELLED AT MORPHEUS',
            dmg: 10
        },
        {
            name: 'THREATEN',
            info: 'ALY RACKED THE NERF GUN MENACINGLY',
            dmg: 15
        },
    ],
    greetings: [
        'HI SWEET BOY',
        'HI HANDSOME',
        'PERFECT BABY ANGEL HIIII',
        'MISTER MISTER'
    ],
    reactions: [
        'WHY ARE YOU BEING EVIL',
        'YOU BITCH',
        'GET OFF OF ME',
        'DO NOT ATTACK ME'
    ],
    pronouns: ['THEY', 'THEM'],
    health: 0,
    select: {
        icon: document.getElementById('aly'),
        text: document.getElementById('aly-name')
    },
    sprite: './assets/sprites/aly.png',
    sounds: {
        pain: [aPain0, aPain1, aPain2],
        speech: [aSpeech0, aSpeech1, aSpeech2, aSpeech3]
    }
}

const emerson = {
    name: 'EMERSON',
    attacks: [
        {
            name: 'DANCE',
            info: 'EMERSON PICKED UP MORPHEUS AND MADE HIM DO A SILLY LITTLE DANCE',
            dmg: 15
        },
        {
            name: 'WHACK',
            info: 'EMERSON WHACKED MORPHEUS WITH ONE OF HIS TOYS',
            dmg: 15
        },
        {
            name: 'NERF GUN',
            info: 'EMERSON SHOT AT MORPHEUS',
            dmg: 15
        },
        {
            name: 'PET',
            info: 'EMERSON PET MORPHEUS SO GOOD',
            dmg: 15
        }
    ],
    greetings: [
        'MORBY!!!',
        'HEY BUBBA',
        'COME ERE!',
        'PSPSPSPSPSPS'
    ],
    reactions: [
        'OW YOU BITCH',
        "WHERE'S THE NERF GUN",
        "YOU'RE BEING A LITTLE JERK",
        'STOP IT'
    ],
    pronouns: ['HE', 'HIM'],
    health: 0,
    select: {
        icon: document.getElementById('emerson'),
        text: document.getElementById('emerson-name')
    },
    sprite: './assets/sprites/emerson.png',
    sounds: {
        pain: [ePain0, ePain1, ePain2],
        speech: [eSpeech0, eSpeech1, eSpeech2, eSpeech3]
    }
}

// char list
const chars = [cooper, jordan, emerson, aly];
// turn list
const turns = [turn0, turn1, turn2, turn3, turn4, turn5, turn6];

// music
const selectMusic = new Audio('./assets/sound/music/charselect.mp3');
selectMusic.loop = true;
selectMusic.volume = 0.25;
const battleMusic = new Audio('./assets/sound/music/battle.mp3');
battleMusic.loop = true;
battleMusic.volume = 0.25;
const victoryMusic = new Audio('./assets/sound/music/victory.mp3');
victoryMusic.volume = 0.25;
const lossMusic = new Audio('./assets/sound/music/loss.mp3');
lossMusic.volume = 0.25;

// sfx
const attackSounds = [hit0, hit1, hit2, hit3, hit4, hit5, hit6, hit7];
for (i = 0; i < attackSounds.length; i++) {
    attackSounds[i] = new Audio(`./assets/sound/sfx/hit${i}.mp3`);
    attackSounds[i].volume = .60;
}
// char sfx
for (let obj of chars) {
    for (i = 0; i < obj.sounds.pain.length; i++) {
        obj.sounds.pain[i] = new Audio(`./assets/sound/${obj.name}/pain${i}.mp3`)
    }
    for (i = 0; i < obj.sounds.speech.length; i++) {
        obj.sounds.speech[i] = new Audio(`./assets/sound/${obj.name}/speech${i}.mp3`)
    }
}
for (i = 0; i < player.sounds.length; i++) {
    player.sounds[i] = new Audio(`./assets/sound/morby/morby${i}.mp3`)
}

/*---state variables---*/

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
let enemy;
let enemyMoveChoice;


/*---cached elements---*/


// character menu background
const selectMenu = document.getElementById('select-menu');
// char select sprites
const charSelectSprites = document.querySelectorAll('.char');
// char select names
const charSelectNames = document.querySelectorAll('.char-names');
// char select title
const charSelectPrompt = document.getElementById('select-menu-msg');
// char select morph
const charSelectMorph = document.getElementById('morpheus');

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
const enemyEl = document.getElementById('enemy');
const enemySpriteEl = document.getElementById('enemy-sprite');
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
// title
const gameTitleEl = document.getElementById('title'); 
// attack sprite div
const atkSpriteDiv = document.getElementById('attack');
const atkSpriteEl = document.getElementById('attack-sprite');
/*---functions---*/

init();
function init() {
    winner = 0;
    turn = -1;
    retryButton.style.visibility = 'hidden';
    for (let item of infoBoxEls) {
        item.style.visibility = 'visible';
    } 
    enemyEl.style.visibility = 'visible';
    playerSpriteEl.style.visibility = 'visible';
    for (let char of chars) {
        char.select.icon.removeEventListener('click', handleEnemyChoice);
        char.select.icon.removeEventListener('mouseover', handleEnemyMouseOver);
        char.select.icon.removeEventListener('mouseout', handleEnemyMouseOut);
        if (char.health < 100) {
            // click => handleEnemyChoice
            char.select.icon.addEventListener('click', handleEnemyChoice);
            // hover => handleEnemyMouseOver
            char.select.icon.addEventListener('mouseover', handleEnemyMouseOver);
            char.select.icon.addEventListener('mouseout', handleEnemyMouseOut);
        } else if (char.health >= 100) {
            char.select.icon.style.filter = 'grayscale(1)';
            char.select.text.style.textDecoration = 'line-through';
        }
    }
    turnNeg1();
}
// turn logic

// turn -1 - player selects target
function turnNeg1() {
    // add top layer background
    selectMusic.removeEventListener('canplaythrough', playMusic);
    selectMusic.currentTime = 0;
    selectMusic.addEventListener('canplaythrough', playMusic);
    selectMenu.style.visibility = 'visible';
    for (let item of charSelectSprites){
        item.style.visibility = 'visible';
    }
    for (let item of charSelectNames){
        item.style.visibility = 'visible';
    }
    charSelectPrompt.style.visibility = 'visible';
    charSelectMorph.style.visibility = 'visible';
    // start music loop
}

// turn 0 - enemy greets morpheus
function turn0() {
    // make textbox visible and menu choices invisible
    selectMusic.pause();
    battleMusic.removeEventListener('canplaythrough', playMusic);
    battleMusic.currentTime = 0;
    battleMusic.addEventListener('canplaythrough', playMusic);
    renderTextBoxEl();
    selectMenu.style.visibility = 'hidden';
    for (let item of charSelectSprites){
        item.style.visibility = 'hidden';
    }
    for (let item of charSelectNames){
        item.style.visibility = 'hidden';
    }
    charSelectPrompt.style.visibility = 'hidden';
    charSelectMorph.style.visibility = 'hidden';
    // reset player health and reset enemy health if they were not previously defeated
    player.health = 100;
    enemy.health = 0;
    playerHealth.value = 100;
    enemyHealth.value = 0;
    // print greeting text
    let randomGreeting = `${enemy.name}: ${enemy.greetings[Math.floor(Math.random() * enemy.greetings.length)]}`
    typeSentence(randomGreeting, textBoxEl)
    // move pawprint to bottom right of menu and only show if textPrinted is true
    waitAndRenderSelectorEl(randomGreeting);
    pickRandomSound(enemy.sounds.speech);
}

// turn 1 - morpheus chooses attack
function turn1() {
    // make textbox invisible and menu choices visible
    renderMenuEls();
    // remove attack sprite animation & choice
    atkSpriteDiv.style.animation = "none";
    atkSpriteDiv.style.animationFillMode = "none";
    atkSpriteEl.setAttribute("src", "none");
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
    menuSelectorEl.style.visibility = 'hidden';
    // make textbox visible and menu choices invisible
    renderTextBoxEl();
    // print action text
    let actionText = `${moveChoice.info} ${enemy.name}`;
    // apply and animate damage received
    enemy.health += damageToApply;
    enemyHealth.value += damageToApply;
    pain(enemyEl);
    // play attack sprite animation
    atkSpriteDiv.style.animation = "attackAnimate .6s linear";
    atkSpriteDiv.style.animationFillMode = "forwards";
    typeSentence(actionText, textBoxEl);
    waitAndRenderSelectorEl(actionText);
    // play random attack sound
    pickRandomSound(attackSounds);
    pickRandomSound(enemy.sounds.pain);
}

// turn 3 - enemy reaction text to morpheus' attack
function turn3() {
    // make textPrinted false
    textPrinted = false;
    menuSelectorEl.style.visibility = 'hidden';
    // clear text
    renderTextBoxEl();
    // if winner = true print win message, else print reaction text
    checkWinner();
    let reactionText;
    if (winner === 1) {
        reactionText = `${enemy.name} GOT SO PISSED OFF THAT ${enemy.pronouns[0]} LEFT. YOU WIN?`
    } else if (winner === 0){
        reactionText = `${enemy.name}: ${enemy.reactions[Math.floor(Math.random() * enemy.reactions.length)]}`;
        pickRandomSound(enemy.sounds.speech);
    }
    typeSentence(reactionText, textBoxEl);
    waitAndRenderSelectorEl(reactionText);
}

// turn 4 - enemy chooses attack
function turn4() {
    // make textPrinted false
    textPrinted = false;
    menuSelectorEl.style.visibility = 'hidden';
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
    menuSelectorEl.style.visibility = 'hidden';
    renderTextBoxEl();
    // print action text
    let enemyActionText = enemyMoveChoice.info;
    // apply and animate damage received
    player.health -= enemyMoveChoice.dmg;
    playerHealth.value -= enemyMoveChoice.dmg;
    pain(playerSpriteEl);
    typeSentence(enemyActionText, textBoxEl);
    waitAndRenderSelectorEl(enemyActionText);
    pickRandomSound(attackSounds);
}

// turn 6 - morpheus reaction text to enemy attack
function turn6() {
    // make textPrinted false
    textPrinted = false;
    menuSelectorEl.style.visibility = 'hidden';
    renderTextBoxEl();
    // if winner = true print win message, else print reaction text
    checkWinner();
    let reactionText;
    if (winner === -1) {
        reactionText = `MORPHEUS IS NO LONGER EXCITED AND IS GONNA TAKE A NAP.`
    } else if (winner === 0){
        reactionText = `MORPHEUS: ${player.reactions[Math.floor(Math.random() * player.reactions.length)]}`
        pickRandomSound(player.sounds);
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

// handle enemy choice
function handleEnemyChoice(evt) {
    // change enemy value
    enemy = eval(evt.target.id);
    // change enemy sprite
    enemySpriteEl.setAttribute("src", enemy.sprite);
    // advance to turn 0
    turn = 0;
    turn0();
}

// handle hover over enemy
function handleEnemyMouseOver(evt) {
    evt.target.style.height = '220px';
    evt.target.style.transition = 'height 300ms ease';
}

function handleEnemyMouseOut(evt) {
    evt.target.style.height = '200px';
}


function handleMoveChoice(evt) {
    let evtId = evt.target.getAttribute('id');
    let evtIdArr = evtId.split('')
    attackId = parseInt(evtIdArr[evtIdArr.length - 1]);
    moveChoice = player.attacks[attackId];
    damageToApply = moveChoice.dmg;
    atkSpriteEl.setAttribute("src", moveChoice.sprite);
    turn += 1;
    turns[turn]();
}

function checkWinner() {
    if (enemy.health >= 100) {
        winner = 1;
        enemyEl.style.visibility = 'hidden';
        battleMusic.pause();
        victoryMusic.removeEventListener('canplaythrough', playMusic);
        victoryMusic.currentTime = 0;
        victoryMusic.addEventListener('canplaythrough', playMusic);
    } else if (player.health <= 0) {
        winner = -1;
        playerSpriteEl.style.visibility = 'hidden';
        battleMusic.pause();
        lossMusic.removeEventListener('canplaythrough', playMusic);
        lossMusic.currentTime = 0;
        lossMusic.addEventListener('canplaythrough', playMusic);
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
        gameTitleEl.style.backgroundColor = 'rgba(0,0,0,0)';
        gameTitleEl.style.color = 'rgba(0,4,125,255)'
    } else if (morphBoyMode === 1) {
        gameWindow.style.filter = 'none';
        bodyEl.style.backgroundColor = 'rgba(58, 58, 58,255)';
        gameTitleEl.style.backgroundColor = '#23232b';
        gameTitleEl.style.color = '#ffffff'
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

// async function attackAnimation(target) {
    // add attack animation
    // await animation time
    // remove attack animation
// }

// async function playerAttackSprite() {
    // pass move selection
    // change image for attack sprite
// }

// sound

function playMusic(evt) {
    evt.target.play();
}

function pickRandomSound(soundArr) {
    let randomInt = Math.abs((Math.floor(Math.random() * soundArr.length)) - 1);
    soundArr[randomInt].play();
}
// text print fn
async function waitAndRenderSelectorEl(str) {
    const timeToWait = (str.length + 1) * 32;
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
        // 
        typingTarget.append(letters[i]);
        i++
    }
    return;
}

// wait promise constructor
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}



/*---event listeners---*/
// char choices

// menu choices
for (let option of menuOptionEls) {
    option.addEventListener('click', handleMoveChoice);
}
// textbox advance
textBoxEl.addEventListener('click', advanceTurn);
menuEl.addEventListener('click', advanceTurn);
menuSelectorEl.addEventListener('click', advanceTurn);
// morph boy mode button
morphBoyModeEl.addEventListener('click', toggleMorphBoyMode);
retryButton.addEventListener('click', init);
