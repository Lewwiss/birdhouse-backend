import { Request, Response, NextFunction } from 'express';
export declare function HouseMiddleware(req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
