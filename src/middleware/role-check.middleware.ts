import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RoleCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const user = req.user;

    if (user && user.role === 'admin') {
      // Allow admin to proceed
      next();
    } else {
      // Forbidden access
      return res.status(403).json({ message: 'Forbidden: Admins only' });
    }
  }
}
