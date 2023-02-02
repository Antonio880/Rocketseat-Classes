//Modelagem
class Stack {
    constructor() {
        this.data = [];
        this.top = -1;
    }
    
    push(value) {
        this.top++
        this.data[this.top] = value;
        return this.data;
    }
        
    pop() {
        if (this.top < 0) return undefined;
        let popppedTop = this.data[this.top];
        delete this.data[this.top];
        this.top--;
        return popppedTop;
    }

    peek() {
        return this.top >=0 ? this.data[this.top] : undefined;
    }

}

//Ultilizando

const stack = new Stack();

//adicionando dados

stack.push('learning');
stack.push('data');
console.log(stack.push('Structs'));
console.log(stack.peek()); 

//removendo dados
stack.pop();
console.log(stack.pop());

console.log(stack.peek());