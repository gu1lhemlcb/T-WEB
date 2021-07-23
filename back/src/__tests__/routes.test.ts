import { suite, test } from '@testdeck/jasmine';
import { response } from 'express';
import { Server } from "../app";

const api_endpoint = 'http://localhost:4040/';
const auth_endpoint = 'http://localhost:4040/api/auth';
const drink_endpoint = 'http://localhost:4040/api/drink';
const eat_endpoint = 'http://localhost:4040/api/eat';
const sleep_endpoint = 'http://localhost:4040/api/sleep';
const enjoy_endpoint = 'http://localhost:4040/api/enjoy';
const travel_endpoint = 'http://localhost:4040/api/travel';

const Request = require("request");

describe("Start server", () => {
    var data = {};
    beforeAll((done) => {
        Request.get(api_endpoint, (error, response, body) => {
            data['status'] = response.statusCode;
            data['body'] = body;
            done();
        });
    });
    it("Status 200", () => {
        expect(data['status']).toBe(200);
    });
    it("Json response", () => {
        expect(data['body']).toBe("Welcome to EpicRoadTrip's API");
    });
});

/**
 * Checkin API's endpoints.
 */

describe("GET '/api/drink'", () => {
    var data = {};
    beforeAll((done) => {
        Request.get(drink_endpoint, (error, response, body) => {
            data['status'] = response.statusCode;
            done();
        });
    });
    it("Status 200", () => {
        expect(data['status']).toBe(200);
    });
})

describe("GET '/api/eat'", () => {
    var data = {};
    beforeAll((done) => {
        Request.get(eat_endpoint, (error, response, body) => {
            data['status'] = response.statusCode;
            done();
        });
    });
    it("Status 200", () => {
        expect(data['status']).toBe(200);
    });
})

describe("GET '/api/enjoy'", () => {
    var data = {};
    beforeAll((done) => {
        Request.get(enjoy_endpoint, (error, response, body) => {
            data['status'] = response.statusCode;
            done();
        });
    });
    it("Status 200", () => {
        expect(data['status']).toBe(200);
    });
})

describe("GET '/api/sleep'", () => {
    var data = {};
    beforeAll((done) => {
        Request.get(sleep_endpoint, (error, response, body) => {
            data['status'] = response.statusCode;
            done();
        });
    });
    it("Status 200", () => {
        expect(data['status']).toBe(200);
    });
})

describe("GET '/api/travel'", () => {
    var data = {};
    beforeAll((done) => {
        Request.get(travel_endpoint, (error, response, body) => {
            data['status'] = response.statusCode;
            done();
        });
    });
    it("Status 200", () => {
        expect(data['status']).toBe(200);
    });
})

/**
 * Create an user.
 */