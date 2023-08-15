import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {ImageHotspotArray} from 'sanity-plugin-hotspot-array'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'ldr72k6k',
  dataset: 'production',

  plugins: [deskTool(undefined), visionTool(), ImageHotspotArray, colorInput()],

  schema: {
    types: schemaTypes,
  },
})
