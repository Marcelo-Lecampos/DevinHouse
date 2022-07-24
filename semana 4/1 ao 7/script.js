// 🧲Selectores DOM:
const body = document.querySelector("body");
const formulario = document.querySelector("#form");
const select = document.querySelector("#contas");
const inputValor = document.querySelector("#valor");
const operacao = document.querySelector("#operacao");

// 🧾 Dados dos usuários:
let arrayContas = [
  {
    id: 1,
    titular: "Josh",
    saldo: 3456,
  },
  {
    id: 2,
    titular: "Teddy",
    saldo: 1324,
  },
  {
    id: 3,
    titular: "Camilla",
    saldo: 5789,
  },
];

// 🏹 Adiciona o array de contas no select:
const adicionarContas = () => {
  arrayContas.forEach((conta) => {
    const option = document.createElement("option");
    option.value = conta.titular;
    option.saldo = conta.saldo;
    option.innerHTML = conta.titular;
    select.appendChild(option);
  });
};
body.onload = adicionarContas;

// 💽 Funções:

let validarValor = (valor, i) => {
  if (valor <= 0) {
    console.log("Valor inválido");
    return false;
  } else if (valor > arrayContas[i].saldo) {
    console.log("Saldo insuficiente");
    return false;
  } else if (valor <= arrayContas[i].saldo) {
    console.log("sucesso");
    console.log(arrayContas[i].saldo);
    return true;
  }
};

const atualizarForm = (formulario.onsubmit = (event) => {
  event.preventDefault();
  // ⚙ Values
  const valor = inputValor.value;
  const optionTitular = select.value;
  const operacaoEscolhida = operacao.value;

  //⚙ Looping para encontrar options selecionadas e execultar operações
  arrayContas.forEach((conta, i) => {
    if (
      conta.titular === optionTitular &&
      operacaoEscolhida === "depositar" &&
      validarValor(valor, i)
    ) {
      conta.saldo += parseFloat(valor);
      return console.log(conta.saldo);
    } else if (
      conta.titular === optionTitular &&
      operacaoEscolhida === "sacar" &&
      validarValor(valor, i)
    ) {
      conta.saldo -= parseFloat(valor);
      return console.log(conta.saldo);
    }
  });
});

//⚙ Consoles logs
