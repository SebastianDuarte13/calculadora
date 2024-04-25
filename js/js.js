var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }

        if (btntext == 'BIN' || btntext == 'OCT' || btntext == 'HEX' || btntext == 'DEC') {
            convertirNumero(btntext);
        } else {
            screen.value += btntext;
        }
    });
}

// Función para convertir el número en la pantalla
function convertirNumero(base) {
    var numero = parseFloat(screen.value);
    var resultado;

    switch (base) {
        case 'BIN':
            resultado = numero.toString(2); // Convertir a binario
            break;
        case 'OCT':
            resultado = numero.toString(8); // Convertir a octal
            break;
        case 'HEX':
            resultado = numero.toString(16); // Convertir a hexadecimal
            break;
        case 'DEC':
            resultado = numero.toString(); // Convertir a decimal (sin cambios)
            break;
        default:
            resultado = "Error";
    }

    screen.value = resultado;
}

// Otras funciones matemáticas
function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}
