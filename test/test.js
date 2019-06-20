var request = require("request"),
    assert = require('assert'),
    chai = require('chai'),
    base_url = "https://nodejs-basic.azurewebsites.net";

describe("Node Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        //expect(response.statusCode).toBe(200);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        //expect(body).toBe("Hello World");
        //assert.equal("Hello World", body);
        chai.assert.include(body,'Hello World!');
        //helloWorld.closeServer();
        done();
      });
    });
  });
});