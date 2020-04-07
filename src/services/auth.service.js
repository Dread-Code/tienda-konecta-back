const { generateToken } = require("../helpers/jwt.helper");
let _userService = null;

class AuthService {
    constructor({ UserService }) {
        _userService = UserService;
    }


    async signUp(user) {
        let { email } = user;

        const userExist = await _userService.getUserByEmail(email);

        if (userExist) {
            const error = new Error();
            error.status = 400;
            error.message = "User already exist";
            return error;
        }

        return await _userService.create(user);
    }

    async signIn(user) {
        let { email, password } = user;

        const userExist = await _userService.getUserByEmail(email);
        if (!userExist) {
            const error = new Error();
            error.status = 404;
            error.message = "User not exist";
            return error;
        }

        const validPassword = await userExist.comparePasswords(password);

        if (!validPassword) {
            const error = new Error();
            error.status = 400;
            error.message = "Invalid password";
            throw error;
        }

        const userToEncode = {
            userName: userExist.userName,
            id: userExist._id
        };

        const token = generateToken(userToEncode);

        let creds =  {
            token
        }

        return creds

    }
}

module.exports = AuthService;

