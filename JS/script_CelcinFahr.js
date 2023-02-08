function transformDegree(deg){
    let celc = deg.toUpperCase().includes('C')
    let fahr = deg.toUpperCase().includes('F')

    //Fluxo de Erro
    if(!celc && !fahr){
        throw new Error('Grau não identificado')
    }
    //Fluxo ideal F -> C
    let updateDegreeCelcius = Number(deg.toUpperCase().replace("F", ""))
    let formulaCelcius = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSignCelcius = 'C'

    //Fluxo Alternativo C -> F
    if(celc){
        let updateDegreeFahrenheit = Number(deg.toUpperCase().replace("C", ""))
        let formulaFahrenheit = (celcius) => celcius * 9/5 + 3
        let degreeSignFahrenheit = 'F'

        return formulaFahrenheit(updateDegreeFahrenheit) + degreeSignFahrenheit
    }

    return formulaCelcius(updateDegreeCelcius) + degreeSignCelcius
}

try {
    console.log(transformDegree('50C'))
    
} catch(error){
    console.log(error.message)
}