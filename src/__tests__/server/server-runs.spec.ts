import request from "supertest";
// import { expect } from "chai";
import { Server } from '../../app'


describe('server checks', function () {
    it("server is created without error", function () {
        const test_server = new Server();
        request(200);

    });
});