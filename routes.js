const UrlPrettifier = require('next-url-prettifier').default

const routes = [
  {
    page: 'index',
    prettyUrl: '/'
  },
  {
    page: 'developer',
    prettyUrl: '/developer'
  },
  {
    page: 'organisation',
    prettyUrl: '/organisation'
  },
  {
    page: 'project',
    prettyUrl: '/project'
  },
  {
    page: 'team',
    prettyUrl: '/team'
  }
]

const urlPrettifier = new UrlPrettifier(routes)
exports.default = routes
exports.Router = urlPrettifier