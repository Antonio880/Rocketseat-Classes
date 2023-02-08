//Modelagem

class Queue{
    constructor(){
        this.data = [];
    }

    enqueue(item){
        this.data.push(item);
        console.log(`${item} Chegou na fila`)
    }

    dequeue(){
        const item = this.data.shift()
        console.log(`${item} Saiu da fila`)
    }
}


//Utilizando

const fila = new Queue()

fila.enqueue('Antônio')
