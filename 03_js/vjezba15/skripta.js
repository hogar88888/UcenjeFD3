document.write('Hello')

//OOP-objektno orijentirano programiranje

// NAUČI NAPAMET što je KLASA a što je OBJEKT

//KLASA je opisnk objekta

class Osoba{
    // OPP princip učahurivanja (encapsulation)
    //1. Klasa sakriva svoj asvojstva
   #ime//# znači da je to skriveno privatno svojstvo

// 2. Klasa čini svoja svojstva dostupnim  putem get i set
// konstruktor, poziva se ključnom rječju new


//I2: Objekt je pojavnost klase (instanca)
//varijabla osoba je instanca klase osoba

}



//OP Principi
//Klasa će naslijediti metode natklase. Jedna klasa može nasloijediti samo jednu natklasu

class Polaznik extends Osoba{
    #odradioObaveze
    get odradioObaveze(){return this.#odradioObaveze}
    set odradioObaveze(b){this.#odradioObaveze}
    constructor(ime="", oo=false){
        super
    }



    toString(){
        return`${this.vrsta} ${super.ime}` 
    }
}
const princip






// metode u klasi se koriste na objektima, NE U KLASAMA. Ako se koriste u klasama , MORAJU biti STATIC

class Pomocno{
    static slucajniBroj(){
        return Math.random()
    }
}
console.log(Pomocno.slucajniBroj())






