import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { color } from '../../pages/theme'

const Link = styled(RouterLink)`
  color: ${props => props.color};
  padding: .5rem;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: ${color.white};
  }

  &:focus {
    color: ${color.white};
  }

  ${({ showBlock }) => showBlock && `
    display: block;
    &:focus, &:hover {
      color: ${color.lightGrey};
    }
  `}
`

export { Link }