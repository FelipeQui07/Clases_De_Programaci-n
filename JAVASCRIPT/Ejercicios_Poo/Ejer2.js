class CuentaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }

    set depositar(monto) {
        this.saldo += monto;  // Aumenta el saldo directamente
    }

    set retirar(monto) {
        if (monto > this.saldo) {
            alert("Fondos insuficientes. No puedes retirar más de lo que tienes.");
        } else {
            this.saldo -= monto;  // Resta el saldo directamente
        }
    }

    get verSaldoActual() {
        return this.saldo;  // Simplemente devuelve el saldo actual
    }
}

// Prueba la clase
const cuenta = new CuentaBancaria(500);

cuenta.depositar = 500;
cuenta.retirar = 200;  // Usamos el setter para retirar dinero

document.write(`El saldo actual es: ${cuenta.verSaldoActual}`);



