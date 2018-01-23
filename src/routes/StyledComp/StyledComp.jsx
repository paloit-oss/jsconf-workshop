import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

const CustomButton = styled.button`
  background: ${props => props.theme.primary};
  margin: 20px;
  padding: 10px;
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
        <CustomButton>Styled Component 1</CustomButton>
      </ThemeProvider>
      <ThemeProvider theme={theme2}>
        <CustomButton>Styled Component 2</CustomButton>
      </ThemeProvider>
    </div>
  );
}

export default StyledComp
