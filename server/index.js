const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const massive = require('massive');

const createInitialSession = require('./middlewares/session').checkUserSession;

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    

    app.set('db', dbInstance)
}).catch(console.log);

app.use(session({
    secret: 'asdfacn',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 30000
    }
}))
app.use((req, res, next) => {
    createInitialSession(req, res, next)
})


const userCtrl = require('./controllers/user_controller');
const propertyCtrl = require('./controllers/property_controller');

//user / auth
app.post('/api/auth/login', userCtrl.login);
app.post('/api/auth/register', userCtrl.register)
app.post('/api/auth/logout', userCtrl.logout);
app.get('/api/auth/login', userCtrl.getUser);

//property
app.post('/api/properties', propertyCtrl.addProperty);
app.get('/api/properties/:id', propertyCtrl.getProperties);




const port = 3000;
app.listen(port, () => { console.log(`Server listening on port ${port}.`); } );