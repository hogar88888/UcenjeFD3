//funkcionalne metode-skraćuju kod. Danas se koriste standardno.
//prvo idu podaci

const korisnici=[
    {
        id: 1,
        ime: 'Ana',
        prezime: 'Kartek',
        godine: 31,
        admin: false
    },
    {
        id: 2,
        ime: 'Karlo',
        prezime: 'Totig',
        godine: 29,
        admin: false
    },
    {
        id: 3,
        ime: 'Marko',
        prezime: 'Čutić',
        godine: 45,
        admin: true
    },
    {
        id: 4,
        ime: 'Nikola',
        prezime: 'Čutić',
        godine: 49,
        admin: true
    },
    {
        id: 5,
        ime: 'Žana',
        prezime: 'Čutić',
        godine: 55,
        admin: true
    }
]

console.table(korisnici)

//forEach
for(let i = 0; i<korisnici.length; i++){
    console.log(korisnici[i],ime)
}

console.log('********************')
korisnici.forEach(korisnik => console.log(korisnik.ime))

console.log('********************')
korisnici.forEach(o => console.log(`${o.ime} ${o.prezime}`))

korisnici.forEach(o =>{
    let oslovi = 'Poštovan'
    if(o.ime.endsWith(`a`)){
        oslovi += 'a gospođo'
    }else{
        oslovi += 'i gospodine'
    }
    console.log(`${oslovi}`${o.ime})
})

const ip = korisnici.map(o => o.ime + ` + o prezime`)