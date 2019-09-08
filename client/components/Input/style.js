import styled from 'styled-components'
import { color } from '../../pages/theme'

const Container = styled.div`
  margin-right: ${props => props.hasMarginRight ? '10px' : ''};
`

const Label = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${color.blueGrey};
`

const Input = styled.input`
  padding: 15px 16px;
  width: ${props => props.width};
  outline: none;
  font-size: 20px;
  height: 50px;
  background-color: ${color.white};
  color: ${color.black};
  border-radius: .5em;
  box-sizing: border-box;
  border: 1px solid ${color.teal};

  &::placeholder {
    color: ${color.blueGrey};
    font-size: 16px;
  }

  ${({ disabled }) => disabled && `
    background-color: ${color.lightGrey};
    cursor: not-allowed; 
  `}
`

export { Container, Label, Input }
