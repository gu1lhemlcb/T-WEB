import { NextFunction, Request, Response, Router } from 'express';
import EatController from '../controllers/api/activities/EatController';

class EatRouter {
    private _router = Router();
    private _controller = EatController;

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
        this._router.get('/restaurants', this._controller.findRestaurantsByType)
    }
}

export = new EatRouter().router;