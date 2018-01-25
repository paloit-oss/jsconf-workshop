import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

const buttonBase = props => `
  margin: 20px;
  padding: 10px;
`

const Button = styled.button`
  ${buttonBase}
  background: ${props => props.theme.primary};
`
const SuperButton = styled.button`
  ${buttonBase}
  background: ${props => props.theme.primary};
  border-radius: 8px;
`
const theme1 = {
  primary: 'green'
}

const theme2 = {
  primary: 'yellow'
}

const StyledComp = () => {
  return (
    <div>
      <ThemeProvider theme={theme1}>
        <Button>Styled Component 1</Button>
      </ThemeProvider>
      <ThemeProvider theme={theme2}>
        <SuperButton>Styled Component 2</SuperButton>
      </ThemeProvider>
    </div>
  );
}

export default StyledComp
