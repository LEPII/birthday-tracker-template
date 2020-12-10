const Birthday = require('../models/birthday.model'),
    mongoose = require('mongoose');

    
   const getAllBirthdays = (req, res) => {
        Birthday.find()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json("Error: " + err));
    };
    
    const createNewBirthday = (req, res) => {
        const birthday = new Birthday(req.body);
        birthday.save()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json("Error: " + err));
    };
    
    const getBirthdayById = (req, res) => {
        Birthday.findById(req.params.id)
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json("Error: " + err));
    };
    
   const updateBirthdayById = (req, res) => {
        Birthday.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
    };
    
    const deleteBirthdayById = (req, res) => {
        Birthday.findByIdAndDelete(req.params.id)
        .then((data) => {
          if (!data) {
            return res.status(404).json('Birthday deleted!');
          }
          res.status(204).json(data);
        })
        .catch((err) => {
          res.status(500).json('Error: ' + err);
        });
    };
    
    module.exports = { getAllBirthdays, createNewBirthday, getBirthdayById, updateBirthdayById, deleteBirthdayById };