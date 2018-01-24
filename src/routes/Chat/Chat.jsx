// EXTERNAL DEPENDENCIES
import React from 'react'
import { connect } from 'react-redux'
import { List, Map } from 'immutable'

// INTERNAL DEPENDENCIES
import { Flex, Container, Input, Typography, Form, Space, Absolute } from 'components'
import { Header, ChatContainer, MessageInput, Mentions } from 'local'
import { editInput, sendChatMsg, init } from 'actions'
import RouteProtect from 'hoc/RouteProtect'

const { H1 } = Typography
const CHAT_INPUT = 'chat'

class Chat extends React.Component {
  constructor(props) {
    super(props);
    props.dispatch(init({}))
    this.chatContainerRef = null
  }
  componentDidMount() {
    console.log('chatContainerRef componentDidMount', this.chatContainerRef)
    if (this.chatContainerRef) {
      console.log('IN chatContainerRef')
      this.chatContainerRef.scrollTop = this.chatContainerRef.scrollHeight
    }
  }

  setInnerRef(chatContainer) {
    console.log('= setInnerRef', chatContainer)
    this.chatContainerRef = chatContainer
  }

  render() {
    const { dispatch, state } = this.props
    const currentInputMsg = state.getIn(['inputs', CHAT_INPUT, 'value'], '')
    const chats = state.getIn(['chats'], List())
    const mentions = this.props.state.getIn(['mentions'], Map())
    const username = state.get('username')
    // let chatContainerRef = null
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
      console.log('chatContainerRef', this.chatContainerRef)
      if (this.chatContainerRef) {
        console.log('IN chatContainerRef')
        this.chatContainerRef.scrollTop = this.chatContainerRef.scrollHeight
      }
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
              containerRef={this.setInnerRef}
              // chats={chats}
            />
            <Space height={'20px'} />
            <MessageInput
              currentInputMsg={currentInputMsg}
              username={username}
              dispatch={dispatch}
              onSubmit={onChatSubmit}
            />
            <Space height={'20px'} />
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

export default connect(s, d)(RouteProtect(Chat))
