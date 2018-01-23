import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  cursor: text;
  height: 60px;
  padding: 10px;
  position: relative;
  transition: all 0.5s;
  width: 100%;
  margin: auto;
  text-align: center;
`

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

const Placeholder = styled.label`
  font-size: 12px;
  font-family: Open Sans;
  transition: top 0.1s, font-size 0.1s;
  color: #FC4F60!important;
  display: block;
  padding: 10px;
`

const Component = props => {
  const {
    // html props
    type,
    name,
    // component props
    error,
    // event handlers
    onClick,
    onFocus,
    onBlur,
    children
  } = props

  const handleChange = e => onChange(e.target.value)

  return (
    <Wrapper>
      <Placeholder error={error} >
        {error}
      </Placeholder>
      <Button
        type={type}
        name={name}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {children}
      </Button>
      <Placeholder></Placeholder>
    </Wrapper>
  )
}

export default Component
