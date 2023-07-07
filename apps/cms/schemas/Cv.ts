import {defineField, defineType} from 'sanity'
import {BottleIcon} from '@sanity/icons'

export default defineType({
    name: 'cv',
    title: 'Cv Section',
    type: 'document',
    icon: BottleIcon,
    fields: [
        defineField({
            name: 'cvname',
            title: 'Resume Owner',
            type: 'string',
          }),
          defineField({
            name: 'resume',
            title: 'Upload Resume',
            type: 'file',
          }),
          defineField({
            name: 'url',
            title: 'Url',
            type: 'url',
          }),
    ],
})
