import {defineField, defineType} from 'sanity'
import {BottleIcon} from '@sanity/icons'

export default defineType({
    name: 'hero',
    title: 'Hero',
    type: 'document',
    icon: BottleIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
          }),
          defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
            name: 'designation',
            title: 'Designation',
            type: 'string',
          }),
          defineField({
            name: 'gretting',
            title: 'Greating',
            type: 'string',
          }),
    ],
})
