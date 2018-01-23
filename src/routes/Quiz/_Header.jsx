// EXTERNAL DEPENDENCIES
import React from 'react'
import styled from 'styled-components'

// INTERNAL DEPENDENCIES
import { Typography } from 'components'

const { H3, H5 } = Typography

const Wrapper = styled.div`
  cursor: text;
  padding: 10px;
  transition: all 0.5s;
  width: 90%;
  margin: auto;
`

const Header = props => {
const { username } = props
  return (
    <Wrapper>
      <H3>React & Redux Understanding - Quiz</H3>
      <H5>Hello {username}</H5>
    </Wrapper>
  )
}

export default Header
