const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app){
     app.use('/news', newsRouter)
      
     app.use('/', siteRouter)
    //  app.use('/seach', siteRouter)
}
module.exports = route