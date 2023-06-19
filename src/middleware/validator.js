module.exports = (req, res, next)=> {
    let name = req.query.name;

    if (!name) {
        res.status(500).json({
          code: 500,
          message: "Please insert your name Correctly",
        });
    }
        else {
            next();
        }
    }