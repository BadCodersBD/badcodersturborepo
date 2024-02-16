'use client'
import { apiSetup } from '../api'

type Props = {
  route: string
  updateData: string | number | boolean | object | []
}

export const putMethod = async ({ route, updateData }: Props) => {
  try {
    const api = apiSetup()
    const response = await (await api).put(route, updateData)
    return response
  } catch (error) {
    throw error
  }
}
