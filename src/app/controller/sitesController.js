class NewsController{

    //[GET] /
    index(req, res){
        res.render('home')
    }

    //[GET] /search
    search(req, res){
        console.log(req.body)
        res.render('search')
    }
}

module.exports = new NewsController
