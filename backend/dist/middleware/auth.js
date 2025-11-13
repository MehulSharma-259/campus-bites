import { verifyTokenUser } from "../utils/jwt.js";
export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({
            message: "unauthorized: no token provided"
        });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            message: "unauthorized"
        });
    }
    try {
        const data = verifyTokenUser(token);
        req.userId = data.userId;
        next();
    }
    catch (err) {
        return res.status(403).json({
            message: "invalid token"
        });
    }
}
//# sourceMappingURL=auth.js.map