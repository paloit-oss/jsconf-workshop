// EXTERNAL DEPENDENCIES
import React from 'react'

// INTERNAL DEPENDENCIES
import { Flex, Typography } from 'components'

const { H5 } = Typography

const Mentions = props => {
  const jsConf = props.mentions.get('jsConf')
  const paloIT = props.mentions.get('paloIT')

  return (
    <Flex>
      <H5>Mentions:</H5> {jsConf} JSConf / {paloIT} Palo IT
    </Flex>
  )
}

export default Mentions
