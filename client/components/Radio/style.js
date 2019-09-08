import styled from 'styled-components'
import { color } from '../../pages/theme'

const Container = styled.div`
  display: inline-block;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`

const Item = styled.div`
  display: flex;
  align-items: center;

  ${({ disable }) => disable && `
    cursor: not-allowed;
  `}
`

const RadioButtonOuterCircle = styled.div`
  min-width: 24px;
  min-height: 24px;
  border: 1px solid ${color.teal};
  border-radius: 50%;
  background-color: ${color.white};
  position: relative;

  &:hover {
    ${({ isActive }) => !isActive && `
      background-color: ${color.lightGrey};
    `}
  }
`

const RadioButtonInsideCircle = styled.div`
  min-width: 18px;
  min-height: 18px;
  position: absolute;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-9px, -9px);
  background-color: ${color.white};

  ${({ isActive }) => isActive && `
    background-color: ${color.teal};
  `}
`

const Label = styled.label`
  font-size: 24px;
  color: ${color.black};
  margin-left: 10px;
`

export { Container, Item, RadioButtonOuterCircle, RadioButtonInsideCircle, Label }