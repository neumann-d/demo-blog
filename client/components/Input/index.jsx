import React from 'react'
import { Container, Label, Input } from './style'

const InputComp = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  hasMarginRight,
  min,
  disabled,
  width
}) => {
  return (
    <Container hasMarginRight={hasMarginRight}>
      <Label>
        {label}
      </Label>
      <Input
        width={width}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        min={min}
        disabled={disabled}
      />
    </Container>
  )
}

export default InputComp