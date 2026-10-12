function calcular() {
    let pesoInput = document.getElementById("peso-kg").value.replace(",", ".");
    let alturaInput = document.getElementById("altura-m").value.replace(",", ".");
    let peso = parseFloat(pesoInput);
    let altura = parseFloat(alturaInput);
    let sexoF = document.getElementById("feminino");
    let sexoM = document.getElementById("masculino");
    let resultImc = document.getElementById("resultado-imc");
    let pesoIdeal = document.getElementById("peso-ideal");
    let classificacao = document.getElementById("classifica");

    resultImc.value = "";
    pesoIdeal.value = "";
    classificacao.textContent = "";

    if (isNaN(peso) || isNaN(altura)) {
        alert("Digite somente valores válidos para peso e altura!");
        return;
    }
    if (peso <= 0 || altura <= 0) {
        alert("Peso e altura devem ser maiores que zero!");
        return;
    }
    if (!sexoF.checked && !sexoM.checked) {
        alert("Selecione o sexo!");
        return;
    }

    let imc = peso / (altura * altura);
    resultImc.value = imc.toFixed(2);

    let tipo;
    if (sexoF.checked) {
        if (imc < 19) {
            tipo = "Abaixo do peso";
        } else if (imc < 23.9) {
            tipo = "Peso normal";
        } else if (imc < 28.9) {
            tipo = "Obesidade leve";
        } else if (imc < 38.9) {
            tipo = "Obesidade moderada";
        } else {
            tipo = "Obesidade Mórbida";
        }
    } else {
        if (imc < 20) {
            tipo = "Abaixo do peso";
        } else if (imc < 24.9) {
            tipo = "Peso normal";
        } else if (imc < 29.9) {
            tipo = "Obesidade leve";
        } else if (imc < 39.9) {
            tipo = "Obesidade moderada";
        } else {
            tipo = "Obesidade Mórbida";
        }
    }
    classificacao.textContent = `Sua classificação: ${tipo}!`;

    let alturaCm = altura * 100;
    let ideal;
    if (sexoF.checked) {
        ideal = 52 + (0.65 * (alturaCm - 152.4));
    } else {
        ideal = 52 + (0.75 * (alturaCm - 152.4));
    }
    pesoIdeal.value = ideal.toFixed(2) + " kg";
}

function limpar() {
    document.getElementById("peso-kg").value = "";
    document.getElementById("altura-m").value = "";
    document.getElementById("resultado-imc").value = "";
    document.getElementById("peso-ideal").value = "";
    document.getElementById("feminino").checked = false;
    document.getElementById("masculino").checked = false;
    document.getElementById("classifica").textContent = "";
    document.getElementById("peso-kg").focus();
}