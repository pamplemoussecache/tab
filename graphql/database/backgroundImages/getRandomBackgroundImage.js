import { sample } from 'lodash/collection'
import BackgroundImageModel from './BackgroundImageModel'
import { BACKGROUND_IMAGE_LEGACY_CATEGORY } from '../constants'
/**
 * Fetch a Random image from the image base.
 * @return {Promise<BackgroundImage>}  A promise that resolve
 * into a BackgroundImage instance.
 */

export default async (
  userContext,
  category = BACKGROUND_IMAGE_LEGACY_CATEGORY
) => {
  let images
  if (category === BACKGROUND_IMAGE_LEGACY_CATEGORY) {
    // We're assuming legacy photo items in the DB don't have a category.
    // Can remove this if we migrate that field to all items.
    images = await BackgroundImageModel.getAll(userContext)
    images = images.filter(
      image => image.category === BACKGROUND_IMAGE_LEGACY_CATEGORY
    )
  } else {
    images = await BackgroundImageModel.query(userContext, category)
      .usingIndex('ImagesByCategory')
      .execute()
  }
  return sample(images)
}
