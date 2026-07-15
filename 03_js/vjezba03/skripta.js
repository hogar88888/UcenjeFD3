const a=2, b=3
let rez
rez = a + b
console.log('rez', rez)
console.log(9 % 2)
console.log(8%2)

rez += 2

console.log('rez+=2', rez)
debugger

rez = rez + 3
console.log('rez = rez + 3', rez)

rez=rez+1
rez+=1
rez++

let i = 0
console.log('i++', i++)

console.log(5 != 4)
console.log('5' != 5)
console.log('5' !== 5)

const godine = 18
console.log(godine > 18)
console.log(godine >= 18)

const ispunjenUvjet = godine >= 18
console.log('ispunjenUvjet', typeof ispunjenUvjet, ispunjenUvjet)

const imaNovaca = true
console.log('Može u disko', ispunjenUvjet && imaNovaca)

console.log(godine >= 18 ? 'Punoljetan' : 'Maloljetan')

console.log('Marko ima' + godine + ' godina')

console.log(`Marko ima ${godine}`)

const niz =[2,1]

console.table(niz)
const noviNiz = [0,...3]
con-table(noviNiz)

const {prvi,drugi} = [1,2]
console.log(prvi, drugi)