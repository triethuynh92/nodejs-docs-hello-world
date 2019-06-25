var request = require("request"),
    assert = require('assert'),
    chai = require('chai'),
    base_url = "https://nodejs-app-demo.azurewebsites.net"



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
            assert.equal("Hello World!", body);
            chai.assert.include(body,'Hello World!');
        //helloWorld.closeServer();
        done();
      });
    });
  });
}); 


/* var assert = require('assert');

var calc = require('./cal.js');

// Tests are hierarchical. Here we define a test suite for our calculator.
describe('Calculator Tests', function() {
	// And then we describe our testcases.
	it('returns 1+1=2', function(done) {
		assert.equal(calc.add(1, 1), 2);
		// Invoke done when the test is complete.
		done();
	});

	it('returns 2*2=4', function(done) {
		assert.equal(calc.mul(2, 2), 4);
		// Invoke done when the test is complete.
		done();
	});
}); */
