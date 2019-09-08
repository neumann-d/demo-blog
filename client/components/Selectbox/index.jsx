import React from 'react'
import { Container, Options, Label, SelectContainer } from './style'

const SelectBox = ({
  data,
  width,
  height,
  label,
  onChange,
  value,
  hasMarginRight,
  fullWidth,
  disabled
}) => {

  const showAllOptions = () => {
    const tempData = data && data.slice(0)
    tempData && tempData.unshift({name: '---Select---'})
    
    return (
      <Container width={width} height={height} value={value} onChange={onChange} disabled={disabled}>
        { tempData && tempData.map((option, index) => {
            return <Options key={`${option.name}_${index}`} value={option.name}>
              {option.name}
            </Options>
          })
        }
      </Container>
    )
  }

  return (
  <SelectContainer hasMarginRight={hasMarginRight} fullWidth={fullWidth}>
    <Label>{label}</Label>
    {showAllOptions()}
  </SelectContainer>
  )
}

export default SelectBox