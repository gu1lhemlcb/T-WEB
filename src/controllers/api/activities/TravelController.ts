import { Request, Response } from 'express';
import fetch from 'node-fetch';

const config = require('../../../config/default.json');
class TravelController {
    defaultMethod() {
        return {
            text: `You've reached the ${this.constructor.name} default method`
        };
    };

    // finds Top cities and returns a short description
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
    }
}

export = new TravelController();