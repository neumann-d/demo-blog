import styled  from 'styled-components'
// import { Icon as IconTag } from 'antd'
import { color } from '../../pages/theme'

const TableContainer = styled.div`
  overflow-x: auto;
  width: ${props => props.width};
`

const TableBody = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  min-width: 100%;
  border: 1px solid #ddd;
`

const TableHeader = styled.th`
  text-align: center;
  padding: 8px;
`

const TableColumn = styled.td`
  text-align: center;
  padding: 8px;
`

const TableRow = styled.tr`
  background-color: ${color.white};
  color: ${color.black};
  border: 1px solid ${color.black};
    
  ${({ bgStatusColor }) => bgStatusColor && `
    background-color: ${color[bgStatusColor]};
  `}

  ${({ isHeader }) => isHeader && `
    background-color: ${color.teal};
    color: ${color.white}
    height: 70px;
  `}
  &:hover {
    cursor: pointer;
  }
`

const Image = styled.img`
  width: 150px;
  height: 100px;
`

export {
  TableColumn,
  TableContainer,
  TableHeader,
  TableRow,
  TableBody,
  Image,
}