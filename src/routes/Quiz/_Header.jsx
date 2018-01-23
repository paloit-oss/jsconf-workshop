// EXTERNAL DEPENDENCIES
import React from 'react'

// INTERNAL DEPENDENCIES
import { Flex, Typography, Wrapper } from 'components'

const { H3, H5 } = Typography

const Header = props => {
const { username } = props
  return (
    <Flex>
      <H5>Hello {username}</H5>
      <H3>React & Redux Understanding - Quiz</H3>
    </Flex>
  )
}

export default Header
