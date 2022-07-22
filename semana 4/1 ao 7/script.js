
const arrayContas = [
    {   
        id: 1,
        titular: 'Josh',
        saldo: 3456
    },
    {
        id: 2,
        titular: 'Teddy',
        saldo: 1324
    },
    {
        id: 3,
        titular: 'Camilla',
        saldo: 5789
    }
]

const adicionarContas = () => {
    const select = document.querySelector('#contas')
    arrayContas.forEach(conta => {
        const option = document.createElement('option')
        option.value = conta.id
        option.innerHTML = conta.titular
        select.appendChild(option)
    } )
}
