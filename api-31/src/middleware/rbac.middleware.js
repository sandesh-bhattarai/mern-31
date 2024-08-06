const checkAccess = (accessBy) => {
    return (req, res, next) => {
        try {
            const loggedInUser = req.authUser;
            if(typeof accessBy === 'string' && loggedInUser.role === accessBy) {
                next()
            } else if(Array.isArray(accessBy) && accessBy.includes(loggedInUser.role)) {
                next()
            } else {
                next({code: 403, message: "You do not have permission to access.", status: "PERMISSION_DENIED"})
            }
        } catch(exception) {
            next(exception)
        }
    }
}

module.exports = {
    checkAccess
}