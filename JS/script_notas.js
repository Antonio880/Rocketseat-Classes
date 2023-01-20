
function getScore(num){
    if(num>=90 && num<=100){
        num = "A"
    }else if(num>=80 && num<=89){
        num = "B"
    }else if(num>=70 && num<=79){
        num = "C"
    }else if(num>=60 && num<=69){
        num = "D"
    }else if(num<60 && num >= 0){
        num = "F"
    }else{
        num = "Nota Inválida"
    }
    return num
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(86))
console.log(getScore(34))
console.log(getScore(75))
console.log(getScore(68))