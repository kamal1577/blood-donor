const db = require('../db') //this is required
const Donor = require('../db/models/donor');
// const Comment = require('../db/models/comment');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    Donor.findAll()
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.post('/create/donor', function(req, res, next) {
  console.log(req.body);
    Donor.sync().then(function(){
      Donor.create({
        first_name: req.body.donor.firstName,
        last_name: req.body.donor.lastName,
        contact_no: req.body.donor.contactNo,
        email: req.body.donor.email,
        password: '12345',
        date_Of_Birth: req.body.donor.dateOfBirth,
        blood_Group: req.body.donor.bloodGroup
      }).then(result => {
          res.status(200).send(result);
      })
      .catch(next);
    });
});

router.get('/:email', function(req, res, next) {
  console.log(req.params.email);
    Donor.findOne({
            where:{ email:req.params.email },

        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});


module.exports = router
