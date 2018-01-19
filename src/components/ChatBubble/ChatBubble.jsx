// EXTERNAL DEPENDENCIES
import React from 'react'
import styled from 'styled-components'

import { Flex, Typography } from 'components'

const { P } = Typography

const Wrapper = styled.div`
  max-width: 80%;
  border-radius: 10px;
  padding: 10px;
  margin: 2px 10px;
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
`

const ChatBubble = props => {
  const { right, left, content } = props
  return (
    <Wrapper right={right} left={left}>
      <P>{content}</P>
    </Wrapper>
  )
}

export default ChatBubble
