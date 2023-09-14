'use client'
import { apiSetup } from '../api'

export const getMethod = async (route: any, params: any) => {
  const api = apiSetup()
  try {
    const response = await (await api).get(`${route}/${params}`)
    return response
  } catch (error) {
    throw error
  }
}
