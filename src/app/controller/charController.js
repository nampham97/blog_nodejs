const Char = require('../models/Character');

class CharController {
    //[GET] /
    detail(req, res, next) {
        Char.findOne({ name: req.params.name })
            .lean()
            .then((char) => {
                const pos =
                    char.position.split('-')[1] === 'ALL'
                        ? 'ALL'
                        : char.position.split('-')[0];
                res.render('chars/detailChar', {
                    char,
                    position: pos,
                });
            })
            .catch(next);
    }

    //[GET] /view create char
    create(req, res, next) {
        res.render('chars/createChar');
    }

    //[POST] /
    saveChar(req, res, next) {
        console.log(req.body);
        const formData = req.body;
        const charNew = new Char(formData);
        charNew.save();

        res.json('ok');
    }
}

module.exports = new CharController();
