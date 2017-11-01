newGame()
function newGame() {
    mhealth = 100
    uhealth = 100
    hits = 0
    update()
}
// update ----------------------------------------------------------
function update() {
    document.getElementById('uhealth').innerHTML = uhealth
    document.getElementById('mhealth').innerHTML = mhealth
    document.getElementById('hits').innerHTML = hits
    if (mhealth <= 0 || uhealth <=0) {
        endGame()
    }
}
// attack functions ---------------------------------------
function slap() {
    mhealth -= 1
    hits++
    update()
}
function spank() {
    mhealth -= 5
    hits++
    update()
}
function spike() {
    mhealth -= 10
    hits++
    update()
}
// item functions -------------------------------------------
function banana() {
    mhealth += 7
    update()
}
function feces() {
    var num = Math.random()
    if(num >= .4)
    mhealth -= 20
    update()
}
function taunt() {
    var num = Math.random()
    if(num >= .7)
    uhealth -= 10
    update()
}
function endGame() { 
    if(mhealth <= 0){
        alert("Nice lol, you killed the monkey.");
    } else {
    alert("Well, you lost. To a monkey.");
    }
    mhealth = 100
    uhealth = 100
    hits = 0
}