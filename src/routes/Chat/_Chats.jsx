// EXTERNAL DEPENDENCIES
import React from 'react'
import styled from 'styled-components'

// INTERNAL DEPENDENCIES
import { Flex, ChatBubble } from 'components'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
`

const Chats = props => {
  const { chats } = props
  return (
    <Wrapper>
      <Flex justifyContent={'flex-end'} alignContent={'center'} flexDirection={'column'}>
        {chats.map((chat, i) => <ChatBubble key={i} right content={chat} />)}
      </Flex>
    </Wrapper>
  )
}

export default Chats
