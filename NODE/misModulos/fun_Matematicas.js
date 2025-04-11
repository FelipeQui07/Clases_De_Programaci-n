const nombre = "Copito";

function sumar(n1, n2){
    return n1 + n2;
}

function restar(n1, n2){
    return n1 - n2;
}

function multiplicar(n1, n2){
    return n1 * n2;
}

module.exports = {
    nombre:nombre,
    sumar: sumar,
    restar: restar,
    dividir: function(n1, n2){
        return n1 / n2;
    },
    resto: function(n1, n2){
        return n1 % n2;
    },
    multiplicar: multiplicar
};