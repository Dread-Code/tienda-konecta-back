const { Router } = require("express"); 

module.exports =({ProductController}) =>{
    const router = Router();

    router.post("/create", ProductController.create);
    router.get("", ProductController.getAll);
    router.get("/:productId", ProductController.get);
    router.patch("/:productId", ProductController.update);
    router.delete("/:productId", ProductController.delete);
    
    return router; // No estaba retornando este hpta router .l.
}