import {defineField, defineType} from 'sanity'
import {BottleIcon} from '@sanity/icons'

export default defineType({
  name: 'services',
  title: 'Our Services',
  type: 'document',
  icon: BottleIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'passenger',
      title: 'Passenger Quantity',
      type: 'string',
    }),
    defineField({
      name: 'luggage',
      title: 'Luggage Quantity',
      type: 'string',
    }),
    defineField({
      name: 'wifi',
      title: 'wifi',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: 'company',
    //   title: 'Company',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'dateStarted',
    //   title: 'DateStarted',
    //   type: 'date',
    // }), 
    // defineField({
    //   name: 'dateEnded',
    //   title: 'DateEnded',
    //   type: 'date',
    // }),
    // defineField({
    //   name: 'isCurrentlyWorkingHere',
    //   title: 'IsCurrentlyWorkingHere',
    //   type: 'boolean',
    // }),
    // defineField({
    //   name: 'technologies',
    //   title: 'Technologies',
    //   type: 'array',
    //   of: [{type: 'reference', to: { type: 'skill'}}]
    // }),
    // defineField({
    //   name: 'points',
    //   title: 'Points',
    //   type: 'array',
    //   of: [{type: 'string'}]
    // }),
  ],
}
)
