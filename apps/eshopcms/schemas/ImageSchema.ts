import {defineField, defineType} from 'sanity'
import {AddCircleIcon} from '@sanity/icons'

export default defineType({
  name: 'carimageschema',
  title: 'Car Image',
  type: 'document',
  icon: AddCircleIcon,
  fields: [
    defineField({
      name: 'cartitle',
      title: 'Car Title',
      type: 'string',
    }),
    defineField({
      name: 'carimages',
      title: 'Car Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'carprice',
      title: 'Car Price',
      type: 'string',
    }),
    defineField({
      name: 'carcolor',
      title: 'Car Color',
      type: 'string',
    }),
    defineField({
      name: 'carspeed',
      title: 'Car Speed',
      type: 'string',
    }),
  ],
})
