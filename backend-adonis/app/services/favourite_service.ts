import Favorite from '#models/favorite'

export class FavouriteService {
  // Your code here

  async getAllUserFavourites(userId: number) {
    const userFavourites = await Favorite.findManyBy('userId', userId)

    return userFavourites
  }

  async createNewFavourite(userId: number, url: string, label: string) {
    await Favorite.create({ userId, url, label })
  }

  /**
   * Update an existing favourite
   * @param id - The ID of the favourite to update
   * @param userId - The user ID for verification
   * @param data - Object containing url and/or label to update
   * @returns The updated favourite
   */
  async updateFavourite(id: number, userId: number, data: { url?: string; label?: string }) {
    const favourite = await Favorite.findByOrFail('id', id)

    // Verify ownership
    if (favourite.userId !== userId) {
      throw new Error('Unauthorized access to favourite')
    }

    // Update only provided fields
    favourite.merge(data)
    await favourite.save()

    return favourite
  }

  /**
   * Delete a favourite
   * @param id - The ID of the favourite to delete
   * @param userId - The user ID for verification
   * @returns boolean indicating success
   */
  async deleteFavourite(id: number, userId: number): Promise<boolean> {
    const favourite = await Favorite.findByOrFail('id', id)

    // Verify ownership
    if (favourite.userId !== userId) {
      throw new Error('Unauthorized access to favourite')
    }

    await favourite.delete()
    return true
  }
}
