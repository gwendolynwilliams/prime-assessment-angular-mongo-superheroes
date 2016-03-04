var express = require('express');
var router = express.Router();
var pg = require('pg');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/iota');

mongoose.model(
    'Hero',
    new Schema({
            "alias": String,
            "first_name": String,
            "last_name": String,
            "city": String,
            "primary_power": String
        },
        {
            collection: 'Heroes'
        }
    )
);

//trying to get the data back from the SuperPowers Collection
var Hero = mongoose.model('Hero');

//mongoose.model(
//    'Powers',
//    new Schema({
//            "power_name": String
//        },
//        {
//            collection: 'SuperPowers'
//        }
//    )
//);
//
//var Powers = mongoose.model('Powers');

router.post('/addHero', function(req, res) {
    var addedHero = new Hero({
        "alias": req.body.alias,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "city": req.body.city,
        "primary_power": req.body.primary_power
    });

    addedHero.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        Hero.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        });
    });

});

router.get('/getHeroes', function(req, res) {
    Hero.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    })
});

//router.get('/getPowers', function(req, res) {
//    Powers.find({}, function(err, data) {
//        if(err) {
//            console.log('ERR: ', err);
//        }
//
//        res.send(data);
//    })
//});

router.delete('/deleteHero/:id', function(req, res) {
    Hero.findByIdAndRemove({"_id" : req.params.id}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});

module.exports = router;