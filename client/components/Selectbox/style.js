import styled from 'styled-components'
import { color } from '../../pages/theme'

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.fullWidth ? '100%' : ''};
  
  ${({ hasMarginRight }) => hasMarginRight && `
    margin-right: 10px;
  `}
`

const Container = styled.select`
  border: 1px solid ${color.teal};
  outline: none;
  height: 50px;
  padding: 15px 16px;
  box-sizing: border-box;
  margin: 0;
  box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
  background-color: ${color.white};
  color: ${color.black};
  font-size: 20px;

  ${({ disabled }) => disabled && `
    background-color: ${color.lightGrey};
    cursor: not-allowed;
  `}
`

const Label = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${color.blueGrey};
`

const Options = styled.option`
  font-weight:normal;
`

export { Container, Options, Label, SelectContainer }