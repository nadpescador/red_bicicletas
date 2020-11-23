const mongoose = require('mongoose');
const Bicicleta = require ('../../models/bicicleta');


beforeEach(()=>{Bicicleta.allBicis=[];}); 

describe ('Bicicleta.allBicis', ()=> {
    it('comienza vacia ', ()=> {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});



describe("Bicicleta.add", ()=>{
    it('Agregamos una bici', ()=> {
        expect(Bicicleta.allBicis.length).toBe(0);
        
        const a = new Bicicleta (1, "rojo", "urbana", [3,4]);
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});


describe ("Bicicleta.findByID", () =>{
    it('Busco una bicicleta', ()=> {

        expect(Bicicleta.allBicis.length).toBe(0);

        const a = new Bicicleta (1, "rojo", "urbana");
        const b = new Bicicleta (2, "verde", "montaña");

        Bicicleta.add(a);
        Bicicleta.add(b);

        const targetBici = Bicicleta.findById(1);

        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(a.color);
        expect(targetBici.modelo).toBe(a.modelo);
    });
});