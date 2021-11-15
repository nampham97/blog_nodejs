const course = require('../models/Course');

class SiteController {
    //[GET] /
    index(req, res) {
        course.find({}, function (err, docs) {
            console.log(err);
            if (err) return res.json('ERROR!!!');

            return res.json(docs);
        });
    }

    //[GET] /search
    search(req, res) {
        console.log(req.body);
        res.render('search');
    }
}

module.exports = new SiteController();
