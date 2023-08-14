import {defineField, defineType} from 'sanity'
import {BottleIcon} from '@sanity/icons'

export default defineType({
    name: 'logo',
    title: 'Logo',
    type: 'document',
    icon: BottleIcon,
    fields: [
        defineField({
            name: 'logoname',
            title: 'Logo Name',
            type: 'string',
          }),
          defineField({
            name: 'logoimage',
            title: 'Logo Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
    ],
})
