


//console.log("Početak")

//const i=7
//const rezultat = i + varijabla

//console.log(rezultat)

//console.log("Kraj")


try{

console.log("Početak")
const i = 7
const rezultat = i + varijabla
console.log(rezultat)

}catch(e){
console.log('Greška' , e.name, e.message, e)
}


console.log ('Kraj')

//2. primjer, opcionalna sintaksa, finally


console.log ('2.primjer')
const i = 7
let rezultat = 0

try{
rezultat = i + varijabla

}catch{
rezultat = i + 1

}finally{

    console.log(rezultat)
}
console.log('Kraj 2. primjer')

//provociramo grešku

function korijen(broj){
    return Math.sqrt(broj)

    }
    try{
        console.log(korijen(-9))
    }catch (e){
        console.log(e.message)
    }

    //primjer

    function rekurzija(){
        let a =1, b =2, c =3
        brojac++
        rekurzija()
    }

    let brojac = 0
    try{
    rekurzija()

    } catch (error){
            console.log('Stog napunjen na:', brojac)
        }
    

    

    

