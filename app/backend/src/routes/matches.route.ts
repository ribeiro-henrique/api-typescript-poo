import { Router, Request, Response } from 'express';

const matchesRoute = Router();

matchesRoute.get('/', (req: Request, res: Response) => res.send('Oi'));
