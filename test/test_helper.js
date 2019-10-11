const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://admin:Mototaxidoamor12@clustermarcelodias-vvqjp.mongodb.net/user_test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection
    .once('open', () => console.log(mongoose))
    .on('error', (error) => {
        console.warn('Warning', error);
    });