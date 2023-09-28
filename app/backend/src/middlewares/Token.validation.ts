import { NextFunction, Request, Response } from 'express';
// import * as jwt from 'jsonwebtoken';
import Jwt from '../utils/jwt';

export default class TokenValidation {
  static validateToken(req: Request, res: Response, next: NextFunction): Response | void {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const token = authorization.split(' ')[1];

    const decoded = Jwt.verifyToken(token);

    if (decoded === null) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    req.body.token = decoded;

    next();
  }
}
