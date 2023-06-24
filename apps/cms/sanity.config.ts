import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'ldr72k6k',
  dataset: 'production',

  plugins: [deskTool(undefined), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
