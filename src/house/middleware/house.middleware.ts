import { Request, Response, NextFunction } from 'express';
import { registrations } from '../registration/registration';

export function HouseMiddleware(req: Request, res: Response, next: NextFunction) {
    // Get ubid value from request header
    const ubid: String = req.header("X-UBID");

    // Ignores registration if it is a create or getAll request
    if (req.url !== "/house/" && req.url !== "/house" && req.url !== "/house/registrations" && req.url !== "/house/registrations/") {
        // Check for ubid value in registrations
        if (!registrations.find(item => item.ubid === ubid)) return res.status(401).json({error: "Unauthorized"});
    };

    next();
};