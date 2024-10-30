import Cuenta from "./Cuentas";

class CuentaAhorros extends Cuenta {
    constructor(nroDeCuenta, saldo) {
        super(nroDeCuenta, saldo);
    }

    calcularInteres() {
        return this.saldo * 0.20; // Calcula el 20% del saldo
    }
}

