const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

for(let piloto of pilotos){
    console.log(piloto)
}

const senna = pilotos.find(piloto => piloto === 'Senna');
console.log(senna)