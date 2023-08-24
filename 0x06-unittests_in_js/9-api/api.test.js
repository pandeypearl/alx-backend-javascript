const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
    const API_URL = 'http://localhost:7865';

    it('GET / returns correct response', (done) => {
        request.get(`${API_URL}/`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    it('GET /cart/:id returns correct response for valid :id', (done) => {
        request.get(`${API_URL}/cart/37`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 37');
            done();
        });
    });

    it('GET /cart/:id returns 404 response for valid negative number values in :id', (done) => {
        request.get(`${API_URL}/cart/-37`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('GET /cart/:id returns 404 response for valid non-numeric values in :id', (done) => {
        request.get(`${API_URL}/cart/d400-55b5-5gu7`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });
}); 