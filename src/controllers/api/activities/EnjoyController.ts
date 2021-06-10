import { Request, Response } from 'express';
import fetch from 'node-fetch';

const config = require('../../../config/default.json');
class EnjoyController {
    defaultMethod() {
        return {
            text: `You've reached the ${this.constructor.name} default method`
        };
    };

    /**
     * For a specific city, finds activities.
     */
    async findActivities(req: Request, res: Response) {
        const query = {
            location_ids: req.body.location_ids, // ex: "Rio_de_Janeiro"
            count: req.body.count, // ex: "10"
            fields: "id,name,score,price,price_is_per_person,booking_info,intro,tag_labels", // ex: "id,name,score,price,price_is_per_person,booking_info,intro,tag_labels"
            order_by: "-score" // ex: "-score"
        };

        const url = new URL('https://www.triposo.com/api/20210317/tour.json?location_ids=&count=&fields=&order_by=');
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
        console.log(data);
        res.status(200).json(data);
    }
}

export = new EnjoyController();