// add the score displays as variable objects
let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

let counter = 0;


// Home score 
let currContent = (homeScore.textContent == undefined) ? 0 : homeScore.textContent;
let homescore = parseInt(currContent);

// console.log(homeScore)
// console.log(currContent)
// console.log(homescore)
function updateHome() {
    currContent = homeScore.textContent;
    homescore = parseInt(currContent);
}
// add the button listers for Home

document.getElementById('homeinc1').addEventListener('click', homeInc1)
document.getElementById('homeinc2').addEventListener('click', homeInc2)
document.getElementById('homeinc3').addEventListener('click', homeInc3)

function homeInc1() {
    updateHome()
    homeScore.textContent = homescore + 1;
}

function homeInc2() {
    updateHome()
    homeScore.textContent = homescore + 2;
}
function homeInc3() {
    updateHome()
    homeScore.textContent = homescore + 3;
}

// Guest Score
let guestContent = guestScore.textContent;
let guestval = parseInt(guestContent);

function updateGuest() {
    guestContent = guestScore.textContent;
    guestval = parseInt(guestContent);
}

// add the buttong listeners for Guest

document.getElementById('guestinc1').addEventListener('click', guestInc1)
document.getElementById('guestinc2').addEventListener('click', guestInc2)
document.getElementById('guestinc3').addEventListener('click', guestInc3)

function guestInc1() {
    updateGuest()
    guestScore.textContent = guestval + 1
    // console.log('guest + 1')
}
function guestInc2() {
    updateGuest()
    guestScore.textContent = guestval + 2
    // console.log('guest + 2')
}
function guestInc3() {
    updateGuest()
    guestScore.textContent = guestval + 3
}

// Handling quarter number
document.getElementById('end-quarter').addEventListener('click', endQuarter)

function endQuarter(){
    if (counter == 4){
        // console.log('enter here')
        homeScore.textContent = '0'
        guestScore.textContent = '0'
        counter = 0;
        document.getElementById('log').textContent = '';
        document.getElementById('quarterNo').textContent = 'Quarter : 1'
        return;
    }
    // console.log('else part')
    counter++;
    let log = document.getElementById('log');
    log.textContent += '( ' + homeScore.textContent + ', ' + guestScore.textContent + ' ) '
    if (counter != 4)
        document.getElementById('quarterNo').textContent = 'Quarter : ' + (counter+1)
    else
        document.getElementById('quarterNo').textContent = 'Game End'
}