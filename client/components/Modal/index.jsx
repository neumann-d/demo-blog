import React from 'react'

import {
  ModalContent,
  CloseButton,
  ModalHeading,
  Header,
  Content
} from './style'

const Modal = ({
  modalHeadline,
  children,
  closeModal,
}) => {

  return (
    <ModalContent>
      <Header>
        <ModalHeading>{modalHeadline}</ModalHeading>
        {closeModal && <CloseButton onClick={closeModal}>&times;</CloseButton>}
      </Header>
      <Content>{children}</Content>
    </ModalContent>
  )
}

export default Modal