// EXTERNAL DEPENDENCIES
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'

// INTERNAL DEPENDENCIES

import { Flex, Container, Space } from 'components'
import { Header, ChatContainer, MessageInput } from 'local'
// import RouteProtect from 'hoc/RouteProtect'

const CHAT_INPUT = 'chat'

class Chat extends Component {
  constructor (props) {
    super(props)
    this.chatContainerRef = null
  }
  componentDidUpdate () {
    this.chatContainerRef.scrollTop = this.chatContainerRef.scrollHeight
  }
  render () {
    const { dispatch, state } = this.props
    const currentInputMsg = state.getIn(['inputs', CHAT_INPUT, 'value'], '')
    const chats = state.getIn(['chats'], List())
    const username = state.get('username')
    return (
      <Flex justifyContent={'center'} height={'100%'}>
        <Container maxWidth={'600px'}>
          <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'} height={'100%'}>
            <Header />
            <ChatContainer containerRef={chatContainer => (this.chatContainerRef = chatContainer)} chats={chats} />
            <Space height={'20px'} />
            <MessageInput currentInputMsg={currentInputMsg} username={username} dispatch={dispatch} />
            <Space height={'50px'} />
          </Flex>
        </Container>
      </Flex>
    )
  }
}

// s function
const s = state => ({ state })

// d function
const d = dispatch => ({ dispatch })

// export default connect(s, d)(RouteProtect(Chat))
export default connect(s, d)(Chat)
