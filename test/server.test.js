

const app = require('../server');
let chai = require('chai');
let chaiHttp = require('chai-http');
const {expect} = chai;
const { stub } = require('sinon');
chai.use(require('sinon-chai'));
chai.use(chaiHttp);
const appModule = require('../app');

describe("/", function() {

  describe("Greeting", function() {
    let greetingStub;
    beforeEach(() => {
        greetingStub = stub(appModule, "getGreeting");
    });
    afterEach(() => {
        greetingStub.restore();
    });
    it('should return 200 status', () => {
        return chai.request(app)
          .get('/')
          .then(res => {
            expect(res.statusCode).to.equal(200);
          })
          .catch(err => {
            throw err
          })
      });

      it('should call getGreeting method', () => {
        return chai.request(app)
          .get('/')
          .then(res => {
            expect(greetingStub).to.have.been.calledOnce;
          })
          .catch(err => {
            throw err
          })
      });
  });

});

describe("/affirmations", function() {
    let affirmationStub;
    beforeEach(() => {
        affirmationStub = stub(appModule, "getAffirmation");
    });
    afterEach(() => {
        affirmationStub.restore();
    });
    describe("Affirmation", function() {
      it('should return 200 status', () => {
          return chai.request(app)
            .get('/affirmations')
            .then(res => {
              expect(res.statusCode).to.equal(200);
            })
            .catch(err => {
              throw err
            })
        });
  
        it('should call getAffirmation method', () => {
          return chai.request(app)
            .get('/affirmations')
            .then(res => {
              expect(affirmationStub).to.have.been.calledOnce;
            })
            .catch(err => {
              throw err
            })
        });
    });
  
  });