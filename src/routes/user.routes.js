const { Router } = require("express"); 
const { JwtAuthMiddleware} = require("../middlewares")

module.exports =({UserController}) =>{
    const router = Router();

    router.post("/signup", UserController.create);
    router.get("", UserController.getAll);
    router.get("/:userId", UserController.get);
    router.patch("/:userId", JwtAuthMiddleware, UserController.update);
    router.delete("/:userId", JwtAuthMiddleware, UserController.delete);
    router.post("/email", UserController.getUserByEmail);
    
    return router; // No estaba retornando este hpta router .l.
}