// EXTERNAL DEPENDENCIES
import React from 'react'
import styled from 'styled-components'

// INTERNAL DEPENDENCIES
import { Typography } from 'components'

const Li = styled.li`
  padding: 5px;
  font-size: 17px;
`

const { Label } = Typography

const Option = props => {
  const { option, name } = props
  return (
  	<Li>
  		<input id={'o'+option.oID} type="radio" name={name} value={option.oID} /> {option.option}
  	</Li>
  )
}

export default Option
