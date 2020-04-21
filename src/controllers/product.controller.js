let _productService = null;

class ProductController {
    constructor({ ProductService }) {
        _productService = ProductService;
    }

    async get ( req,res  ) {
        let { productId } = req.params;
        const  product = _productService.get( productId );
        return res.send( product );
    }

    async getAll (req,res) {
        const products = _productService.getAll();
        return res.send( products );
    }

    async create ( req,res ) {
        let { body } = req;
        const product = _productService.create( body );
        return res.send( product );
    }

    async update ( req,res ) {
        let {body} = req;
        let { productId } = req.params;
        const product = _productService.update( productId, body, { new: true} );
        return res.send(product);
    }

    async delete ( req,res ) {
        let { productId } = req.params;
        const product =  _productService.delete(productId);
        return res.send(product);
    }

}

module.exports = ProductController;