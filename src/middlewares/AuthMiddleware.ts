import { ExpressMiddlewareInterface } from "routing-controllers";
import { Service } from "typedi";
import jwt from "jsonwebtoken";
import config from "../config/config";



@Service() // ✅ THIS IS MISSING
export class AuthMiddleware implements ExpressMiddlewareInterface {

  use(req: any, res: any, next: any): any {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, config.jwts.secret);

      req.user = decoded; // ✅ attach user

      next();
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    
  }
}