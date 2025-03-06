import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        console.log('Body:', req.body);
        console.log('Params:', req.params);
        console.log('Query:', req.query);

        next();
    }
}