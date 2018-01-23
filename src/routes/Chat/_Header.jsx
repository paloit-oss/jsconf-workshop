// EXTERNAL DEPENDENCIES
import React from 'react'
import styled from 'styled-components'

// INTERNAL DEPENDENCIES
import { Flex, Typography } from 'components'
import { logo } from 'local.png'

const { H5 } = Typography

const Img = styled.img`
  height: ${({ height }) => height || `auto`};
  width: ${({ width }) => width || `auto`};
  margin-left: -10px;
`

const Header = props => {
  return (
    <Flex
      alignItems={'flex-start'}
      justifyContent={'center'}
      flexDirection={'column'}
      height={'150px'}
    >
      <Img width={'100px'} src={logo} />
      <H5>Chatroom</H5>
    </Flex>
  )
}

export default Header
