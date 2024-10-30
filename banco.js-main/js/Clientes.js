class Cliente{
    constructor(nombre,apellido,direccion,numId,){
        this.nombre=nombre;
        this.apellido=apellido;
        this.direccion=direccion;
        this.numId=numId

    }
    imprimirDatos(){
        console.log("----------------------------")
        console.log("---DATOS DEl cliente son----")
        console.log("----------------------------")
        console.log(`nombre------------->${this.nombre}`)
        console.log(`apellidos------->${ this.apellido}`)
        console.log(`direccio-------->${this.direccion}`)
        console.log(`numero identificacion>${this.edad}`)
        console.log(`Generos------------>${this.genero}`)
        console.log(`\n`)
        
    }

    consultarSaldo() {
        console.log(`El saldo actual es: ${this.saldo}`);
        return this.saldo;
    }

    realizarDeposito(cantidad) {
        this.saldo += cantidad;
        console.log(`Has depositado: ${cantidad}. Nuevo saldo: ${this.saldo}`);
        return this.saldo;
    }

    realizarRetiro(cantidad) {
        if (cantidad > this.saldo) {
            console.log("Fondos insuficientes para realizar el retiro.");
        } else {
            this.saldo -= cantidad;
            console.log(`Has retirado: ${cantidad}. Nuevo saldo: ${this.saldo}`);
        }
        return this.saldo;
    }
}

