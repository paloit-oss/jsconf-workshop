// EXTERNAL DEPENDENCIES
import React from 'react'
import styled from 'styled-components'

import { Flex, Typography } from 'components'

const { P, H5 } = Typography

const Wrapper = styled.div`
  max-width: 80%;
  border-radius: 10px;
  padding: 10px;
  margin: 2px 10px;
  transition: background-color 0.5s ease-out;
  ${({ right }) =>
    right &&
    `
    align-self: flex-end;
    color: white;
    background-color: #38E680;
  `};
  ${({ left }) =>
    left &&
    `
    align-self: flex-start;
    color: black;
    background-color: #F0F0EC;
  `};
  ${({ error }) =>
    error &&
    `
    background-color: #FC4F60 !important;
  `};
`

const ChatBubble = props => {
  const { right, left, content, username, isSelf, showResendButton } = props
  return (
    <Wrapper right={right} left={left} error={showResendButton}>
      {!isSelf && <H5>{username}</H5>}
      <P>{content}</P>
      {showResendButton && <P>Resend</P>}
    </Wrapper>
  )
}

export default ChatBubble
