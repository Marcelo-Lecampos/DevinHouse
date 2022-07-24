//// 🧲 Selectores DOM:
const body = document.querySelector("body");
const formulario = document.querySelector("#form");
const select = document.querySelector("#contas");
const inputValor = document.querySelector("#valor");
const operacao = document.querySelector("#operacao");
let msg = document.querySelector("#msg");

//// 🎫 Dados dos usuários:
let arrayContas = [
  {
    id: 1,
    titular: "Josh",
    saldo: 3456,
    senha: "123",
  },
  {
    id: 2,
    titular: "Teddy",
    saldo: 1324,
    senha: "456",
  },
  {
    id: 3,
    titular: "Camilla",
    saldo: 5789,
    senha: "789",
  },
];

//// 💽 Funções:

// 🗜 Adiciona o array de contas no select:
const adicionarContas = () => {
  arrayContas.forEach((conta) => {
    const option = document.createElement("option");
    option.value = conta.id;
    option.saldo = conta.saldo;
    option.innerHTML = conta.titular;
    select.appendChild(option);
  });
};
body.onload = adicionarContas;

// 🗜 Valida os valores passados pelo usuário:
let validarValor = (valor, operacaoEscolhida, i) => {
  if (valor <= 0) {
    console.log("Valor inválido");
    return false;
  } else if (valor > arrayContas[i].saldo && operacaoEscolhida === "sacar") {
    console.log("Saldo insuficiente");
    console.log(
      `Saldo disponível ${arrayContas[i].saldo} ${
        arrayContas[i].saldo == 1 ? "real" : "reais"
      }`
    );
    return false;
  } else if (
    valor <= arrayContas[i].saldo ||
    operacaoEscolhida === "depositar"
  ) {
    console.log("sucesso");
    console.log(
      `Saldo Anterior é de ${arrayContas[i].saldo} ${
        arrayContas[i].saldo == 1 ? "real" : "reais"
      }`
    );
    return true;
  }
};

// 🗜 Atualiza A operação e saldo do usuário e mostra no console:

const atualizarForm = (formulario.onsubmit = (event) => {
  event.preventDefault();
  // ⚙ Values
  const valor = inputValor.value;
  const optionValue = select.value;
  const operacaoEscolhida = operacao.value;
  const passwordDigitado = document.querySelector("#password").value;
  const findIndex = arrayContas.findIndex((conta) => conta.id == optionValue);
  const passwordCheck = arrayContas[findIndex].senha;

  // ⚙ Validação elementos não preenchidos

  if (valor === "" || findIndex == -1 || operacaoEscolhida === "") {
    return (msg.innerHTML = "Preencha todos os campos");
  }
  if (valor !== "" || findIndex != -1 || operacaoEscolhida !== "") {
    msg.innerHTML = "";
  }
  if (passwordDigitado !== passwordCheck) {
    return (msg.innerHTML = "Senha inválida");
  }

  // ⚙ Validação senha
  // if (passwordDigitado !== arrayContas[findIndex].senha) {
  //   return msg.innerHTML = "Senha inválida";
  // }

  // ⚙ Atualização de saldo
  arrayContas.forEach((conta, i) => {
    if (
      conta.id == optionValue &&
      operacaoEscolhida === "depositar" &&
      validarValor(valor, operacaoEscolhida, i)
    ) {
      conta.saldo += parseFloat(valor);
      return console.log(
        `Depósito de ${valor} ${
          valor == 1 ? "real" : "reais"
        } efetuado com sucesso, o saldo atual é de ${conta.saldo} ${
          conta.saldo == 1 ? "real" : "reais"
        }`
      );
    } else if (
      conta.id == optionValue &&
      operacaoEscolhida === "sacar" &&
      validarValor(valor, operacaoEscolhida, i)
    ) {
      conta.saldo -= parseFloat(valor);
      return console.log(
        `Saque de R$ ${valor} ${
          valor == 1 ? "real" : "reais"
        } efetuado com sucesso, o saldo atual é de ${conta.saldo} ${
          conta.saldo == 1 ? "real" : "reais"
        }`
      );
    }
  });
});

//⚙ Consoles logs
