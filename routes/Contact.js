const router = require('express').Router()
let Contact = require('../models/ContactSchema')

router.route('/').get((req, res) => {
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
   
    
    const newContact = new Contact ({
        name,
        email,
        message
           
        })
    newContact.save()
        .then(()=>{
           console.log(req.body);
            res.json('Contact Added')
            
            })
            .catch((err)=>{
                res.status(400).json("Error: " + err)
            })
})

module.exports = router;





