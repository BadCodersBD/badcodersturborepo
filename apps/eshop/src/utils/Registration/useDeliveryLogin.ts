import { useReducer } from 'react'
import { useForm } from 'react-hook-form'
import type { LoginFormType } from '../../types/types'
import { signIn } from 'next-auth/react'
import { postMethod } from '../api/postMethod'
import { endPoints } from '../api/route'
import Cookies from 'universal-cookie'
import { toast } from 'react-hot-toast'
import router from 'next/router'

export const useDeliveryLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormType>({ mode: 'onChange' })

  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'submitting':
          return { ...prevState, submitting: action.value }
        case 'error':
          return { ...prevState, loginError: action.value }
        case 'loggedInData':
          return { ...prevState, loggedInData: action.value }
        default:
          return prevState
      }
    },
    {
      submitting: false,
      loginError: '',
      loggedInData: undefined,
    },
  )

  const cookies = new Cookies()

  const password = watch('password', '')

  const onSubmit = async (data: LoginFormType) => {
    dispatch({ type: 'submitting', value: true })
    dispatch({ type: 'error', value: '' })

    try {
      await postMethod(endPoints.delivery.auth.login, data)
        .then((response) => {
          if (response?.status === 200) {
            cookies.set('token', { token: response.data.token })
            signIn('credentials', {
              ...response.data,
              redirect: false,
            })

            router.push('/deliveryManDashboard?status=true')
          }
          dispatch({ type: 'loggedInData', value: response?.status })
        })
        .catch((error) => {
          toast.error(error.message)
          console.error('Error creating user:', error)
          dispatch({ type: 'error', value: error.message })
        })
    } catch (error: any) {
      toast.error(error.message)
      dispatch({ type: 'error', value: error.message })
    } finally {
      dispatch({ type: 'submitting', value: false })
    }
  }

  return { register, handleSubmit, errors, password, onSubmit, ...state }
}
