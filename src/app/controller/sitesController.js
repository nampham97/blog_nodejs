const Char = require('../models/Character');

class SiteController {
    //[GET] /
    index(req, res, next) {
        Char.find({})
            .lean()
            .then((chars) => {
                res.render('home', {
                    chars,
                });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        console.log(req.body);
        res.render('search');
    }
}

module.exports = new SiteController();
