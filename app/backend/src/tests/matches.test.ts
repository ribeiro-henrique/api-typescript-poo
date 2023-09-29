import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/Matches';

// import { Response } from 'superagent';

const result = [
  {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 1,
    "awayTeamId": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  },
]

chai.use(chaiHttp);

const { expect } = chai;

describe('TDD de Matches', function () {

  it('should return the match', async () => {
    sinon.stub(Matches, 'findAll').resolves(result as any)

    const { status, body } = await chai
    .request(app)
    .get('/matches');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(result);

  })
});
