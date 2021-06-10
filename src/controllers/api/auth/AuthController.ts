import { Request, Response } from 'express';
import User from '../../../models/users/User';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const config = require('../../../config/default.json');

const user = require('../../../models/users/User');

class AuthController {
    defaultMethod() {
        return {
            text: `You've reached the ${this.constructor.name} default method`
        };
    };

    async sign_up(req: Request, res: Response) {

        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const username = req.body.username
        const email = req.body.email
        const password = req.body.password

        if (!firstName || !lastName || !username || !email || !password) res.status(400).json({ msg: "Missing fields :/" });

        try {
            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({ msg: "An user is already registered with this email buddy" });
            }

            user = new User({
                firstName,
                lastName,
                username,
                email,
                password,
            });

            console.log(user)

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            user.save();

            const payload = {
                user: {
                    id: user._id // See mongoose _id field in the collection
                }
            }

            const secretOrPrivateKey = config.jwtSecretToken

            jwt.sign(
                payload,
                secretOrPrivateKey,
                { expiresIn: 36000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user
                    });
                });
            // res.status(200).json({ msg: "User created" });
        } catch (e) {
            console.log(e);
            res.status(500).send("Server error");
        }
    };
    async login(req: Request, res: Response) {
        const { email, password } = req.body;

        if (!email || !password) res.status(400).json({ msg: "Please enter all requiered fields " });

        User.findOne({ email }).then((user) => {

            bcrypt.compare(password, user.password)
                .then((isMatch) => {
                    if (!isMatch) return res.status(400).json({ msg: 'Please ensure your password is correct' })

                    const payload = {
                        user: {
                            id: user._id,
                            email: user.email
                        }
                    }

                    const secretOrPrivateKey = config.jwtSecretToken

                    jwt.sign(
                        payload,
                        secretOrPrivateKey,
                        { expiresIn: 36000 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user
                            });
                        }
                    )
                })
        });
    };

    // async get_user(req: Request, res: Response) {
    //     try {
    //         User.findById(req.user.id)
    //             .select('-password')
    //             .then(user => res.json(user));
    //     } catch (err) {
    //         console.log(err);
    //         res.status(500).send("Server error");
    //     }
    // }
}

export = new AuthController();