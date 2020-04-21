const { Router } = require("express"); 

module.exports =({ProductController}) =>{
    const router = Router();

    router.post("/create", ProductController.create);
    router.get("", ProductController.getAll);
    router.get("/:userId", ProductController.get);
    router.patch("/:userId", ProductController.update);
    router.delete("/:userId", ProductController.delete);
    
    return router; // No estaba retornando este hpta router .l.
}