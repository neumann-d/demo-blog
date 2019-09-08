import styled from 'styled-components'
import { zIndex, color } from '../../pages/theme'

const ModalBackground = styled.div`
  position: absolute;
  z-index: ${zIndex.low};
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0,0,0,0.4);
  display: none;
  ${({isDisplay}) => isDisplay && `
    display: block;
  `}
`

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${color.white};
  padding: 50px 50px 20px;
  z-index: ${zIndex.moderate};
  border: 1px solid #888;
  border-radius: 4px;
  font-family: ${props => props.theme.timesNewRoman};
  font-size: ${props => props.theme.headlineFontSize};
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const ModalHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${color.teal};
`

const CloseButton = styled.span`
  color: ${color.blueGrey};
  font-size: 30px;
  font-weight: bold;
  transition: font-size .3s;

  :hover {
    color: ${color.teal};
    text-decoration: none;
    cursor: pointer;
    font-size: 40px;
    transition: font-size .3s;
  }
`

const Content = styled.div`
  overflow: scroll;
  max-height: 70vh;
`

const Footer = styled.div`
  width: 100%;
  margin-top: 50px;
  text-align: right;
`

export {
  ModalBackground,
  ModalContent,
  CloseButton,
  ModalHeading,
  Header,
  Content,
  Footer
}