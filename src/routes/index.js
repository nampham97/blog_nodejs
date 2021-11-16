const sitesRouter = require('./sites');
const newsRouter = require('./news');
const charsRouter = require('./char');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/chars', charsRouter);
    app.use('/', sitesRouter);
}

module.exports = route;
