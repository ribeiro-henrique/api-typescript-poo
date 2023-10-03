import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');
// import { verifyEmail } from '../middlewares/login.verify'

import { app } from '../app';
import User from '../database/models/User';

import { validUser, validBody, invalidEmail } from './mocks/users.mock';

// import { Response } from 'superagent';

const dado1 = [
  {
    "email": "",
    "password": "12345678"
  }
]

const dado2 = [
  {
    "email": "hesr.ribeiro@gmail.com",
    "password": ""
  }
]


chai.use(chaiHttp);

const { expect } = chai;

describe('TDD de Login', function () {

  it('should return an error if doenst have email', async () => {
    // sinon.stub(User, 'create').resolves()

    const { status, body } = await chai
    .request(app)
    .post('/login')
    .send(dado1);

    expect(status).to.equal(400);
    expect(body.message).to.deep.equal('All fields must be filled');

  })

  it('should return an error if doenst have password', async () => {
    // sinon.stub(User, 'create').resolves()

    const { status, body } = await chai
    .request(app)
    .post('/login')
    .send(dado2);

    expect(status).to.equal(400);
    expect(body.message).to.deep.equal('All fields must be filled');

  })

  it('should return status 200 and an token', async () => {
    sinon.stub(User, 'findOne').resolves(validUser as any)

    const { status, body } = await chai
    .request(app)
    .post('/login')
    .send(validBody);

    expect(status).to.equal(200);
    expect(body).to.have.key('token');

  })

  it('should return status 401 if not authorized', async () => {
    sinon.stub(User, 'findOne').resolves(null)

    const { status, body } = await chai
    .request(app)
    .post('/login')
    .send(invalidEmail);

    expect(status).to.equal(401);
    expect(body.message).to.equal({ "message": "Invalid email or password" });

  })
});
