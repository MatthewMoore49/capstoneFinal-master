const router = require('express').Router()
let Attraction = require('../models/AttractionSchema')

router.route('/').get((req, res) => {
    Attraction.find(req.params.id)
    .then(attraction =>
        res.json(attraction))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});

router.route('/:id').get((req, res) => {
    Attraction.findById(req.params.id)
    .then((attraction) =>{
        res.json(attraction)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req,res)=>{
    Attraction.findById(req.params.id)
        .then((attraction)=>{
            attraction.title = req.body.title
            attraction.description = req.body.description
            attraction.imageURL = req.body.imageURL
            attraction.website = req.body.website
            attraction.location = req.body.location
            attraction.category = req.body.category
        })
    .catch((err) => {
        res.status(400).json('Error ' + err)
    });
});

router.route('/add').post((req, res) => { 
    const title = req.body.title;
    const description = req.body.description
    const imageURL = req.body.imageURL
    const website = req.body.website
    const location = req.body.location 
    const category = req.body.category  
    
    const newAttraction = new Attraction ({
        title,
        description,
        imageURL,
        website,
        location,
        category        
        })
    newAttraction.save()
        .then(()=>{
           console.log(req.body);
            res.json('Attraction Added')
            
            })
            .catch((err)=>{
                res.status(400).json("Error: " + err)
            })
})

module.exports = router;





