// EXTERNAL DEPENDENCIES
import React from 'react'

// INTERNAL DEPENDENCIES
import { editInput, sendChatMsg } from 'actions'
import { Form, Input } from 'components'

const CHAT_INPUT = 'chat'

const MessageInput = props => {
  const { dispatch, currentInputMsg, username } = props
  return (
    <Form
      onSubmit={e =>
        e.preventDefault() ||
        dispatch(
          sendChatMsg({
            value: currentInputMsg,
            isSelf: true,
            name: CHAT_INPUT,
            username
          })
        )}
      autoComplete='off'
    >
      <Input
        type={'text'}
        name={CHAT_INPUT}
        value={currentInputMsg}
        placeholder={'Message'}
        onChange={value => dispatch(editInput({ value, name: CHAT_INPUT }))}
      />
    </Form>
  )
}

export default MessageInput
