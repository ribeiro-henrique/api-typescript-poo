import * as jwt from 'jsonwebtoken';

export default class Jwt {
  private static secret: jwt.Secret = process.env.JWT_SECRET || 'secret';

  private static tokenConfig: jwt.SignOptions = {
    algorithm: 'HS256', expiresIn: '3d',
  };

  // método para a criação do token

  static generateToken(payload: jwt.JwtPayload): string {
    try {
      const token = jwt.sign(payload, this.secret, this.tokenConfig);
      return token;
    } catch (error) {
      throw new Error('Erro ao gerar o token JWT');
    }
  }

  // Método para verificar a validade de um token
  static verifyToken(token: string): jwt.JwtPayload | null {
    try {
      const payload = jwt.verify(token, this.secret) as jwt.JwtPayload;
      return payload;
    } catch (error) {
      // Se o token não for válido, retornamos null
      return null;
    }
  }
}
