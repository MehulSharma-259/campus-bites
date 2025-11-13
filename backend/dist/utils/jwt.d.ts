import jwt from "jsonwebtoken";
interface IPayload {
    userId: string;
}
export declare function signTokenUser(payload: IPayload): string;
export declare function signTokenAdmin(payload: IPayload): string;
export declare function verifyTokenUser(token: string): string | jwt.JwtPayload;
export declare function verifyTokenAdmin(token: string): string | jwt.JwtPayload;
export {};
//# sourceMappingURL=jwt.d.ts.map