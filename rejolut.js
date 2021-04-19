let crossEl = document.getElementById("cross");
let scanEl = document.getElementById("scan");
let sidebarEl = document.getElementById("sidebar4");
let moneyEl = document.getElementById("moneyman");
let crosssymEl = document.getElementById("crosssymbol");
let crosssymEl1 = document.getElementById("crosssymbol12");
let walletEl = document.getElementById("wallet");
let box1 = document.getElementById("profilebox1");
let box12 = document.getElementById("profilebox4");
let readEl = document.getElementById("read");
let upEl = document.getElementById("arrowup");
let downEl = document.getElementById("arrowdown");
let buyEl = document.getElementById("buy");
let readEl1 = document.getElementById("read1");
let buyEl1 = document.getElementById("buy1");
let scanqrEl = document.getElementById("scanqr");
let linksEl = document.getElementById("profiledown");
moneyEl.addEventListener("click", function() {
    box12.classList.toggle("display");
})
crosssymEl1.addEventListener("click", function() {
    box12.classList.toggle("display");
})
crossEl.addEventListener("click", function() {

    linksEl.classList.add("display");
})
scanqrEl.addEventListener("click", function() {

    scanEl.classList.toggle("display");
})
buyEl1.addEventListener("click", function() {

    readEl1.classList.toggle("display");
})
buyEl.addEventListener("click", function() {

    readEl.classList.toggle("display");
})
walletEl.addEventListener("click", function() {
    sidebarEl.classList.remove("bar1");
    crossEl.classList.toggle("bar1");

})
crosssymEl.addEventListener("click", function() {
    sidebarEl.classList.add("bar1");

})
upEl.addEventListener("click", function() {
    downEl.classList.toggle("display");
    upEl.classList.toggle("display");
    box1.classList.toggle("display");
})
downEl.addEventListener("click", function() {
    upEl.classList.toggle("display")
    downEl.classList.toggle("display")
    box1.classList.toggle("display")
})
