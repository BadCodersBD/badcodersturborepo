'use client'
import { apiSetup } from '../api'

export const deleteMethod = async (route: any, deleteData: any) => {
  try {
    const api = apiSetup()
    const response = await (await api).delete(route, deleteData)
    return response
  } catch (error) {
    throw error
  }
}
