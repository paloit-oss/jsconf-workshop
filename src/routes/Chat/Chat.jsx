// EXTERNAL DEPENDENCIES
import React from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'

// INTERNAL DEPENDENCIES
import { editInput, sendChatMsg } from 'actions'
import { Flex, Container, Input, Typography, Form, Space } from 'components'
import { Header, ChatContainer, MessageInput } from 'local'
import RouteProtect from 'hoc/RouteProtect'

const { H1 } = Typography
const CHAT_INPUT = 'chat'

const Chat = props => {
  const { dispatch, state } = props
  const currentInputMsg = state.getIn(['inputs', CHAT_INPUT, 'value'], '')
  const chats = state.getIn(['chats'], List())
  const username = state.get('username')
  let chatContainerRef = null
  const onChatSubmit = e => {
    e.preventDefault()
    dispatch(
      sendChatMsg({
        value: currentInputMsg,
        isSelf: true,
        name: CHAT_INPUT,
        username
      })
    )
    chatContainerRef.scrollTop = chatContainerRef.scrollHeight
  }
  return (
    <Flex justifyContent={'center'} height={'100%'}>
      <Container maxWidth={'600px'}>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          height={'100%'}
        >
          <Header />
          <ChatContainer
            containerRef={chatContainer => (chatContainerRef = chatContainer)}
            chats={chats}
          />
          <Space height={'20px'} />
          <MessageInput
            currentInputMsg={currentInputMsg}
            username={username}
            dispatch={dispatch}
            onSubmit={onChatSubmit}
          />
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

export default connect(s, d)(RouteProtect(Chat))
