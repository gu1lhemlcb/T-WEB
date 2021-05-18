import { Request, Response } from 'express';
import fetch from 'node-fetch';

const config = require('../../../config/default.json');
var Amadeus = require('amadeus');
class TravelController {
    defaultMethod() {
        return {
            text: `You've reached the ${this.constructor.name} default method`
        };
    };

    /**
     * Finds top cities and brings a short description.
     */
    async findLocation(req: Request, res: Response) {

        const query = {
            part_of: req.body.part_of, // ex: "France"
            tag_labels: req.body.tag_labels, // ex: "city"
            count: req.body.count, // ex: "10"
            order_by: req.body.order_by, //  ex: "-score"
            fields: req.body.fields // ex: "name,id,snippet,parent_id,score,type"
        };

        const url = new URL('https://www.triposo.com/api/20210317/location.json?part_of=&tag_labels=&count=&order_by=&fields=');
        url.search = new URLSearchParams(query).toString();
        console.log(url.search)

        const headers = {
            "X-Triposo-Account": config.triposoId,
            "X-Triposo-Token": config.triposoAPIToken
        };

        const response = await fetch(
            url.toString(),
            { headers }
        );
        const data = await response.json();
        console.log(data)
    };

    /**
     * Finds related cities and places visited by others.
     */
    async findOtherVisitedPlaces(req: Request, res: Response) {

        const query = {
            part_of: req.body.part_of, // ex: "France"
            annotate: "distance:45.47083,9.18815",
            distance: "<=300000",
            also_visited: req.body.also_visited, // ex: "Toulouse", should corresponds to the city chosen to visit initially
            order_by: "-also_visited_score"
        };

        const url = new URL('https://www.triposo.com/api/20210317/location.json?part_of=&annotate=&distance=&also_visited=&order_by=');
        url.search = new URLSearchParams(query).toString();
        console.log(url.search)

        const headers = {
            "X-Triposo-Account": config.triposoId,
            "X-Triposo-Token": config.triposoAPIToken
        };

        const response = await fetch(
            url.toString(),
            { headers }
        );
        const data = await response.json();
        console.log(data)
    };

    /**
     * Finds flights between two destinations.
     * 
     * TO FIND LOCATIONS CODE:
     * https://www.iata.org/en/publications/directories/code-search/?
     * 
     */
    async searchFlight(req: Request, res: Response) {

        var amadeus = new Amadeus({
            clientId: config.amadeusAPIKEY,
            clientSecret: config.amadeusAPITOKEN
        });

        amadeus.shopping.flightOffersSearch.get({
            originLocationCode: req.body.originLocationCode, // ex: 'PAR' 
            destinationLocationCode: req.body.destinationLocationCode, // ex: 'MPL'
            departureDate: req.body.departureDate, // ex: '2021-08-01',
            adults: req.body.adults, // ex: '2'
            // }).then(function (response) {
            //     return amadeus.shopping.flightOffers.pricing.post(
            //         JSON.stringify({
            //             'data': {
            //                 'type': 'flight-offers-pricing',
            //                 'flightOffers': [response.data[0]]
            //             }
            //         })
            //     )
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (responseError) {
            console.log(responseError.code);
        });
    }
}

export = new TravelController();