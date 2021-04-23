import { Router } from 'express';
import DrinkRouter from './DrinkRoutes';
import EatRouter from './EatRoutes';
import EnjoyRouter from './EnjoyRoutes';
import SleepRouter from './SleepRoutes';
import TravelRouter from './TravelRoutes';

class MasterRouter {
    private _router = Router();
    private _subrouterDrink = DrinkRouter;
    private _subrouterEat = EatRouter;
    private _subrouterEnjoy = EnjoyRouter;
    private _subrouterSleep = SleepRouter;
    private _subrouterTravel = TravelRouter;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
     * Connect routes to their matching routers.
     */
    private _configure() {
        this._router.use('/drink', this._subrouterDrink);
        this._router.use('/eat', this._subrouterEat);
        this._router.use('/enjoy', this._subrouterEnjoy);
        this._router.use('/sleep', this._subrouterSleep);
        this._router.use('/travel', this._subrouterTravel);
    }
}

export = new MasterRouter().router;