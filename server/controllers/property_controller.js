module.exports = {
    addProperty(req, res, next) {
        const dbInstance = req.app.get('db');
        // use object destructuring for cleaner code 
        dbInstance.add_property([req.body.name, req.body.description, req.body.address, req.body.city, req.body.state, req.body.zip, req.body.image_url, req.body.loan, req.body.monthly_mortgage,req.body.desired_rent, req.session.user.user_id ])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send());
    },
    getProperties(req, res, next) {
        const dbInstance = req.app.get('db');
        dbInstance.get_properties([req.session.user.user_id])

        //may just change to req.body.user_id

        .then((properties) => res.status(200).send(properties))
        .catch( () => res.status(500).send());
    }
}

//may change/add req.params where necessary