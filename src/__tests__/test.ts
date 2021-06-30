import { suite, test } from '@testdeck/jasmine';
import { Server } from "../app";
import User from "../models/users/User";
import AuthController from "../controllers/api/auth/AuthController"
const request = require('supertest');

const test_server = new Server();
const drink_endpoint = 'http://localhost:4040/drink';
const sleep_endpoint = 'http://localhost:4040/sleep';
const enjoy_endpoint = 'http://localhost:4040/enjoy';
const travel_endpoint = 'http://localhost:4040/travel';

describe('Checking if server loads correctly', function () {
    beforeAll((done) => {
        test_server.startServer()
        done()
    })
    it("without error", function () {
        expect(test_server.activationStatus).toBe(true);
    });
    it('and access to /', function () {
        // request(test_server.app)
        //     .get('/prout')
        //     .expect(200)
        expect(request(test_server.app).get(sleep_endpoint)).toBe(200)
    });
})

// describe('GET /user', function () {
//     beforeAll(async function () {
//         test_server.startServer()

//     })
//     it('responds with json', function (done) {
//         request(test_server.app)
//             .get(sleep_endpoint)
//             // .set('Accept', 'application/json')
//             // .expect('Content-Type', /json/)
//             .expect(200, done);
//     });
// });

// // describe('Checking routes :', function () {
// //     beforeAll((done) => {
// //         test_server.startServer()
// //         done()
// //     })

// })

// describe('GET /', () => {
//     const response = {} as Response;
//     beforeAll(async () => {

//         await fetch('http://localhost:4040/drink', {
//             method: 'GET',
//             headers: {
//                 Accept: 'application/json',
//             }
//         }).then(async (res) => {
//             response.status = res.status;
//             response.body = await res.json();
//         }
//         );
//     });
//     it('should be STATUS 200', () => {
//         expect(response.status).toBe(200);
//     });

// });




// USER

// describe('Checking if user can be created', function () {
//     beforeEach((done) => {
//         const testUser = new User({
//             firstName: "Test",
//             lastName: "User",
//             username: "TestUser",
//             email: "test@user.com",
//             password: "12345678"


//         })
//         it("Should be created without error", function () {
//             AuthController.sign_up()
//             expect(Response.status)toBe(200)

//         });
//         testUser.sign_up()
//         expect(testUser.).toBe(true);
//     });
// });

// ROUTES


// describe('Drink', function () {
//     it('should return 200 response code', function (done) {

//         request.get(drink_endpoint, function (error, response) {
//             expect(response.statusCode).toEqual(200);
//             done();
//         });
//     });

//     it('should fail on POST for /drink', function (done) {
//         request.post(drink_endpoint, { json: true, body: {} }, function (error, response) {
//             expect(response.statusCode).toEqual(404);
//             done();
//         });
//     });
// });



