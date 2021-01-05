function calcular() {

    var nome = document.getElementById("nome").value; 
    var salarioBruto = document.getElementById("salarioBruto").value;
    var linhaTabela = document.createElement("tr");
    var colunaSalarioBruto = document.createElement("td");
    var colunaNome = document.createElement("td");
    var colunaInss = document.createElement("td");
    var colunaIrpf = document.createElement("td");
    var colunaSalarioLiquido = document.createElement("td");
    colunaSalarioLiquido.style.borderLeft="none"
  
    colunaNome.innerText = nome;
    colunaSalarioBruto.innerText = salarioBruto;
    colunaInss.innerText = calculoINSS(salarioBruto);
    colunaIrpf.innerText = calculoIRPF(salarioBruto);
    colunaSalarioLiquido.innerText = calculaSalarioLiquido(salarioBruto);
  
    linhaTabela.appendChild(colunaNome);
    linhaTabela.appendChild(colunaSalarioBruto);
    linhaTabela.appendChild(colunaInss);
    linhaTabela.appendChild(colunaIrpf);
    linhaTabela.appendChild(colunaSalarioLiquido);
  
    var element = document.getElementById("tabela");
    element.appendChild(linhaTabela);
  }
  
function calculoINSS(salarioBruto){
    var valorDescontoINSS

    if(salarioBruto<=1045){
        valorDescontoINSS = (salarioBruto * 0.075).toFixed(2);
    }

    if(salarioBruto > 1045 && salarioBruto <= 2089.60){
        salarioBruto = (salarioBruto - 1045);
        valorDescontoINSS = (78.375 + (salarioBruto * 0.09)).toFixed(2);
    }

    if(salarioBruto > 2089.60 && salarioBruto <= 3134.41){
        salarioBruto = (salarioBruto - 2089.60 );
        valorDescontoINSS = (78.375 + 94.014 + (salarioBruto * 0.12)).toFixed(2);
    }

    if(salarioBruto > 3134.41 && salarioBruto <= 6101.06){
        salarioBruto = (salarioBruto - 3134.41 );
        valorDescontoINSS = (78.375 + 94.014 + 125.3772 + (salarioBruto * 0.14)).toFixed(2);
    }

    if(salarioBruto > 6101.06){
        valorDescontoINSS = 713.10;
    }

    return Number(valorDescontoINSS)
}
  
function calculoIRPF(salarioBruto) {
    var valorDescontoIRPF;

    if(salarioBruto<=1903.98){
        valorDescontoIRPF = 0;
    }

    if (salarioBruto > 1903.98 && salarioBruto <= 2826.65) {
        valorDescontoIRPF = ((salarioBruto * 0.075) - 142.80).toFixed(2);
    }

    if (salarioBruto > 2826.65 && salarioBruto <= 3751.05) {
        valorDescontoIRPF = ((salarioBruto * 0.15) - 354.80).toFixed(2);
    }

    if (salarioBruto > 3751.05 && salarioBruto <= 4664.68) {
        valorDescontoIRPF = ((salarioBruto * 0.225) - 636.13).toFixed(2);
    }

    if (salarioBruto > 4664.68) {
        valorDescontoIRPF = ((salarioBruto * 0.275) - 869.36).toFixed(2);
    }

    return Number(valorDescontoIRPF)
}

function calculaSalarioLiquido(salarioBruto) {
    var salarioLiquido = (salarioBruto - (calculoINSS(salarioBruto) + calculoIRPF(salarioBruto))).toFixed(2)
  
    return Number(salarioLiquido)
}