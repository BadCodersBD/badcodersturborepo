import React from 'react'
import { Select, SelectItem } from '@nextui-org/react'
import type { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { useAppDispatch } from '../../../_redux/hooks/hooks'

type Props = {
  label: string
  selectionMode: 'multiple' | 'single' | 'none'
  variant: 'flat' | 'bordered' | 'faded' | 'underlined'
  color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size: 'lg' | 'md' | 'sm'
  placeholder?: string
  name: string
  list: Array<{ item: string; _id: string; label: string }>
  handleChange: (name: string, value: string | number) => (dispatch: Dispatch<UnknownAction>) => void
}

const SelectInput = ({ label, selectionMode, placeholder, name, list, handleChange, variant, color, size }: Props) => {
  const dispatch = useAppDispatch()
  return (
    <Select
      label={label}
      selectionMode={selectionMode}
      placeholder={placeholder}
      variant={variant}
      color={color}
      size={size}
      onChange={(e) => {
        dispatch(handleChange(name, e.target.value))
      }}
    >
      {list?.map((data) => (
        <SelectItem key={data._id} value={data._id}>
          {data.item}
        </SelectItem>
      ))}
    </Select>
  )
}

export default SelectInput
