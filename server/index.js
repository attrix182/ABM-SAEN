const express = require('express');

const cors = require('cors');

const app = express();


const item = require('./item.js');

//const config = require('./config.js');

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "192.168.2.176:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
    }
}

app.use(express.json());

app.use(cors(
    config.application.cors.server
));


app.post('/api/items', item.add); //Add item

app.get('/api/items', item.list); //Get items

app.get('/api/items/:id', item.listID);  //Get item where ID


app.delete('/api/items/:id', item.deleteID); //Delete item for id


app.put('/api/items/:id', item.modID); //Moddify item for id

app.put('/api', item.test); //Moddify item for id

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Test listen ${port} `))