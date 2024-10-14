let first = document.getElementById('first')

first.addEventListener('click', function(){
    alert("Alert.")

})

const second_button = document.getElementById('second');
const heading = document.querySelector('h3');

second_button.addEventListener('click', function(){
    heading.style.color = "cyan";
    second_button.textContent = "Změnila se barva!";
});


    document.getElementById("third").addEventListener("click", function() {
        document.getElementById("nadpis").innerText = "Změnil se text!";

})

function ShowText() {
    var p = document.createElement("p");
    p.innerText = "Ahoj, tohle je text, který hledáš!";
    document.getElementById('text').appendChild(p);
}

function displayMessage() {
    let name = document.getElementById("name").value;
    if (name) {
        alert("Vítej, " + name + "!")
    }
}

function changeHeadingText() { document.getElementById('heading').textContent = 'Změněno'; }

function resetHeadingText() { document.getElementById('heading').textContent = 'Úkol č. 7'; }

let time = document.getElementById('time');
const stime =  document.getElementById('stime');

time.addEventListener('click', function(){
    const timern = new Date();
    const realtime = timern.toLocaleTimeString();
    stime.textContent = 'Zdejší čas: ' + realtime;
})

let date = document.getElementById('date');
const sdate = document.getElementById('sdate');

date.addEventListener('click', function(){
    const datern = new Date();
    const realdate = datern.toLocaleDateString();
    sdate.textContent = 'Zdejší datum: ' + realdate;
})