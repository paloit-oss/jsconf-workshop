// EXTERNAL DEPENDENCIES
import React from 'react'
import styled from 'styled-components'

import { Flex, Typography } from 'components'

const { P } = Typography

const Wrapper = styled.div`
  padding: 5px;
  margin: 2px 10px;
  width: 100%;
  text-align: center;
  color: grey;
`

const GenericMsg = props => {
  const { content } = props
  return (
    <Wrapper>
      <P>{content}</P>
    </Wrapper>
  )
}

export default GenericMsg
