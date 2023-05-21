import {defineField, defineType} from 'sanity'
import {BottleIcon} from '@sanity/icons'

export default defineType({
    name: 'productdetails',
    title: 'Products',
    type: 'document',
    icon: BottleIcon,
    fields: [
        defineField({
            name: 'itemId',
            title: 'Item-ID',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'item',
            title: 'Item Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
    ],
})
