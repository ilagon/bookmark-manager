import path from 'node:path'
import url from 'node:url'

export default {
  path: path.dirname(url.fileURLToPath(import.meta.url)) + '/../',
  title: 'Bookmark Manager API',
  version: '1.0.0',
  description: 'The backend API for bookmark manager',
  info: {
    title: 'Bookmark Manager API',
    version: '1.0.0',
    description: 'The backend API for bookmark manager',
  },
  tagIndex: 0, // Add tag index for API grouping
  common: {
    headers: {},
    parameters: {},
  }, // Add common parameters/responses object
  snakeCase: true,
  debug: false,
  ignore: ['/swagger', '/docs'],
  securitySchemes: {}, // optional
  authMiddlewares: ['auth', 'auth:api'], // optional
  defaultSecurityScheme: 'BearerAuth', // optional
  persistAuthorization: true, // persist authorization between reloads on the swagger page
  showFullPath: false, // the path displayed after endpoint summary
}
