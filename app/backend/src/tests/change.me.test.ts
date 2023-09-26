import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/Teams';

// import { Response } from 'superagent';

const result = [
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  },
  {
    "id": 3,
    "teamName": "Botafogo"
  },
]

chai.use(chaiHttp);

const { expect } = chai;

describe('TDD de Teams', function () {

  it('should return', async () => {
    sinon.stub(Teams, 'findAll').resolves(result as any)

    const { status, body } = await chai
    .request(app)
    .get('/teams');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(result);

  })
});
