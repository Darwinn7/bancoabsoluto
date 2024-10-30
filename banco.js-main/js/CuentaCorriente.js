import Cuenta from "./Cuentas";

class CuentaCorriente extends Cuenta{
    constructor(nroDeCuenta,saldo,dineroAtrasferir){
        super(nroDeCuenta,saldo);
        this.dineroAtrasferir = dineroAtrasferir;
    }
    realizarTrasferencia(){
        if(this.saldo >= this.dineroAtrasferir){
            console.log("no se puede realizar la trasferencia")
        }else{  
            console.log(`Se ha realizado la transferencia de ${this.dineroAtrasferir}`)
        }
   }
}
