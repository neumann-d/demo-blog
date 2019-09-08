import styled, { keyframes } from 'styled-components'
import { color, zIndex } from '../../pages/theme'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoaderContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${zIndex.moderate};
`

const Loader = styled.div`
  width:200px;
  height:200px;
  border: 20px solid ${color.teal};
  border-top: 20px solid ${color.white};
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
`

export { Loader, LoaderContent }