// EXTERNAL DEPENDENCIES
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  max-width: ${({ maxWidth }) => maxWidth || `100%`};
  min-width: 400px;
`
export default Container
