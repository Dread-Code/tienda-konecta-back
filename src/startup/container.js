const { createContainer, asValue, asClass, asFunction } = require("awilix");

const container = createContainer();
const Routes = require("../routes");

//config
const config = require("../config");
const app = require(".");

// services
const {
    HomeService,
    BaseService,
    ProductService,
} = require("../services");

//Controllers
const {
    HomeController,
    ProductController
} = require("../controllers");

//Routes
const{
    HomeRoutes,
    ProductRoutes
} = require("../routes/index.routes");


//models
const {
    Product
} = require("../models");

//repositories
const {
    ProductRepository,
    BaseRepository
} = require("../repositories");


container
.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
})
.register({
    HomeService: asClass(HomeService).singleton(),
    BaseService: asClass(BaseService).singleton(),
    ProductService: asClass(ProductService).singleton()
})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    ProductController: asClass(ProductController.bind(ProductController)).singleton()
})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    ProductRoutes: asFunction(ProductRoutes).singleton()
})
.register({
    Product: asValue(Product)
})
.register({
    ProductRepository: asClass(ProductRepository).singleton(),
    BaseRepository: asClass(BaseRepository).singleton()
});

module.exports = container;