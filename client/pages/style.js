import styled from 'styled-components'
import { color } from './theme'
import { Link as RouterLink } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  background-color: ${color.white};
  top: 0;
  left: 0;
  padding-left: 0px;
  padding-top: 0px;
  min-height: 100vh;
  position: relative;
`

const Sidebar = styled.div`
  flex: 1;
  background-color: ${color.blueGrey};
`

const Body = styled.div`
  flex: 7;
  overflow-x: hidden;
`

const Title = styled.h1`
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid #fff;
`

const MenuList = styled.ul`
  list-style: none;
  width: 100%;
  margin: 100px 0;
  padding: 0;
  text-align: center;
`

const MenuItems = styled.li`
  border-bottom: 1px solid #fff;
  padding: 20px;

  &:hover {
    background-color: ${color.red};
  }

  ${({ active }) => active && `
    background-color: ${color.deepPurple};
  `}
`

const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${color.yellow}
  font-size: 20px;
`

export { Container, Sidebar, Body, Title, MenuList, MenuItems, Link }