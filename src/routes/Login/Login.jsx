// EXTERNAL DEPENDENCIES
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

// INTERNAL DEPENDENCIES
import { editInput } from 'actions'
import { Flex, Container, Input, Typography, Space, Form } from 'components'

const { H1 } = Typography
const USERNAME = 'username'

const Login = props => {
  const { history } = props
  const userName = props.state.getIn(['inputs', USERNAME], '')
  return (
    <Container>
      <Flex justifyContent={'center'} alignContent={'center'} flexDirection={'column'}>
        <H1>This is login</H1>
        <Space height={'55px'} />
        <Form onSubmit={e => e.preventDefault() || history.push('/chat')}>
          <Input
            type={'text'}
            name={USERNAME}
            value={userName}
            placeholder={'Username'}
            onChange={value => props.dispatch(editInput({ value, name: USERNAME }))}
          />
        </Form>
      </Flex>
    </Container>
  )
}

// s function
const s = state => ({ state })

// d function
const d = dispatch => ({ dispatch })

export default withRouter(connect(s, d)(Login))
