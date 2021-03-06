import { NextFunction, Request, Response, Router } from 'express';
import TravelController from '../controllers/api/activities/TravelController';

class TravelRouter {
    private _router = Router();
    private _controller = TravelController;

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
        this._router.get('/locations', this._controller.findLocation);
        this._router.get('/locations/other-visited-places', this._controller.findOtherVisitedPlaces);
        this._router.get('/flights', this._controller.searchFlight);
    }
}

export = new TravelRouter().router;