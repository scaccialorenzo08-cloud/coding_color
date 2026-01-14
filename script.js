console.log("inizio controllo esecuzione");

let d = new Date();
document.getElementById("saluto").innerHTML = "Oggi è il " + d;



let colori=[]
let i=0;//conta il numero dei numeri inseriti


function  elabora() {
    
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
        colori.push(numero);//inserisce numero dentro array colori
        console.log(colori);
        document.getElementById("outText").innerHTML += "<br> i colori sono " + colori
        i++;
        if(i==3) {
            document.getElementById("outText").innerHTML =testo
            document.getElementById("outText").style.color = `rgb(${colori[0]}, ${colori[1]}, ${colori[2]})`;
        }
    }
}

function reset() {colori = [];
    // cancella caselle di input
    document.getElementById("inNumber").value = "";
    document.getElementById("inText").value = "";
    document.getElementById("outText").value="";
    i=0

    // cancella output ed errori
    document.getElementById("outText").innerHTML = "Output";
    document.getElementById("error").innerHTML = "";
    document.getElementById("outText").innerHTML = "";//reset del colore
}
