const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('sendPaymentRequestToApi calls console.log with correct arguments', () => {
        const spyMethod = sinon.spy(console);
        const stubMethod = sinon.stub(Utils, 'calculateNumber');

        stubMethod.returns(10)
        sendPaymentRequestToApi(100, 20);
        expect(stubMethod.calledWith('SUM', 100, 20)).to.be.true;
        expect(stubMethod.callCount).to.be.equal(1);
        expect(spyMethod.log.calledWith('The total is: 10')).to.be.true;
        expect(spyMethod.log.callCount).to.be.equal(1);
        stubMethod.restore();
        spyMethod.log.restore();
    });
});