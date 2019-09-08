import styled from 'styled-components'
import { color } from '../../pages/theme'

const Button = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border: 1px solid ${props => props.borderColor};
  outline: none;
  font-size: 16px;
  
  ${({ isFlat }) => isFlat && `
    box-shadow: none;
  `}

  ${({ showButton }) => !showButton && `
    display: none;
  `}

  ${({ hasMarginRight }) => hasMarginRight && `
    margin-right: 10px;
  `}

  ${({ isCircle }) => isCircle && `
    border-radius: 50%;
    font-size: 24px;
  `}
  
  &:hover {
    cursor: pointer;
    box-shadow: 0px 8px 10px 1px ${color.teal};
    transition: box-shadow 1s;
  }
`

export { Button }