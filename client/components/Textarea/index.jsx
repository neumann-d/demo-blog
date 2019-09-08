import React from 'react'
import { TextAreaComponent } from './style'

const Textarea = ({
  text,
  rows,
  cols,
  onChange
}) => {
  return (
    <TextAreaComponent id={'textArea'} rows={rows} cols={cols} defaultValue={text} onChange={onChange}></TextAreaComponent>
  )
}

export default Textarea