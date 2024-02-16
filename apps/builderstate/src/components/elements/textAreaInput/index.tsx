import type { ReactNode } from 'react'
import { useAppDispatch } from '../../../_redux/hooks/hooks'
import { Textarea } from '@nextui-org/react'
import type { UnknownAction, Dispatch } from '@reduxjs/toolkit'

type Props = {
  name: string
  minRows?: number
  maxRows?: number
  isInvalid: boolean
  errorMessage: string
  variant: 'flat' | 'bordered' | 'faded' | 'underlined'
  label: string
  placeholder?: string
  color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  endContent?: ReactNode
  startContent?: ReactNode
  value: string
  handleChange: (name: string, value: string | number) => (dispatch: Dispatch<UnknownAction>) => void
  size: 'lg' | 'md' | 'sm'
}
const TextAreaInput = ({
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
  minRows = 1,
  maxRows = 5,
}: Props) => {
  const dispatch = useAppDispatch()
  return (
    <Textarea
      minRows={minRows}
      maxRows={maxRows}
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

export default TextAreaInput