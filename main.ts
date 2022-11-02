input.onButtonPressed(Button.A, function () {
    for (let contador = 0; contador <= medir_arreglo; contador++) {
        basic.showNumber(Arreglo_Numeros[contador])
    }
})
input.onButtonPressed(Button.B, function () {
    Arreglo_Numeros.pop()
    medir_arreglo += -1
})
let medir_arreglo = 0
let Arreglo_Numeros: number[] = []
Arreglo_Numeros = [
5,
7,
8,
2,
1,
1
]
medir_arreglo = Arreglo_Numeros.length - 1
basic.forever(function () {
	
})
