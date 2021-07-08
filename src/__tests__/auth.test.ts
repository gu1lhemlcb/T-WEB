import { suite, test } from '@testdeck/jasmine';
import { Server } from "../app";

// import server_app from "../app"

const test_server = new Server();
test_server.startServer();
((port = 4000) => {
    test_server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();

const api_endpoint = 'http://localhost:4040/';
const auth_endpoint = 'http://localhost:4040/api/auth';

const request = require('supertest');
// const Request = require("request");

describe("Check sign_up", () => {
    var data = {};
    it("Status 200", () => {
        request(test_server.app)
            .post('http://localhost:4040/api/auth/register')
            .send({
                "firstName": "firstNameTest",
                "lastName": "lastNameTest",
                "username": "usernameTest",
                "email ": "emailTest",
                "password": "passwordTest"
            })
            .end((err, response) => {
                console.log('ELELELELE')
                console.log(response)
                // console.log(Request.body)
                // token = response.body.token; // save the token!
                expect(response.status).toBe(200)
                // done();
            });
    });
    // it("Status 200", () => {
    //     expect(response.status)).toBe(200);
});

// describe("Check sign_up", () => {
//     var data = {};
//     it("Status 200", () => {
//         test_server.app.post('')
//     });
//     // it("Status 200", () => {
//     //     expect(response.status)).toBe(200);
// });