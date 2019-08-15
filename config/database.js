const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flights', {useCreateIndex: true, useNewUrlParser: true});

