const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/garage')
    .then(() => console.log('MongoDB Connecte'))
    .catch(err => console.log(err))