module.exports = {
    register(req, res, next) {
        const dbInstance = req.app.get('db');
        const {username, pw} = req.body;
        dbInstance.register_user([username, pw])
        .then( () => res.status(200).send('User Added')) 

        .catch( () => res.status(500).send('failed') )
    },
    login(req, res, next) {
        const dbInstance = req.app.get('db');
        const {session} = req; 
        console.log(dbInstance)

        dbInstance.login_user([req.body.username, req.body.pw]).then( (users) => {
            session.user = users;
           return res.status(200).send(users)})

        //this function may need a lot of work lol
        .catch( (err) => {
            // console.log(err)
            // return res.status(500).send(console.log('Invalid Username'))
        });
    },
    logout(req, res, next) {
        const {session} = req;
        session.destroy();
        res.status(200).send(req.session);
    },
     getUser(req, res, next) {
         const {session} = req;
         res.status(200).send(session.user);
    }

}

//may change/add req.params where necessary

