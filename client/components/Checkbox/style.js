import styled from 'styled-components'
import { color, zIndex } from '../../pages/theme'
import tickIcon from '../../assets/icons/tick.png'

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

const CheckboxOutsideSquare = styled.div`
  min-width: 24px;
  min-height: 24px;
  border: 1px solid ${color.teal};
  border-radius: 4px;
  background-color: ${color.white};

  ${({ isActive }) => isActive && `
    background: url(${tickIcon});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${color.teal};
  `}

  &:hover {
    ${({ isActive }) => !isActive && `
      background-color: ${color.lightGrey}
    `}
  }
`

const Label = styled.label`
  font-size: 24px;
  color: ${color.black};
  margin-left: 10px;
`

export { Container, Item, CheckboxOutsideSquare, Label }