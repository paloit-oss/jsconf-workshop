// EXTERNAL DEPENDENCIES
import React from 'react'
import { connect } from 'react-redux'
import { List, Map } from 'immutable'

// INTERNAL DEPENDENCIES
import { editInput, init } from 'actions'
import { Flex, Container, Input, Typography, Form, Space, Absolute } from 'components'

import { Header, ChatContainer, MessageInput, Mentions } from 'local'

const { H1 } = Typography
const CHAT_INPUT = 'chat'

class Chat extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(init({}))
  }

  render() {
    console.log('render')
    const currentInputMsg = this.props.state.getIn(['inputs', CHAT_INPUT, 'value'], '')
    const chats = this.props.state.getIn(['chats'], List())
    const mentions = this.props.state.getIn(['mentions'], Map())
    const username = this.props.state.get('username')
    const { dispatch } = this.props
    return (
      <Flex justifyContent={'center'} height={'100%'}>
        <Container maxWidth={'700px'}>
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
            <Mentions mentions={mentions} dispatch={dispatch} />
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

export default connect(s, d)(Chat)
