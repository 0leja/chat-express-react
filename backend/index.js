require('dotenv').config();
const express = require('express');
const app = express();
const WSServer = require('express-ws')(app)
const aWss = WSServer.getWss()



const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');
const sequelize = require("./db");
const models = require("./models/Models");
const router = require("./router/Router");
const ErrorHandingMiddleware = require('./midleware/ErrorHandingMidleware');
const WebSocketMidleware = require('./midleware/WebSocketMidleware');

const authSocket = (ws, message) => {
    ws.id = message.id
    const users = aWss.clients
    console.log(users.size, 'Текущие юзеры');
}

const updateUsers = () => {
    aWss.clients.forEach(async user => {
        user.send(JSON.stringify(await models.User.findAll()))
    })
    
}

app.ws('/', (ws, req) => {
    ws.on('message', message => {
        console.log('Hf,jnftn');
        const data = JSON.parse(message) 
        console.log(data, 'Сообщение');

        switch (data.method) {
            case 'connection': 
                authSocket(ws, message)
                updateUsers()
        }
    })
})

const PORT = process.env.PORT || 5000;



app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', (req, res, next) => {
    req.updateUsers = updateUsers
    next()
} ,router);

app.use(cors());


app.use(ErrorHandingMiddleware);



sequelize.sync().then(console.log('Database is working'));
        
app.listen(PORT, () => console.log(`Server working on port: ${PORT}`));
 
