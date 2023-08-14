import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'eshop-cms',

  projectId: 'q9zachhr',
  dataset: 'production',

  plugins: [deskTool(undefined), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
