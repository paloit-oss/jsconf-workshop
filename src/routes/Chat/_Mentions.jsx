// EXTERNAL DEPENDENCIES
import React from 'react'

// INTERNAL DEPENDENCIES
import { Flex, Typography } from 'components'

const { H5 } = Typography

class Mentions extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.mentions !== nextProps.mentions
  }

  render() {
    const jsConf = this.props.mentions.get('jsConf')
    const paloIT = this.props.mentions.get('paloIT')
  
    return (
      <Flex>
        <H5>Mentions:</H5> {jsConf} JSConf / {paloIT} Palo IT
      </Flex>
    )  
  }
}

export default Mentions
