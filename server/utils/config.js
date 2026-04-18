const PRODUCTION = "production";
const FRONTEND_URL = process.env.NODE_ENV === PRODUCTION
    ? process.env.LIVE_URL
    : process.env.LOCAL_URL || "http://localhost:3000";

module.exports = { PRODUCTION, FRONTEND_URL };

// module.exports.FRONTEND_URL = process.env.NODE_ENV === "production"
//     ? process.env.LIVE_URL
//     : process.env.LOCAL_URL