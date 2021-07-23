import { Request, Response } from 'express';

const config = require('../../../config/default.json');
var Amadeus = require('amadeus');

class SleepController {
    defaultMethod() {
        return {
            text: `You've reached the ${this.constructor.name} default method`
        };
    };

    /**
     *  For a specific city finds hotel offers
     */
    async searchHotel(req: Request, res: Response) {

        var amadeus = new Amadeus({
            clientId: config.amadeusAPIKEY,
            clientSecret: config.amadeusAPITOKEN
        });

        amadeus.shopping.hotelOffers.get({
            /**
             *  Find all citycodes at https://www.iata.org/en/publications/directories/code-search/?
             */
            cityCode: req.body.cityCode, // ex: 'PAR'
            roomQuantity: req.body.roomQuantity, // ex: '2'
            adults: req.body.adults, // ex: '2'
            currency: req.body.currency, // ex: 'EUR'
            priceRange: req.body.priceRange, // ex: '200-300'
            ratings: req.body.ratings // ex: '3'

        }).then(function (response) {
            // console.log(response.data);
            res.status(200).json(response.data);
        }).catch(function (responseError) {
            console.log(responseError.code);
        });
    }
}

export = new SleepController();