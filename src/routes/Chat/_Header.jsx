// EXTERNAL DEPENDENCIES
import React from 'react'
import { history } from '../../App'

// INTERNAL DEPENDENCIES
import { Flex, Typography, Button } from 'components'

const { H1 } = Typography

const Header = props => {
  return (
    <Flex>
      <H1>This is the chat interface</H1>
      <Button onClick={(e)=>history.push('/quiz')}>Quiz</Button>
    </Flex>
  )
}

export default Header
