import { NextFunction, Request, Response, Router } from 'express';
import AuthController from '../controllers/api/auth/AuthController';

class AuthRouter {
    private _router = Router();
    private _controller = AuthController;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
     * Connect routes to their matching controller endpoints.
     */
    private _configure() {
        this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
            res.status(200).json(this._controller.defaultMethod());
        });
        // this._router.post('/register', (req: Request, res: Response, next: NextFunction) => {
        //     res.status(200).json(this._controller.sign_up());
        // });
        this._router.post('/register', this._controller.sign_up);
        this._router.post('/login', this._controller.login);
        // this._router.post('/get_user', this._controller.get_user);

    }
}

export = new AuthRouter().router;
//  import { Router } from 'express'
// import AuthController from '../controllers/api/auth/AuthController'

// const router = Router()



// router.post('/register', AuthController.sign_up.bind(AuthController))
// // router.post('/login', AuthController.login.bind(AuthController))
// router.get('/test', (req, res) => res.send('Test working'));

// export default router