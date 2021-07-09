import { suite, test } from '@testdeck/jasmine';
import supertest from 'supertest';
import { Server } from "../app";

const test_server = new Server();
test_server.startServer();
((port = 8888) => {
    test_server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
const api_endpoint = 'http://localhost:4040/';

const request = require('supertest');

/**
 * DRINK
 */

describe('GET /drink/bars', function () {
    it('find bars for a specific city', function (done) {
        request(api_endpoint)
            .get('api/drink/bars')
            .send({
                location_id: "Amsterdam",
                count: "10"
            })
            .then(function (res) {
                // console.log(res.text);
                expect(res.status).toBe(200)
                done()
            })
    });
});

/**
 * EAT
 */

describe('GET /eat/restaurants', function () {
    it('find restaurants by type', function (done) {
        request(api_endpoint)
            .get('api/eat/restaurants')
            .send({
                tag_labels: "cuisine-Sushi",
                location_id: "Amsterdam",
                count: "10"
            })
            .then(function (res) {
                // console.log(res.text);
                expect(res.status).toBe(200)
                done()
            })
    });
});

/**
 * SLEEP
 */

describe('GET /sleep/hotels', function () {
    it('find hotels by city location', function (done) {
        request(api_endpoint)
            .get('api/sleep/hotels')
            .send({
                cityCode: "PAR",
                adults: "3"
            })
            .then(function (res) {
                // console.log(res.text);
                expect(res.status).toBe(200)
                done()
            })
    });
});

/**
 * ENJOY
 */

describe('GET /enjoy/activities', function () {
    it('find activities by city location', function (done) {
        request(api_endpoint)
            .get('api/enjoy/activities')
            .send({
                location_ids: "Rio_de_Janeiro",
                count: "10"
            })
            .then(function (res) {
                // console.log(res.text);
                expect(res.status).toBe(200)
                done()
            })
    });
});

describe('GET /enjoy/visit', function () {
    it('find recommended cities', function (done) {
        request(api_endpoint)
            .get('api/enjoy/visit')
            .send({
                location_ids: "Paris"
            })
            .then(function (res) {
                // console.log(res.text);
                expect(res.status).toBe(200)
                done()
            })
    });
});

/**
 * TRAVEL
 */

describe('GET /travel/flights', function () {
    it('find recommended cities', function (done) {
        request(api_endpoint)
            .get('api/enjoy/visit')
            .send({
                originLocationCode: "MPL",
                destinationLocationCode: "JFK",
                departureDate: "2021-08-01",
                adults: "1"
            })
            .then(function (res) {
                // console.log(res.text);
                expect(res.status).toBe(200)
                done()
            })
    });
});


