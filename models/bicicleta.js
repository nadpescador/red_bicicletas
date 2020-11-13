const Bicicleta = function (id,color,modelo,ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion= ubicacion;
}


Bicicleta.prototype.toString = function () {
    return 'id: ' + this.id + ' | color: ' + this.color;
}


Bicicleta.allBicis = [];


Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}


Bicicleta.findById = function (aBiciId) {
    const aBici = Bicicleta.allBicis.find(x => x.id == aBiciId);
    if (aBici)
        return aBici;
    else
        throw new Error ('No existe una bicicleta con el id'+aBici);
}

Bicicleta.removeById = function (aBiciId) {
    //const aBici = Bicicleta.findById(aBiciId);
    for(let i=0; i< Bicicleta.allBicis.length;i++){
       if (Bicicleta.allBicis[i].id == aBiciId){
       Bicicleta.allBicis.splice(i, 1)
       } else if (Bicicleta.allBicis[i].id == null){
            Bicicleta.allBicis.splice(i,1);
        }
       break; 
    }
}


module.exports = Bicicleta;