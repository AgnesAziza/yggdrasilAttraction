require ('dotenv').config();
const faker = require('faker');
faker.locale = "fr";
const pg = require('pg');
const moment = require('moment');
const test = require('./test');


module.exports = (async() => {
    const config = {};
    config.connectionString = process.env.PGURL;
    config.ssl = {
            rejectUnauthorized: false,
       };
    const client = new pg.Client(config);
    try {
        client.connect((err)=>{
            if(err){
                console.log('failed database connection: ' + err.stack);
                return;
            }
            console.log('connection success');
        })
     for (let i= 0; i < 10 ; i++) {
        const attractionName = {
        fullname: faker.name.findName(),
        capacity: faker.datatype.number(50),
        hourOpen: moment().subtract(8, 'hours').format(),
        hourCloser: moment().subtract(17, 'hours').format(),
        }

    console.log(attractionName);
    let testResult = test(attractionName, client);
    console.log(testResult);
    /*const query = {
        Text:'INSERT INTO "attraction" ("name", "capacity", "open_time", "closer_time")VALUES($1, $2, $3, $4)',
    values: [attractionName.fullname, attractionName.capacity, attractionName.hourOpen, attractionName.hourCloser]
    };
    let nom = client.query (query);
    */
    }}
    for (let i= 0; i < 10 ; i++) {
        const visitorName = {
            billet_number: faker.datatype.number(1000),
            place_requested: faker.datatype.number(50),
            starting_time: moment().add(8, 'hours'),
            ending_time: moment().add(19, 'hours')


        }
    catch (error){
        console.log(error);
    }
})();
