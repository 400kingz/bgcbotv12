const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/noteroute')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))

    .catch(err => console.log(err))

app.use(routes)
app.listen(port, () => console.log(`Listening on port ${port}`))