const { json } = require('express');
const Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list = function (req,res){
    res.status(200).json({
        bicicleta: Bicicleta.allBicis
    });
}

exports.bicicleta_create = function (req,res){
    const bici = new Bicicleta();
    bici.modelo = req.body.modelo
    bici.color=req.body.color;
    bici.ubicacion = [req.body.lat, req.body.lng];

    Bicicleta.add(bici);

    res.status(200).json ({
        bicicleta:bici
    });
}