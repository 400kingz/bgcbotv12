const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/noteroute');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; // PORT should be in uppercase
const uri = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to MongoDB');

    app.use(routes);

    app.listen(port, () => console.log(`Listening on port ${port}`));
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit process with failure
});
