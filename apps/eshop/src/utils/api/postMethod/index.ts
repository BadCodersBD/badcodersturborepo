'use client'
import { apiSetup } from '../api'

export const postMethod = async (route: any, postData: any) => {
  try {
    const api = apiSetup()
    const response = await (await api).post(route, postData)
    return response
  } catch (error) {
    throw error
  }
}
