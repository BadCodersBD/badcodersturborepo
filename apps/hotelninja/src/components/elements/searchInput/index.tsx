import React from 'react'
import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import { useAppDispatch } from '../../../_redux/hooks/hooks'
import type { UnknownAction, Dispatch } from '@reduxjs/toolkit'

type Props = {
  name: string
  variant: 'flat' | 'bordered' | 'faded' | 'underlined'
  label: string
  color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  value: string
  size: 'lg' | 'md' | 'sm'
  placeholder?: string
  list: Array<{ value: string; label: string }>
  handleChange: (name: string, value: string | number) => (dispatch: Dispatch<UnknownAction>) => void
}

const SearchInput = ({ label, placeholder, value, variant, color, name, size, list, handleChange }: Props) => {
  const dispatch = useAppDispatch()
  return (
    <Autocomplete
      variant={variant}
      fullWidth
      size={size}
      label={label}
      placeholder={placeholder}
      defaultInputValue={value}
      color={color}
      onInputChange={(value) => {
        dispatch(handleChange(name, value))
      }}
    >
      {list?.map((item) => (
        <AutocompleteItem key={item.value} value={item.value} className="font-inter ">
          {item.label}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  )
}

export default SearchInput