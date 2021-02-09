const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
  firstName: String,
  lastName: String
});

module.exports = Users = mongoose.model('mc_users', usersSchema);