import type { ReactNode } from 'react'
import type { UnknownAction, Dispatch } from '@reduxjs/toolkit'
import { useAppDispatch } from '../../../_redux/hooks/hooks'
import { Input } from '@nextui-org/react'

type Props = {
  type: 'text' | 'password' | 'email' | 'date' | 'number'
  name: string
  isInvalid?: boolean
  errorMessage?: string
  variant: 'flat' | 'bordered' | 'faded' | 'underlined'
  label: string
  placeholder?: string
  color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  endContent?: ReactNode
  startContent?: ReactNode
  value?: string
  handleChange: (name: string, value: string | number) => (dispatch: Dispatch<UnknownAction>) => void
  size: 'lg' | 'md' | 'sm'
}
const TextInput = ({
  type,
  name,
  isInvalid,
  errorMessage,
  variant,
  label,
  color,
  value,
  endContent,
  startContent,
  placeholder,
  handleChange,
  size,
}: Props) => {
  const dispatch = useAppDispatch()
  return (
    <Input
      autoComplete="on"
      type={type}
      name={name}
      isInvalid={isInvalid}
      color={isInvalid ? 'danger' : color}
      errorMessage={isInvalid && errorMessage}
      onChange={(e) => dispatch(handleChange(name, e.target.value))}
      variant={variant}
      label={label}
      startContent={startContent}
      endContent={endContent}
      value={value}
      size={size}
      fullWidth
      placeholder={placeholder}
    />
  )
}

export default TextInput
