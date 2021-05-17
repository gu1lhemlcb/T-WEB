import { Request, Response } from 'express';

class SleepController {
    defaultMethod() {
        return {
            text: `You've reached the ${this.constructor.name} default method`
        };
    }
}

export = new SleepController();