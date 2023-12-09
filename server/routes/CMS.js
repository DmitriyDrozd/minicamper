var express = require('express');
var router = express.Router();
var fs = require('fs');
const path = require("path");

function readJSONFile(filename, callback) {
    fs.readFile(path.join(__dirname, '..', 'public', 'store', filename), function (err, data) {
        if(err) {
            callback(err);
            return;
        }
        try {
            callback(null, JSON.parse(data));
        } catch(exception) {
            callback(exception);
        }
    });
}

function writeJSONFile(filename, data, callback) {
    fs.writeFile(path.join(__dirname, '..', 'public', 'store', filename), data, function (err) {
        if (err) {
            console.log(err);
            callback(err);
            return;
        }

        callback();
    });
}

// todo: add authorization
router.get('/cms', function (req, res) {
    let contacts;
    let price;

    readJSONFile('contacts.json', (err, contactsData) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            contacts = contactsData;

            readJSONFile('price.json', (err, priceData) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                } else {
                    price = priceData;

                    const data = {
                        contacts,
                        price,
                    };

                    res.send(data);
                }
            })
        }
    });
});

// todo: add authorization
router.put('/cms', function (req, res) {
    const contacts = JSON.stringify(req.body.contacts);
    const price = JSON.stringify(req.body.price);

    writeJSONFile('contacts.json', contacts, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            writeJSONFile('price.json', price, (err) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
            })
        }
    });
});

module.exports = router;
