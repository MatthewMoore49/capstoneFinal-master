const router = require('express').Router()
let Contact = require('../models/ContactSchema')

router.route('/').get((req, res) => {
<<<<<<< HEAD
    Contact.find(req.params.id)
    .then(contact =>
        res.json(contact)
        .catch((err) => {
            res.status(400).json('Error: ' + err)     
    
}))
});
router.route('/:id').get((req, res) => {
    Contact.findById(req.params.id)
    .then((contact) =>{
        res.json(contact)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req,res)=>{
    Contact.findById(req.params.id)
        .then((contact)=>{
            contact.name = req.body.name
            contact.email = req.body.email
           contact.message = req.body.message
        })
    .catch((err) => {
        res.status(400).json('Error ' + err)
    });
});

router.route('/add').post((req, res) => { 
    const name = req.body.name;
    const email= req.body.email;
    const message = req.body.message;
   
    
=======
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
>>>>>>> f38e7c77c0fe6a9478c2e4c70d2e62017c768e7c
    const newContact = new Contact ({
        name,
        email,
        message
<<<<<<< HEAD
           
        })
    newContact.save()
        .then(()=>{
           console.log(req.body);
            res.json('Contact Added')
            
            })
            .catch((err)=>{
                res.status(400).json("Error: " + err)
            })
=======
    })
    newContact.save()
    .then(() => {
        res.json('Contact Added')
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    })
>>>>>>> f38e7c77c0fe6a9478c2e4c70d2e62017c768e7c
})

module.exports = router;


<<<<<<< HEAD



=======
>>>>>>> f38e7c77c0fe6a9478c2e4c70d2e62017c768e7c
