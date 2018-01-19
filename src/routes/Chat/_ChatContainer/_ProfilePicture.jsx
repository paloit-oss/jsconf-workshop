// EXTERNAL DEPENDENCIES
import React from 'react'
import styled from 'styled-components'

import { Flex, Typography } from 'components'

const { H3 } = Typography

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: grey;
  color: white;
  text-align: center;
  line-height: 50px;
`

const GenericMsg = props => {
  const { content } = props
  return (
    <Wrapper>
      <H3>{content}</H3>
    </Wrapper>
  )
}

export default GenericMsg
