console.log("inizio controllo esecuzione");

let d = new Date();
console.log(d);

document.getElementById('saluto').innerHTML = "Oggi è il " + d;

// array colori
let colori = [];

function elabora() {
    let numero = document.getElementById('inNumber').value;
    alert("il numero inserito è " + numero);

    let testo = document.getElementById('inText').value;
    console.log(testo);

    if (numero > 255 || numero < 0) {
        alert("non è corretto");
        document.getElementById('error').innerHTML = numero;
    } else {
        // nuovo alert con il testo della seconda casella
        alert("Il testo inserito è: " + testo);

        document.getElementById('outText').innerHTML = numero;

        colori.push(numero);
        console.log(colori);
    }
}

function reset() {
    document.getElementById('inNumber').value = "";
    document.getElementById('inText').value = "";

    // ripristina la scritta Output
    document.getElementById('outText').innerHTML = "Output";
}
