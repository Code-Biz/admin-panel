const isAdmin = async (req, res, next) => {

    try {

        const isAdmin = req.user.isAdmin;
        console.log((isAdmin + ", is the value of isAdmin => isAdminValidaotr"));

        if (!isAdmin) {
            return res.status(403).json({ msg: "Access Denied! You are not the admin user." })
        }

        next()
    } catch (error) {
        next(error);
    }
};

module.exports = isAdmin;