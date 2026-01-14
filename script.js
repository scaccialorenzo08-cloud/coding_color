console.log("inizio controllo esecuzione");

let d = new Date();
document.getElementById("saluto").innerHTML = "Oggi è il " + d;


function elabora() {

    let numeri = document.getElementById("inNumber").value;
    let testo = document.getElementById("inText").value;
    let colori = numeri.split(" ");

    
    if (colori.length !== 3) {
        document.getElementById("error").innerHTML =
            "Errore: inserisci 3 numeri";
        return;
    }

    let r = Number(colori[0]);
    let g = Number(colori[1]);
    let b = Number(colori[2]);

    
    if (
        r < 0 || r > 255 ||
        g < 0 || g > 255 ||
        b < 0 || b > 255 ||
        isNaN(r) || isNaN(g) || isNaN(b)
    ) {
        document.getElementById("error").innerHTML =
            "Errore: il numero deve essere compreso tra 0 e 255";
        return;
    }

    
    document.getElementById("error").innerHTML = "";
    document.getElementById("outText").innerHTML = testo;
    document.getElementById("outText").style.color = `rgb(${r}, ${g}, ${b})`;
}

function reset() {
    // cancella caselle di input
    document.getElementById("inNumber").value = "";
    document.getElementById("inText").value = "";
    // cancella output ed errori
    document.getElementById("outText").innerHTML = "Output";
    document.getElementById("error").innerHTML = "";
    document.getElementById("outText").innerHTML = "";
}
