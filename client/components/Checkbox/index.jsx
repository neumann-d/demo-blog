import React from 'react'
import { Container, Item, CheckboxOutsideSquare, Label } from './style'

const Checkbox = ({
  label,
  isActive,
  handleClick,
  disable=false
}) => {
  return (
    <Container>
      <Item disable={disable}>
        <CheckboxOutsideSquare isActive={isActive} onClick={() => disable ? {} : handleClick()} />
        <Label>{label}</Label>
      </Item>
    </Container>
  )
}

export default Checkbox