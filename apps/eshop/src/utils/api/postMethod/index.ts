import api from '../api'

export const postMethod = async (route: any, postData: any) => {
  try {
    const response = await api.post(route, postData)
    return response
  } catch (error) {
    throw error
  }
}
