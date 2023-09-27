import { NextFunction, Request, Response } from 'express';

// const verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
//   const { email } = req.body;

//   if (!email) {
//     return res.status(400).json({ message: 'All fields must be filled' });
//   }

//   return next();
// };

// const verifyPassword = async (req: Request, res: Response, next: NextFunction) => {
//   const { password } = req.body;

//   if (!password) {
//     return res.status(400).json({ message: 'All fields must be filled' });
//   }

//   return next();
// };

// export {
//   verifyEmail,
//   verifyPassword,
// };

export default class Validations {
  static validateLogin(req: Request, res: Response, next: NextFunction): Response | void {
    const { email, password } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ message: 'E-mail inválido' });
    }

    if (!password || typeof password !== 'string') {
      return res.status(400).json({ message: 'Senha inválida' });
    }

    next();
  }
}
