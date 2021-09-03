const { stub } = require('sinon');
const axios = require('axios');
const chai = require('chai');
const {expect} = chai;
chai.use(require('sinon-chai'));
const {getAffirmation} = require('../app');

describe("Get Affirmation", () => {
    let getStub;
    const getMockRes = {
      data: {
        affirmation: 'Affirmation test'
      }
    }
    beforeEach(() => {
      getStub = stub(axios, "get").returns(getMockRes);
    });
    afterEach(() => {
      getStub.restore();
    });
    it("should call axios get method and return its response message", async() => {
      const res = await getAffirmation();
      expect(getStub).to.have.been.calledOnce;
      expect(res).to.be.equal(getMockRes.data.affirmation);
    });

    it("should return default affirmation message when an error is generated", async() => {
      getStub.throws(new Error());
      const res = await getAffirmation();
      expect(getStub).to.have.been.calledOnce;
      expect(res).to.be.equal('Today is my best day');
    });
});