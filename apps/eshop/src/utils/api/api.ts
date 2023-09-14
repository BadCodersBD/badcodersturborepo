'use client'
import axios, { type AxiosInstance } from 'axios'
import Cookies from 'universal-cookie'

export const apiSetup = async () => {
  const api: AxiosInstance = axios.create({
    baseURL: 'https://neos-server.vercel.app/api/v1',

    // devServer url for testing
    // baseURL: 'https://devserver.vercel.app/api/v1',
    // You can add other default configurations like headers, timeout, etc.
  })
  const cookie = new Cookies()
  const accessToken = cookie.get('token')
  if (accessToken) {
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken.token}`
  }

  return api
}
//added latest
