import { Request, Response } from 'express';

class DrinkController {
    defaultMethod() {
        return {
            text: `You've reached the ${this.constructor.name} default method`
        };
    }
}

export = new DrinkController();