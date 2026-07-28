//while petlja, radi s boolean podacima, radi sve dok j etrue u petlji
while(true){
    console.log('Edunova')
    break
}

let brojac = 0

console.time('while petlja')
let suma = 0

while(brojac++<100){

    //console.log(brojac)
    //if(brojac % 10 ===0){

    }


console.timeEnd('while petlja')
console.log(suma)

let brojUnos = '1262'

console.time('ZB1')

for(let i=0; i<brojUnos.length; i++){
    suma += Number(brojUnos[i])
}

console.timeEnd('ZB1')
console.log(suma)

console.time('ZB2')
let broj = Number(brojUnos)

suma = 0

while(broj>0){
    suma +=broj % 10
    broj = broj - (broj % 10)
    broj/= 10
}

console.timeEnd('ZB2')
console.log(suma)


//činjenica: u petlju (for - while) se ne mora ući
const x = 5

for(let i = 0; i>x; i++){
    console.log('ušao u petlju')
}

const podaciApi = [
    {
        ime: 'Pero'
    },
    {
        ime : 'Marko'
    },
    {
        ime : 'Marija'
    }
]
while(podaciApi.length>0){

    console.log('Ušao u petlju', podaciApi.pop()?.ime)
}


