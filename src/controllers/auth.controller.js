
let _authService = null;
class AuthController {
    constructor({ AuthService }) {
        _authService = AuthService;
    }

    async signUp(req, res) {
        let { body } = req;
        console.log(body);
        console.log("authcontrol");
        const createdUser = await _authService.signUp(body);
        return res.status(201).send(createdUser);
    }

    async signIn(req, res) {
        let { body } = req;
        const creds = await _authService.signIn(body);
        return res.send(creds);
    }
}

module.exports = AuthController;