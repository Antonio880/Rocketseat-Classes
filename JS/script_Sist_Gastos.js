gastos = {
    receitas: [180, 90, 70, 400, 1200, 2324],
    despesas: [123, 342, 456]
}
function sum(array){
    let total = 0;
    for(let value of array){
        total+=value
    }
    return total
}

function calculateBalance(){
    let Balance = sum(gastos.receitas)- sum(gastos.despesas)
    let itsOk = Balance>=0

    let balanceText = "Negativo"
    if(itsOk){
        balanceText = "Positivo"
    }
    console.log(`Seu saldo é ${balanceText} com um total de R$ ${Balance.toFixed(2)}`)
}

calculateBalance()
