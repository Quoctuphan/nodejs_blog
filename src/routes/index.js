
const siteRouter = require('./site')
const newsRouter = require('./news')

function route(app) {
    // app.get('/', (req, res) => {
    //   })
    app.use('/news', newsRouter)
    app.use('/', siteRouter)
}
module.exports = route