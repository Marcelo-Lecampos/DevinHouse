//   <!-- Crie dois módulos JavaScript: um deles deve conter uma função "saudacao", exportada de forma nomeada, que retorna apenas uma string "Olá!". Chame este módulo de saudacao.js

//   O outro deve importar a função do módulo saudacao.js e exibir o resultado da chamada da função saudacao( ) em um console.log. Este módulo deve se chamar index.js

//   Em um arquivo HTML, importe o index.js com uma importação do tipo módulo. A saudação deve ser exibida no console do navegador quando o projeto html é aberto. -->

const saudacao = () => {
  return "Olá!";
};


export {saudacao}
