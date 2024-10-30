class Cuenta{
    constructor(nroDeCuenta,saldo){
        this.nroDeCuenta=nroDeCuenta;
        this.saldo=saldo;
    }
    consultarSaldo(){
        console.log(`su saldo es de ->${this.saldo}`)
    }
    realizarDepocito(){
        console.log("depocito echo con exito")
    }
    realizarRetiro(){
        console.log("retiro echo con exito")
    }
}
export default Cuenta