import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  ${props => props.green && 'background: green'};
  ${props => props.yellow && 'background: yellow'};
  margin: 20px;
  padding: 10px;
`

const StyledComp = () => {
  return (
    <div>
      <CustomButton green>Styled Component 1</CustomButton>
      <CustomButton yellow>Styled Component 2</CustomButton>
    </div>
  );
}

export default StyledComp
