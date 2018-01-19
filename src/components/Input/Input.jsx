import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  cursor: text;
  display: flex;
  height: 60px;
  padding: 10px;
  position: relative;
  transition: all 0.5s;
  width: 100%;
`

const Input = styled.input`
  appearance: none;
  background: none;
  border: 0;
  flex: 1 1 auto;
  font-family: Open Sans;
  font-size: 18px;
  order: 2;
  outline: none;
  padding: 0;
  color: black;
  border-bottom: 1px solid grey;
  ${({ error }) => (error && `border-bottom: 1.5px solid #FC4F60 !important;`)}
  ${({ value }) => (value && `border-bottom: 1.5px solid #1f6eda;`)}
  &:focus {
    border-bottom: 1.5px solid #1f6eda;
  }
  &:focus + label {
    top: 0px;
    font-size: 11px;
    font-weight: bold;
    color: #1f6eda;
  }
`

const Placeholder = styled.label`
  position: absolute;
  top: 19px;
  left: 10px;
  font-size: 18px;
  font-family: Open Sans;
  transition: top 0.1s, font-size 0.1s;
  color: grey;
  /**
     * if error OR value OR isFocus
     * - stay top
     * - smaller font
     * - bold font
     * - blue color
     */
  ${({ error, value }) =>
    (error || value) &&
    `
        top: 0px;
        font-size: 11px;
        font-weight: bold;
        color: #1f6eda;
    `} ${({ error }) =>
      error &&
      `
        color: #FC4F60!important;
    `};
`

const Component = props => {
  const {
    // html props
    type,
    name,
    value,
    placeholder,
    // component props
    error,
    // event handlers
    onChange,
    onFocus,
    onBlur
  } = props

  const handleChange = e => onChange(e.target.value)

  return (
    <Wrapper>
      <Input
        type={type}
        name={name}
        value={value}
        error={error}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      <Placeholder error={error} value={value}>
        {placeholder} {error}
      </Placeholder>
    </Wrapper>
  )
}

Component.displayName = 'Input'

export default Component
