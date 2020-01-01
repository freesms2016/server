const express = require('express');
const app = express();
require('../config/config');
const bodyParser = require('body-parser');







app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());









app.get('/usuario', (req, res) => {
    res.json('get user');
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es necesario'
        });
    } else {
        res.json({ persona: body });

    }

});

app.put('/usuario/:id', (req, res) => {

    let idd = req.params.id
    res.json({
        id: idd
    });
});

app.delete('/usuario', (req, res) => {
    res.json('delete user');
});


app.listen(process.env.PORT, () => {
    console.log('esperando puerto ', process.env.PORT);
});