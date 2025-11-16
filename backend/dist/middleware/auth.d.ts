import { NextFunction, Request, Response } from "express";
export interface AuthRequest extends Request {
    user?: {
        id: string;
        email: string;
        universityId: string;
    };
}
export declare function authMiddleware(req: AuthRequest, res: Response, next: NextFunction): Promise<void>;
//# sourceMappingURL=auth.d.ts.map