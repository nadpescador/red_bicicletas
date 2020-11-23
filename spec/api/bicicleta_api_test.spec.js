const Bicicleta = require ('../../models/bicicleta');
const request = require("request");
var server = require('../../bin/www');

describe ('Bicicleta API', ()=> {
    describe('GET BICICLETAS /', ()=> {
        it('Status 200', ()=> {
            expect(Bicicleta.allBicis.length).toBe(0);
            const a = new Bicicleta(1, "negro", "urbana", [-34.6012424, -58.3861497]);
            Bicicleta.add(a);

            request.get('http://localhost:3000/api/bicicletas', function(error, response, body){
                expect(response.statusCode).toBe(200);
            });
        });
    });


/*
describe ('POST BICICLETAS /create', ()=>{
    it('STATUS 200', (done)=>{
        const headers= {'content-type' : 'application/json'};
        const aBici= '{"id":10, "color":"rojo","modelo":"urbana","lat":-34,"lng":-54}';
        request.post({
            headers:headers,
            url: 'https://localhost:3000/api/bicicletas/create',
            body: aBici
            }, function(error,response,body){
                expect(response.statusCode).toBe(200);
                expect(Bicicleta.findById(10).color).toBe('rojo');
                done();
            });
        });
    })
*/

});
