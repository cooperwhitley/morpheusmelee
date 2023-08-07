/*---constants---*/
// store menu option divs in an array
const menuOptionDivs = [];
for (i = 0; i <= 3; i++) {
    menuOptionDivs.push(document.getElementById(`option-${i}`));
}
const actions = [
    "BITE",
    "SCRATCH",
    "LUNGE",
    "SWIPE"
];



/*---state variables---*/



/*---cached elements---*/



/*---functions---*/

// deploy action titles to menu option divs
menuOptionDivs.forEach((option) => {
    option.innerText = actions[menuOptionDivs.indexOf(option)];
});


/*---event listeners---*/

