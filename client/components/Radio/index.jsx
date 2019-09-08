import React from 'react'
import { Container, Item, RadioButtonOuterCircle, RadioButtonInsideCircle, Label } from './style'

const Radio = ({
  data,
  isActive,
  label,
  handleClick,
  disable=false
}) => {

  return (
    <Container>
      <Item disable={disable}>
        <RadioButtonOuterCircle isActive={isActive} onClick={() => disable ? {} : handleClick()}>
          <RadioButtonInsideCircle isActive={isActive}/>
        </RadioButtonOuterCircle>
        <Label>{label}</Label>
      </Item>
    </Container>
  )
}

export default Radio