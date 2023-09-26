import { Router } from 'express';
import teamsRoute from './teams.route';

const router = Router();

router.use('/teams', teamsRoute);

export default router;
