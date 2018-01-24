// EXTERNAL DEPENDENCIES
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// INTERNAL DEPENDENCIES
import { Flex } from 'components'
import { ChatBubble, GenericMsg, ProfilePicture } from 'local'
import { fail } from 'assert';

const Wrapper = styled.div`
  height: 100%;
  min-width: 100%;
  overflow: scroll;
`

const FlexWrapper = Flex.extend`
  min-height: 100%;
`

class Chats extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.chats !== nextProps.chats) {
  //     console.log('DIFF')
  //     return true
  //   }
  //   console.log('NO DIFF')
  //   return false
  // }
  render() {
    const { chats } = this.props
    return (
      // <Wrapper>
      <Wrapper innerRef={this.props.containerRef}>
        <FlexWrapper justifyContent={'flex-end'} alignItems={'center'} flexDirection={'column'}>
          {chats.map(
            (chat, i) =>
              chat.get('type') === 'chat' ? (
                <ChatBubble
                  key={i}
                  right={chat.get('isSelf')}
                  left={!chat.get('isSelf')}
                  content={chat.get('message')}
                  username={chat.get('username')}
                  isSelf={chat.get('isSelf')}
                  showResendButton={chat.get('showResendButton')}
                />
              ) : (
                <GenericMsg key={i} content={chat.get('message')} />
              )
          )}
        </FlexWrapper>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps', state, ownProps)
  return {
    chats: state.getIn(['chats'])
  };
};

export default connect(mapStateToProps)(Chats);
