function calcularDatas() {
    let diaNasc = document.getElementById("dia-nasc").value;
    let mesNasc = parseInt(document.getElementById("mes-nasc").value);
    let anoNasc = parseInt(document.getElementById("ano-nasc").value);
    let signo;

    if (((mesNasc == 12) && (diaNasc >= 22)) ||(mesNasc == 1 && diaNasc <= 20)) {
        signo = "Capricórnio";
    }
    else if ((mesNasc == 1 && diaNasc >= 21) ||(mesNasc == 2 && diaNasc <= 19)) {
        signo = "Aquário";
    }
    else if ((mesNasc == 2 && diaNasc >= 20) ||(mesNasc == 2 && diaNasc <= 20)) {
        signo = "Peixes";
    }
    else if ((mesNasc == 3 && diaNasc >= 21) ||(mesNasc == 4 && diaNasc <= 20)) {
        signo = "Áries";
    }
    else if ((mesNasc == 4 && diaNasc >= 21) ||(mesNasc == 5 && diaNasc <= 20)) {
        signo = "Touro";
    }

    else if ((mesNasc == 5 && diaNasc >= 21) ||(mesNasc == 6 && diaNasc <= 20)) {
        signo = "Gêmeos";
    }
    else if ((mesNasc == 6 && diaNasc >= 21) ||(mesNasc == 7 && diaNasc <= 22)) {
        signo = "Câncer";
    }
    else if ((mesNasc == 7 && diaNasc >= 23 ) || (mesNasc == 8 && diaNasc >= 22 )){
       signo = "Leão" 
    }
    else if ((mesNasc == 8 && diaNasc == 23 ) && (mesNasc == 9 && diasNasc >=22 )){
        signo = "Virgem"
    }





    let dianasc = new Array();
    dianasc[0] = "um domingo";
    dianasc[1] = "uma segunda";
    dianasc[2] = "uma terça";
    dianasc[3] = "uma quarta";
    dianasc[4] = "uma quinta";
    dianasc[5] = "uma sexta";
    dianasc[6] = "um sábado";


    let nomeMes = new Array();
    nomeMes[0] = "Janeiro";
    nomeMes[1] = "Fevereiro";
    nomeMes[2] = "Março";
    nomeMes[3] = "Abril";
    nomeMes[4] = "Maio";
    nomeMes[5] = "Junho";
    nomeMes[6] = "Julho";
    nomeMes[7] = "Agosto";
    nomeMes[8] = "Setembro";
    nomeMes[9] = "Outubro";
    nomeMes[10] = "Novembro";
    nomeMes[11] = "Dezembro";



}