import { Router } from 'express';
import teamsRoute from './teams.route';
import usersRoute from './users.route';
import matchesRoute from './matches.route';

const router = Router();

router.use('/teams', teamsRoute);
router.use('/login', usersRoute);
router.use('/matches', matchesRoute);

export default router;
