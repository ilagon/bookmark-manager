import type { HttpContext } from '@adonisjs/core/http'
import { FavouriteService } from '#services/favourite_service'

export default class FavouritesController {
  private favouriteService: FavouriteService

  constructor() {
    this.favouriteService = new FavouriteService()
  }

  /**
   * Display a list of resource
   */
  public async index({ auth }: HttpContext) {
    const userId = auth.user!.id
    const favourites = await this.favouriteService.getAllUserFavourites(userId)
    return favourites
  }

  /**
   * Display form to create a new record
   */
  async create({ request, auth }: HttpContext) {
    const userId = auth.user!.id
    const { url, label } = request.body()

    try {
      await this.favouriteService.createNewFavourite(userId, url, label)
      return true
    } catch (error) {
      return error
    }
  }

  /**
   * Edit individual record
   */
  async edit({ params, request, auth, response }: HttpContext) {
    const userId = auth.user!.id
    const { url, label } = request.body()
    const favouriteId = params.id

    try {
      const updatedFavourite = await this.favouriteService.updateFavourite(
        Number(favouriteId),
        userId,
        { url, label }
      )
      return updatedFavourite
    } catch (error) {
      if (error.message === 'Unauthorized access to favourite') {
        response.unauthorized({ error: 'Unauthorized access to favourite' })
        return
      }
      response.internalServerError({ error: 'Failed to update favourite' })
    }
  }

  /**
   * Delete record
   */
  async destroy({ params, auth, response }: HttpContext) {
    const userId = auth.user!.id
    const favouriteId = params.id

    try {
      await this.favouriteService.deleteFavourite(Number(favouriteId), userId)
      return { success: true }
    } catch (error) {
      if (error.message === 'Unauthorized access to favourite') {
        response.unauthorized({ error: 'Unauthorized access to favourite' })
        return
      }
      response.internalServerError({ error: 'Failed to delete favourite' })
    }
  }
}
