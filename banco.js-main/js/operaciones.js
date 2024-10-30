let clientes = [];
let numeroCuenta = Math.floor(Math.random() * (10 ** 12 - 10 ** 10) + 10 ** 10);
document.getElementById("numeroCuenta").value = numeroCuenta;

function crearCliente(event) {
    event.preventDefault();
    let nombreCliente = document.getElementById("nombreCliente").value;
    let apellidoCliente = document.getElementById("apellidoCliente").value;
    let direccionCliente = document.getElementById("direccionCliente").value;
    let identificacionCliente = document.getElementById("identificacionCliente").value;

    let cliente = {
        nombre: nombreCliente,
        apellido: apellidoCliente,
        direccion: direccionCliente,
        identificacion: identificacionCliente,
        cuentas: []
    };

    clientes.push(cliente);
    alert("Cliente creado con éxito!");
}

function crearCuenta(event) {
    event.preventDefault();
    let tipoCuenta = document.getElementById("tipoCuenta").value;

    let cuenta = {
        tipo: tipoCuenta,
        saldo: 0
    };

    clientes[clientes.length - 1].cuentas.push(cuenta);
    alert("Cuenta creada con éxito!");
}

function consultarSaldo() {
    let saldo = clientes[clientes.length - 1].cuentas[0].saldo;
    alert(`Saldo disponible: ${saldo}`);
}

function consignar(event) {
    event.preventDefault();
    let montoConsignar = document.getElementById("montoConsignar").value;
    let clienteActual = clientes[clientes.length - 1];
    let cuentaActual = clienteActual.cuentas[0];
    cuentaActual.saldo += parseInt(montoConsignar);
    alert("Consignación realizada con éxito!");
}

function retirar(event) {
    event.preventDefault();
    let montoRetirar = document.getElementById("montoRetirar").value;
    let clienteActual = clientes[clientes.length - 1];
    let cuentaActual = clienteActual.cuentas[0];
    if (cuentaActual.saldo >= parseInt(montoRetirar)) {
        cuentaActual.saldo -= parseInt(montoRetirar);
        alert("Retiro realizado con éxito!");
    } else {
        alert("No tiene suficiente saldo para realizar el retiro.");
    }
<<<<<<< HEAD
}


///
function handleLogin(event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    // Por simplicidad, redirigimos a la página de operaciones
    window.location.href = 'operaciones.html';
}

function handleRegister(event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica para registrar el usuario
    // Por simplicidad, cerramos el modal y mostramos un mensaje
    alert('Usuario registrado con éxito!');
    document.getElementById("registrarModal").modal('hide');
=======
>>>>>>> 75eeb028e7c11e62c60dbd1c358884f3e6cdb1b8
}