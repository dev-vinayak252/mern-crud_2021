const express = require('express');
const Users = require('../../models/Users');
const router = express.Router();

router.post('/addUser', async (req, res) => {
  console.log(req.body);
  try {
    const newUser = { firstName: req.body.fstNam, lastName: req.body.lstNam };
    const user = new Users(newUser);
    const addedUser = await user.save();
    res.status(200).send(req.body);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;