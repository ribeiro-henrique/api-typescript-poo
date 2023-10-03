import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/Matches';

// import { Response } from 'superagent';

import { allMatches, inProgressMatches, finishedMatches } from './mocks/matches.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('TDD de Matches', function () {

  it('should return the match', async () => {
    sinon.stub(Matches, 'findAll').resolves(allMatches as any)

    const { status, body } = await chai
    .request(app)
    .get('/matches');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(allMatches);

  })

  it('should return all matches in progress', async () => {
    sinon.stub(Matches, 'findAll').resolves(inProgressMatches as any)

    const { status, body } = await chai
    .request(app)
    .get('/matches?inProgress=true');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(inProgressMatches);

  })

  it('should return all matches finished', async () => {
    sinon.stub(Matches, 'findAll').resolves(finishedMatches as any)

    const { status, body } = await chai
    .request(app)
    .get('/matches?inProgress=false');

    expect(status).to.equal(200);
    expect(body).to.deep.equal(finishedMatches);

  })
});
