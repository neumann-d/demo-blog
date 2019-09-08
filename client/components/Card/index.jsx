import React from 'react'
import { Layout, Header, Details, Title, Info, Content, Icon, Image } from './style'

const Card = ({
  isActive,
  data,
  handleEdit
}) => {

  const showDate = (date) => {
    const dateOBJ = new Date(date)
    return `${dateOBJ.getDate()}-${dateOBJ.getMonth() + 1}-${dateOBJ.getFullYear()}`
  }

  return (
    <Layout isActive={isActive}>
      <Content onClick={() => handleEdit()}>
        <Header isActive={isActive}>
          {data.departmentName}
        </Header>
        <Details>
          <Title isActive={isActive}>Start Date:</Title>
          <Info isActive={isActive}>{showDate(data.startDate)}</Info>
        </Details>
        <Details>
          <Title isActive={isActive}>End Date:</Title>
          {isActive
            ? <Info isActive={isActive}>Not Defined</Info>
            : <Info isActive={isActive}>{showDate(data.endDate)}</Info>
          }
        </Details>
        <Details>
          <Title isActive={isActive}>Members:</Title>
          <Info isActive={isActive}>undefined</Info>
        </Details>
      </Content>
    </Layout>
  )
}

export default Card