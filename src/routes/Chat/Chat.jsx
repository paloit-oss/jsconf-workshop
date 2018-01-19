// EXTERNAL DEPENDENCIES
import React from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'

// INTERNAL DEPENDENCIES
import { editInput } from 'actions'
import { Flex, Container, Input, Typography, Form, Space } from 'components'

import { Header, ChatContainer, MessageInput } from 'local'

const { H1 } = Typography
const CHAT_INPUT = 'chat'

const Chat = props => {
  const currentInputMsg = props.state.getIn(['inputs', CHAT_INPUT, 'value'], '')
  const chats = props.state.getIn(['chats'], List())
  const username = props.state.get('username')
  const { dispatch } = props
  return (
    <Flex justifyContent={'center'} height={'100%'}>
      <Container maxWidth={'600px'}>
        <Flex
          justifyContent={'center'}
          alignContent={'center'}
          flexDirection={'column'}
          height={'100%'}
        >
          <Header />
          <ChatContainer chats={chats} />
          <Space height={'20px'} />
          <MessageInput currentInputMsg={currentInputMsg} username={username} dispatch={dispatch} />
          <Space height={'50px'} />
        </Flex>
      </Container>
    </Flex>
  )
}

// s function
const s = state => ({ state })

// d function
const d = dispatch => ({ dispatch })

export default connect(s, d)(Chat)
