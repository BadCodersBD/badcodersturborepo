import {defineField, defineType} from 'sanity'
import {AddCircleIcon} from '@sanity/icons'

export default defineType({
  name: 'limocarousel',
  title: 'Car Gallery',
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
      title: 'Car Gallery',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
}
)
