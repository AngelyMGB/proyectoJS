var cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234" },
    { nombre: "Gera", saldo: 290, password: "5678" },
    { nombre: "Maui", saldo: 67, password: "91011" }
];

var cuentaSeleccionada = null;

function seleccionarCuenta() {
    var nombre = prompt("Ingrese el nombre de la cuenta (Mali - Gera - Maui):");
    cuentaSeleccionada = cuentas.find(cuenta => cuenta.nombre === nombre);
    if (cuentaSeleccionada) {
        var password = prompt("Ingrese el password:");
        if (password === cuentaSeleccionada.password) {
            mostrarOpciones();
        } else {
            alert("Password incorrecto. Inténtelo nuevamente.");
            seleccionarCuenta();
        }
    } else {
        alert("Cuenta no encontrada. Inténtelo nuevamente.");
        seleccionarCuenta();
    }
}

function mostrarOpciones() {
    var opcion = prompt("Seleccione una opción:\n1. Consultar saldo\n2. Ingresar monto\n3. Retirar monto\n4. Regresar a la página inicial");
    switch (opcion) {
        case "1":
            consultarSaldo();
            break;
        case "2":
            ingresarMonto();
            break;
        case "3":
            retirarMonto();
            break;
        case "4":
            regresarPaginaInicial();
            break;
        default:
            alert("Opción no válida. Inténtelo nuevamente.");
            mostrarOpciones();
            break;
    }
}

function consultarSaldo() {
    alert("Su saldo actual es: $" + cuentaSeleccionada.saldo);
    mostrarOpciones();
}

function ingresarMonto() {
    var monto = parseFloat(prompt("Ingrese el monto a ingresar:"));
    if (cuentaSeleccionada.saldo + monto > 990) {
        alert("No puede tener más de $990 en la cuenta.");
    } else {
        cuentaSeleccionada.saldo += monto;
        alert("Monto ingresado: $" + monto + "\nNuevo saldo: $" + cuentaSeleccionada.saldo);
    }
    mostrarOpciones();
}

function retirarMonto() {
    var monto = parseFloat(prompt("Ingrese el monto a retirar:"));
    if (cuentaSeleccionada.saldo - monto < 10) {
        alert("No puede tener menos de $10 en la cuenta.");
    } else {
        cuentaSeleccionada.saldo -= monto;
        alert("Monto retirado: $" + monto + "\nNuevo saldo: $" + cuentaSeleccionada.saldo);
    }
    mostrarOpciones();
}

function regresarPaginaInicial() {
    cuentaSeleccionada = null;
    alert("Regresando a la página inicial.");
}