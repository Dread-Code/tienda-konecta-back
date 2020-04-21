const BaseRepository = require("./base.repository");
let _product = null;

class ProductRepository extends BaseRepository{

    constructor({ Product }) {
        super(Product)
        _product = Product;
    }
}

module.exports = ProductRepository;