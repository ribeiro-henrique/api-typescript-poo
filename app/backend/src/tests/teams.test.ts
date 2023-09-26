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

  it('should return all teams', async () => {
    sinon.stub(Teams, 'findAll').resolves(result as any)

    const { status, body } = await chai
    .request(app)
    .get('/teams');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(result);

  })

  it('should return team by id', async () => {
    sinon.stub(Teams, 'findOne').resolves({
      "id": 3,
      "teamName": "Botafogo"
    } as any)

    const { status, body } = await chai
    .request(app)
    .get('/teams/3');

    expect(status).to.equal(200);
    expect(body).to.deep.equal({
      "id": 3,
      "teamName": "Botafogo"
    });
  })

  it('should return not found if id doesnt exists', async () => {
    sinon.stub(Teams, 'findOne').resolves(null);

    const { status, body } = await chai
    .request(app)
    .get('/teams/55');

    expect(status).to.equal(404);
    expect(body.message).to.equal('Team 55 not found');
  })
});
