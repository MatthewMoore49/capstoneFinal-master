const router = require('express').Router()
let Contact = require('../models/ContactSchema')

router.route('/').get((req, res) => {
    Contact.find()
    .then((contacts) => {
        res.json(contacts)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    })
})

router.route('/add').post((req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const newContact = new Contact ({
        name,
        email,
        message
    })
    newContact.save()
    .then(() => {
        res.json('Contact Added')
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    })
})

module.exports = router;


