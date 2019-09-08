import styled from 'styled-components'
import { color, zIndex } from '../../pages/theme'

const Layout = styled.div`
  border-radius: 4px;
  border: 1px solid ${color.teal};
  position: relative;
  margin: 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 9px 0px ${color.darkGrey};
  transition: box-shadow .5s ease;
  background-color: ${color.teal};

  ${({ isActive }) => !isActive && `
    background-color: ${color.grey};
  `}

  &:hover {
    box-shadow: 10px 13px 10px 1px ${color.lightGrey};
    cursor: pointer;
  }
`

const Icon = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
`

const Image = styled.img`
  width: 15px;
  height: 15px;
  z-index: ${zIndex.average};
  box-shadow: 0px 10px 10px -10px ${color.white};
  transition: box-shadow .5s ease;
  
  &:hover {
    box-shadow: 0px 0px 10px 2px ${color.grey};
    ${({ isActive }) => !isActive && `
      box-shadow: 0px 0px 10px 2px ${color.black};
  `}
  }
`

const Content = styled.div`
  padding: 50px;
  text-align: center;
`

const Header = styled.div`
  color: ${color.white};
  font-size: 30px;
  font-style: bold;
  text-align: center;
  margin-bottom: 20px;

  ${({ isActive }) => !isActive && `
    color: ${color.black};
  `}
`

const Details = styled.div`
  margin-bottom: 20px;
  text-align: center;
`

const Title = styled.span`
  color: ${color.yellow};

  ${({ isActive }) => !isActive && `
    color: ${color.black};
  `}
`

const Info = styled.span`
  margin-left: 10px;
  color: ${color.white};
  font-weight: bold;

  ${({ isActive }) => !isActive && `
    color: ${color.black};
  `}
`


export { Layout, Header, Details, Info, Title, Content, Icon, Image }