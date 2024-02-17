'use client'
import { apiSetup } from '../api'

type Props = {
  route: string
  deleteData: string | number | boolean | object | []
}

export const deleteMethod = async ({ route, deleteData }: Props) => {
  try {
    const api = apiSetup()
    const response = await (await api).delete(route, { data: deleteData })
    return response
  } catch (error) {
    throw error
  }
}
