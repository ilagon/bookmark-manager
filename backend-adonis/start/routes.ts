/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'

router
  .group(() => {
    // Get all favourites
    router.get('/favourites', 'FavouritesController.index')

    // Create new favourite
    router.post('/favourites', 'FavouritesController.create')

    // Update favourite
    router.patch('/favourites/:id', 'FavouritesController.edit')

    // Delete favourite
    router.delete('/favourites/:id', 'FavouritesController.destroy')
  })
  .use(middleware.auth())

router.get('/swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})

router.get('/docs', async () => {
  return AutoSwagger.default.ui('/swagger', swagger)
})
