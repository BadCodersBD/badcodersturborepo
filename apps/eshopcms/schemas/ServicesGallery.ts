import {defineField, defineType} from 'sanity'
import {AddCircleIcon} from '@sanity/icons'

export default defineType({
  name: 'servicesgallery',
  title: 'Our Services Gallery',
  type: 'document',
  icon: AddCircleIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'imagegallery',
      title: 'Services Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
}
)
