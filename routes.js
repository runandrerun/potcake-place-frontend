const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('contact', '/contact')
routes.add('about', '/about')
routes.add('health', '/health')
// routes.add('post', '/blog/:slug')
