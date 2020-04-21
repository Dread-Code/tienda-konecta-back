
//puerto
process.env.PORT = process.env.PORT || 4000;
//name
process.env.APPLICATION_NAME = process.env.APPLICATION_NAME || "TIENDA KONECTA" 

// enviroment
process.env.NODE_ENV = process.env.NODE_ENV || "dev"

// base de datos
let urlDB;

if (process.env.NODE_ENV == "dev") {

    urlDB = "mongodb+srv://lucas:iUgQI6ekkeKTUWts@cluster0-hcdpy.mongodb.net/tiendakonectadev";

} else {
    urlDB = "mongodb+srv://lucas:iUgQI6ekkeKTUWts@cluster0-hcdpy.mongodb.net/tiendakonectaprd";
}


process.env.urlDB = urlDB;


module.exports = {

    PORT: process.env.PORT,
    MONGO_URI: process.env.urlDB,
    APPLICATION_NAME: process.env.APPLICATION_NAME,
    JWT_SECRET: process.env.JWT_SECRET
};
