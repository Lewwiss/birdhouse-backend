"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseMiddleware = void 0;
const registration_1 = require("../registration/registration");
function HouseMiddleware(req, res, next) {
    const ubid = req.header("X-UBID");
    if (req.method === "GET")
        return next();
    if (req.method === "POST" && req.url === "/house" || req.url === "/house/")
        return next();
    if (!registration_1.registrations.find(item => item.ubid === ubid))
        return res.status(401).json({ error: "Unauthorized" });
    next();
}
exports.HouseMiddleware = HouseMiddleware;
;
//# sourceMappingURL=house.middleware.js.map