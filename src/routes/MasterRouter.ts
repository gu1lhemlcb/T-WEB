import { Router } from 'express';
import DrinkRouter from './DrinkRoutes';
import EatRouter from './EatRoutes';
import EnjoyRouter from './EnjoyRoutes';
import SleepRouter from './SleepRoutes';
import TravelRouter from './TravelRoutes';
import AuthRouter from './AuthRoutes';

class MasterRouter {
    private _router = Router();
    private _subrouterDrink = DrinkRouter;
    private _subrouterEat = EatRouter;
    private _subrouterEnjoy = EnjoyRouter;
    private _subrouterSleep = SleepRouter;
    private _subrouterTravel = TravelRouter;
    private _subrouterAuth = AuthRouter;

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
        this._router.use('/api/drink', this._subrouterDrink);
        this._router.use('/api/eat', this._subrouterEat);
        this._router.use('/api/enjoy', this._subrouterEnjoy);
        this._router.use('/api/sleep', this._subrouterSleep);
        this._router.use('/api/travel', this._subrouterTravel);
        this._router.use('/api/auth', this._subrouterAuth);
    }
}

export = new MasterRouter().router;