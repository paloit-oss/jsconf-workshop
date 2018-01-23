// EXTERNAL DEPENDENCIES
import React from 'react'
import styled from 'styled-components'

// INTERNAL DEPENDENCIES
import { Typography } from 'components'
import { Option } from 'local'

const Wrapper = styled.div`
  cursor: text;
  padding: 10px;
  position: relative;
  transition: all 0.5s;
  width: 90%;
  margin: auto;
`
const { P } = Typography

const Question = props => {
  const { question, qNo } = props
  return (
    <Wrapper>
      <P id={'q'+question.qID}>{qNo + 1}. {question.question}</P>
      <ol>
	      {question.options.map(
	            (option, i) => <Option name={question.qID} key={i} option={option} />
	          )} 
       </ol>
    </Wrapper>
  )
}

export default Question
