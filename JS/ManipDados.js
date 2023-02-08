/*"Antonio"._proto_
let number = 15165615.135145645
console.log(number.toFixed(2).replace(".", ","))
let phrase = "Eu quero isso"
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
console.log(phrase.includes("quero"))
let myArray = new Array('a', 'b', 'gf')
console.log(myArray)
let word = "manipulação"
console.log(Array.from(word))*/
let techs = ["isso", "msm", "que"]
techs.push("ta vendo");
//console.log(techs)
techs.unshift("sim")
//techs.pop()
//techs.shift()
//console.log(techs.slice(1, 3))
//techs.splice(1, 2)
//console.log(techs)
let position = techs.indexOf("msm")
console.log(techs.splice(position, 2))