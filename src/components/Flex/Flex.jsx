import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignContent }) => alignContent || 'flex-start'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
`

export default Flex
