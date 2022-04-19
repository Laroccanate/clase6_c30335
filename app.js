

let nombre = prompt("Por favor ingrese su nombre")
alert("Buen dia " + nombre + ", recuerde que los datos a ingresar deben ser en metros y los decimales seguidos de un punto (Ej 10.98)")
let paseoLunes = parseFloat(prompt("¿Cuantos metros camino el dia Lunes?"))
let paseoMartes = parseFloat(prompt("¿Cuantos metros camino el dia Martes?"))
let paseoMiercoles = parseFloat(prompt("¿Cuantos metros camino el dia Miercoles?"))
let paseoJueves = parseFloat(prompt("¿Cuantos metros camino el dia Jueves?"))
let paseoViernes = parseFloat(prompt("¿Cuants metros camino el dia Viernes?"))
let paseoSabado = parseFloat(prompt("¿Cuanto camino el dia Sabado?"))
let paseoDomingo = ""
do{
    paseoDomingo = prompt(nombre + ", ¿pasea los dias Domingo?").toLowerCase()
}
while (paseoDomingo !== "si" && paseoDomingo !== "no")
let domSi = ""
let suma = ""


if (paseoDomingo == "si"){
    domSi = parseFloat(prompt("¿Cuantos metros camino el dia Domingo?"))
    suma =  paseoLunes + paseoMartes + paseoMiercoles + paseoJueves + paseoViernes + paseoSabado + domSi
    let promedio = suma / 7
    alert (nombre + ' usted en el transcurso de siete dias a caminado la suma total de '+ suma + " metros, con un promedio de " + promedio + " metros, al dia.")
}

else{
    suma =  paseoLunes + paseoMartes + paseoMiercoles + paseoJueves + paseoViernes + paseoSabado 
    let promedio = suma / 6
    alert (nombre + ' usted en el transcurso de seis dias a caminado la suma total de '+ suma + " metros, con un promedio de " + promedio + " metros, al dia.")
}


function sueldo(metros, costo, iva){
    switch(iva){
        case 'si':
        return (metros * costo)* 1.21
        break
        case "no":
            return metros*costo+0
        break
        default:
        return 0
        break
    }
}

let metros1 = suma
let costo1 = parseFloat(prompt("Ingrese el valor en pesos de cada metro"))

let iva1 = ""
do{
    iva1 = prompt("Quiere sacar el calculo con el iva del 21%?")
}
while (iva1 !== "si" && iva1 !== "no")



let resultado = parseFloat(sueldo(metros1, costo1, iva1))

alert("Si el valor por metro es de $"+costo1+".- A usted le corresponde cobrar la suma de $"+resultado+".- por los "+suma+" metros caminados")




let metcam = ""
if (paseoDomingo == "si"){
    let metcam = [paseoLunes, paseoMartes, paseoMiercoles, paseoJueves, paseoViernes, paseoSabado, domSi]
    console.log(metcam)
} if (paseoDomingo == "no") { let metcam = [paseoLunes, paseoMartes, paseoMiercoles, paseoJueves, paseoViernes, paseoSabado]
    console.log(metcam)}




/*
let total = ""
function calculo (valor, meses){
    total= valor/meses
    alert("Usted deberia abonar "+meses+" cuotas de $"+total+".-")
}


let valor = parseFloat(prompt("Por favor, ingrese el importe a calcular."))
let meses = parseInt(prompt("Por favor, ingrese la cantidad de cuotas en la que desea abonar"))
calculo(valor, meses)
*/
