function buttonEncrip() {
    var palabra = document.getElementById("texto").value;
    var palaminu = palabra.toLowerCase();
    document.getElementById("munie").style.display = "none";
    document.getElementById("letras").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("textoRH").style.display = "block";
    document.getElementById("textoLH").style.display = "grid";
    document.getElementById("copybutton").style.display = "block";


    encriptar(palaminu);

    function encriptar(x) {

        if (x.includes('e') || x.includes('i') || x.includes('a') || x.includes('o') || x.includes('u')) {
            palaminu = palaminu.replaceAll("e", "enter");
            palaminu = palaminu.replaceAll("i", "imes");
            palaminu = palaminu.replaceAll("a", "ai");
            palaminu = palaminu.replaceAll("o", "ober");
            palaminu = palaminu.replaceAll("u", "ufat");
        }
        document.getElementById('textoRH').value = palaminu;
        document.getElementById('textoLH').value = palaminu;

    }

}

function buttonDesencrip() {
    var palabra = document.getElementById("texto").value;
    //var palabraRH = document.getElementById("textoRH").value;  
    var palaminu = palabra.toLowerCase();
    //var textchange;


    document.getElementById("munie").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("textoRH").style.display = "block";
    document.getElementById("textoLH").style.display = "block";
    document.getElementById("copybutton").style.display = "block";

    desencriptar(palaminu);

    function desencriptar(x) {

        if (x.includes('enter') || x.includes('imes') || x.includes('ai') || x.includes('ober') || x.includes('u')) {
            palaminu = palaminu.replaceAll("enter", "e");
            palaminu = palaminu.replaceAll("imes", "i");
            palaminu = palaminu.replaceAll("ai", "a");
            palaminu = palaminu.replaceAll("ober", "o");
            palaminu = palaminu.replaceAll("ufat", "u");
        }
        document.getElementById('textoRH').value = palaminu;
        document.getElementById('textoLH').value = palaminu;


    }

}
function copy() {
    let copyText = document.querySelector("#textoLH");
    copyText.select();
    document.execCommand("copy");
}

