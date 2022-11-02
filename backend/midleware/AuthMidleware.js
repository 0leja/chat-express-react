module.exports = (req, res, next) => {
    if(req.method === "OPTIONS") {
        return res.status(403).json("Forbidden request");
    } else {
        try {

            const auth = true;

            if (!auth) {
                return res.status(401).json("Forbidden request");
            }

            next();
        } catch (e) {
            return res.status(403).json("Forbidden request");
        }
    }
}