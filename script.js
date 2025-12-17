console.log("inizio controllo esecuzione");

let d = new Date();
document.getElementById("saluto").innerHTML = "Oggi è il " + d;

function elabora() {
    
    let numero = document.getElementById("inNumber").value;
    let testo = document.getElementById("inText").value;

    
    alert("Il testo inserito è: " + testo);

    
    if (numero < 0 || numero > 255) {
        document.getElementById("error").innerHTML =
            "Errore: il numero deve essere compreso tra 0 e 255";
        document.getElementById("outText").innerHTML = "Output";
    } else {
        document.getElementById("outText").innerHTML =
            "Numero inserito: " + numero;
        document.getElementById("error").innerHTML = "";
    }
}

function reset() {
    // cancella caselle di input
    document.getElementById("inNumber").value = "";
    document.getElementById("inText").value = "";

    // cancella output ed errori
    document.getElementById("outText").innerHTML = "Output";
    document.getElementById("error").innerHTML = "";
}
