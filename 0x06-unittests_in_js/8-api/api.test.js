const request = require('require');
const { expect } = require('chai');

describe('API integration test', () => {
    const API_URL = 'http://locahost:7865';

    it('GET / returns correct response', (done) => {
        request.get(`${API_URL}/`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
});