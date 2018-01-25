import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  ${props => props.small && 'padding: 5px;'};
  ${props => props.medium && 'padding: 15px;'};
  ${props => props.large && 'padding: 25px;'};
  margin: 20px;
`

const StyledComp = () => {
  return (
    <div>
      <CustomButton small>Styled Component 1</CustomButton>
      <CustomButton medium>Styled Component 1</CustomButton>
      <CustomButton large>Styled Component 2</CustomButton>
    </div>
  );
}

export default StyledComp
