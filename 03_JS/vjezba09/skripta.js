console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
// ovo nije najbolje rješenje
console.log('================================')
//idemo s klasičnom for petljom

for (let i = 0; i < 10; i++) {
    console.log('Edunova')

}

console.log('================================')

for (let i = 0; i < 13; i++) {
    console.log(`i=${i + 1}`)
}
console.log('================================')

let suma = 0
for (let i = 0; i < 100; i++) {
    suma += i + 1
    //debugger

}
console.log(suma)

//primjeri šetanja pomoću for petlje

for (let i = 10; i > 0; i--) {
    console.log(i)
}
//manji prema većem za 2

for (let i = 7; i < 20; i += 2) {

}
console.log('================================')


const pocetak = 7
const kraj = 20
const uvecanje = 2

for (let i = pocetak; i <= kraj; i += uvecanje) {

    console.log(i)
}

document.write('<table>')

for (let i = 1; i <= 10; i++) {
    document.write('<tr>')

    for (let j = 1; j <= 10; j++) {
        document.write(`<td>${i * j}</td>`)
    }
    document.write('</tr>')
}
document.write('</table>')

//petnju možemo preskoćiti i silom prekinuti

for (let i = 0; i < 10; i++) {
    if (i===3) {
        continue
    }

    if (i === 7) {
        break
    }
    console.log(i)

}

console.log('================================')

const niz=[1,2,3,4,5,6,7]

    for(let i=0;i<niz.length;i++){
        console.log(niz[i])
    }

    //od kraja prema početku
    for(let i=niz.length-1;i>0;i--){
        console.log(niz[i])
    }

    //String JE NIZ znakova

    const ime ='Nina'
    for(let i=0;i<ime.length;i++){
        console.log(ime[i])
    }



    //"dobra" beskonačna petlja

    console.log('================================')

    const spavaj=(ms)=> new Promise(r=>setTimeout(r,ms))

    async function odradi(){
    for(;;){
        document.getElementById('lista').innerHTML='<li>'+ (Math.floor(Math.random()*1000)+1) + '</li>'+
        document.getElementById('lista').innerHTML
      //break
      await spavaj(500)
      }
    }

    odradi()

