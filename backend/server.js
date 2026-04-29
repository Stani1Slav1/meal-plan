const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./MealRoutes');
const cors = require('cors');
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

require('dotenv').config();

mongoose.set("strictQuery", false);

app.use(express.json())
app.use(cors())

const PORT = 8000 || process.env.PORT

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(router);

app.listen(PORT, () => {
    console.log(`I AM LISTENNING ON PORT ${PORT}`)
})

// 22114433_db_user   BhOFmZWIcaFlKKAt

// Stani 1MVRjH7M7wsYkjeB

//mongodb+srv://22114433_db_user:<db_password>@cluster0.1twnbdf.mongodb.net/?appName=Cluster0