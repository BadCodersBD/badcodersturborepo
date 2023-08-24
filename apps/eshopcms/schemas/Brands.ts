import {defineField, defineType} from 'sanity'
import {BottleIcon} from '@sanity/icons'

export default defineType({
  name: 'brands',
  title: 'Our Brands',
  type: 'document',
  icon: BottleIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Brand Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
}
)
