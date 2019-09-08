import React from 'react'
import {
  TableColumn,
  TableContainer,
  TableHeader,
  TableRow,
  TableBody,
} from './style'

const Table = ({
  tableHeaderData,
  tableColumnData,
  width = '100%',
  onClick,
  leaveLastTwoColumn
}) => {
  const getTableHeaders = (data) => {
    return data.length
      ? data.map((header, index) => (
        <TableHeader key={`${header}-${index}`}>{header}</TableHeader>
      ))
      : ''
  }

  const getTableData = (data, headerLength) => {
    return data && data.length
      ? data.map((item, i) => {
          const tempArray = Object.keys(item)
          return (
            <TableRow
              isOdd={i % 2 !== 0}
              key={`row-${i}`}
              onClick={() => onClick(item)}
              bgStatusColor={item.color}
            >
              {tempArray.map((columnData, index) => {
                if(leaveLastTwoColumn && tempArray.length-index < 3)
                  return
                return (
                  <TableColumn key={`${i}-${item[columnData]}-${index}`}>
                    {item[columnData]}
                  </TableColumn>
                )
              })}
            </TableRow>
          )
        })
      : <TableRow isOdd>
          <TableColumn key={'row-empty'} colSpan={headerLength}>No data found!</TableColumn>
        </TableRow>
  }

  return (
    <TableContainer width={width}>
      <TableBody>
        <thead>
          <TableRow isHeader>
            {getTableHeaders(tableHeaderData)}
          </TableRow>
        </thead>
        <tbody>{getTableData(tableColumnData, tableHeaderData.length)}</tbody>
      </TableBody>
    </TableContainer>
  )
}

export default Table
