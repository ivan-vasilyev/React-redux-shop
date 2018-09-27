const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const phones = require('./server-data/phones');
const categories = require('./server-data/categories');

const app = express();

app.set('port', (process.env.PORT || 4000));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/api/phones', (req, res) => {
    res.send(phones);
});

app.get('/api/phones/:id', (req, res) => {
    const phone = phones.find(phone => phone.id === req.params.id);

    if (!phone) {
        return res.send({});
    }

    res.send(phone);
});

app.get('/api/categories', (req, res) => {
    res.send(categories);
});

app.post('/api/login', (req, res) => {
    res.status(200).json({
        user: 'admin',
        email: 'admin@admin.ru',
        isAdmin: true
    });
});

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));