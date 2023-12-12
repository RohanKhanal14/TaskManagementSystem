const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv').config();

const db_connection = async () => {
    try {
        return await mongoose.connect(encodeURI(process.env.DB_SERVER), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
       console.log(error);
    }

}

module.exports = db_connection;