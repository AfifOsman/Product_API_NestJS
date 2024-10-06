import { UserRole } from './user-role.interface'; // Replace with actual user role if available

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: number;
        username: string;
        role: string; 
      };
    }
  }
}