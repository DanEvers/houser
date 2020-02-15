require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const { SERVER_PORT, DB_STRING, SESSION_SECRET} = process.env;
const controller = require('./controller');

app.use(express.json());

massive(DB_STRING).then(db => {
    app.set('db', db); 
    console.log("DB connected");
}).catch(err => console.log(err));

// const port = 4000

// SERVER ENDPOINTS
app.get('/api/houses', controller.get_houses);
app.post('/api/house', controller.add_house);
app.put('/api/house/:id', controller.update_house);
app.delete('/api/house/:id', controller.delete_house);

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`));