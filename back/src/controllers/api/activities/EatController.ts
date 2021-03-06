import { Request, Response } from 'express';
import fetch from 'node-fetch';

const config = require('../../../config/default.json');
class EatController {
    defaultMethod() {
        return {
            text: `You've reached the ${this.constructor.name} default method`
        };
    };

    /**
     *  For a specific cityn with a specifc type of food, finds restaurants
        Check all availables options at https://www.triposo.com/api/documentation/20210317/reference#query_type-contains_tag
     */

    async findRestaurantsByType(req: Request, res: Response) {
        const query = {
            tag_labels: req.body.tag_labels, // ex: "cuisine-Sushi" or "eatingout"
            location_id: req.body.location_id, // ex: "Amsterdam"
            count: req.body.count, // ex: "10"
            order_by: "-score", // ex: "-score"
            fields: "name,best_for,coordinates,score,id", // ex: "name,best_for,coordinates,score,id"
        };

        const url = new URL('https://www.triposo.com/api/20210317/poi.json?tag_labels=&location_id=&count=&order_by=&fields=');
        url.search = new URLSearchParams(query).toString();

        const headers = {
            "X-Triposo-Account": config.triposoId,
            "X-Triposo-Token": config.triposoAPIToken
        };

        const response = await fetch(
            url.toString(),
            { headers }
        );
        const data = await response.json();
        // console.log(data);
        res.status(200).json(data);
    }
}

export = new EatController();