const router = require('express').Router();
const Birthday = require('../models/birthday.model');
const { 
  getAllBirthdays, 
  createNewBirthday, 
  getBirthdayById, 
  updateBirthdayById, 
  deleteBirthdayById 
} = require('../controllers/birthdayControllers');

router.get('/', getAllBirthdays);

router.post('/', createNewBirthday);

router.get('/:id', getBirthdayById);

router.put('/:id', updateBirthdayById);

router.delete('/birthdays/:id', deleteBirthdayById);

module.exports = router;