function calcularInteres() {
    var inicialm = parseFloat(document.getElementById("monto-inicial").value);
    var montoTotal = inicialm;

    for (var i = 0; i < 12; i++) {
        montoTotal += 250;
        var interesMensual = montoTotal * 0.0125;
        montoTotal += interesMensual;
    }

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "El monto total a fin de año es: Bs " + montoTotal.toFixed(2);
}