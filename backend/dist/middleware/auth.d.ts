import { NextFunction, Request, Response } from "express";
export interface AuthRequest extends Request {
    userId?: string;
}
export declare function authMiddleware(req: AuthRequest, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.d.ts.map