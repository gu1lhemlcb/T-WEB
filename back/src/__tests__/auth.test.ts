import { suite, test } from '@testdeck/jasmine';
import supertest from 'supertest';
import { Server } from "../app";

const test_server = new Server();
test_server.startServer();
((port = 4000) => {
    test_server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
const api_endpoint = 'http://localhost:4040/';

const request = require('supertest');

describe('POST /auth/register', function () {
    it('User registered', function (done) {
        request(api_endpoint)
            .post('api/auth/register')
            .send({
                firstName: "keynoteTest",
                lastName: "keynoteTest",
                username: "keynoteTest",
                email: "keynoteTest@test.com",
                password: "12345678"
            })
            .then(function (res) {
                // console.log(res.text);
                expect(res.status).toBe(200)
                done()
            })
    });
});

describe('POST /auth/login', function () {
    it('User logged with status 200', function (done) {
        request(api_endpoint)
            .post('api/auth/login')
            .send({
                email: "logintest@gmail.com",
                password: "12345678"
            })
            .then(function (res) {
                // console.log(res.text);
                expect(res.status).toBe(200);
                done()
            }
            )
    });
});