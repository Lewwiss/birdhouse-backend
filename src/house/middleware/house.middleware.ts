import { Request, Response, NextFunction } from 'express';
import { registrations } from '../registration/registration';

export function HouseMiddleware(req: Request, res: Response, next: NextFunction) {
    // Get ubid value from request header
    const ubid: String = req.header("X-UBID");
    // Ignored GET requests
    if (req.method === "GET") return next();
    // Ignore createHouse requests
    if (req.method === "POST" && req.url === "/house" || req.url === "/house/") return next();
    // Check for ubid value in registrations
    if (!registrations.find(item => item.ubid === ubid)) return res.status(401).json({error: "Unauthorized"});
    // Forwards request if ubid is valid
    next();
};