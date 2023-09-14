'use client'
import { apiSetup } from '../api'

export const putMethod = async (route: any, updateData: any) => {
  try {
    const api = apiSetup()
    const response = await (await api).put(route, updateData)
    return response
  } catch (error) {
    throw error
  }
}
