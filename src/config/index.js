
//puerto
process.env.PORT = process.env.PORT || 3000;
//name
process.env.APPLICATION_NAME = process.env.APPLICATION_NAME || "BRODDAS API REST" 

// enviroment
process.env.NODE_ENV = process.env.NODE_ENV || "dev"

//

process.env.JWT_SECRET ="hgvyr56rfyg9t8y$$%%&/(/bhygoiuygboy)"

// base de datos
let urlDB;

if (process.env.NODE_ENV == "dev") {

    urlDB = "mongodb://localhost:27017/broddas";

} else {
    urlDB = "mongodb+srv://lucas:iUgQI6ekkeKTUWts@cluster0-hcdpy.mongodb.net/broddas"
}


process.env.urlDB = urlDB;


module.exports = {

    PORT: process.env.PORT,
    MONGO_URI: process.env.urlDB,
    APPLICATION_NAME: process.env.APPLICATION_NAME,
    JWT_SECRET: process.env.JWT_SECRET
};
