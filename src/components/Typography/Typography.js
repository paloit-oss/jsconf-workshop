// EXTERNAL DEPENDENCIES
import styled from 'styled-components'

const Typography = styled.div`
  font-family: Open Sans;
`

Typography.H1 = Typography.extend`
  font-size: 50px;
  font-weight: bold;
`

Typography.H2 = Typography.extend`
  font-size: 36px;
`

Typography.H3 = Typography.extend`
  font-size: 28px;
`

Typography.H4 = Typography.extend`
  font-size: 26px;
`

Typography.H5 = Typography.extend`
  font-size: 14px;
`

export default Typography
