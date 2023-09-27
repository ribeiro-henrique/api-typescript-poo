import { Router } from 'express';
import teamsRoute from './teams.route';
import usersRoute from './users.route';

const router = Router();

router.use('/teams', teamsRoute);
router.use('/login', usersRoute);

export default router;
