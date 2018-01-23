// EXTERNAL DEPENDENCIES
import React from 'react'

// INTERNAL DEPENDENCIES
import { Button } from 'components'

const CHAT_INPUT = 'quiz'

const Validate = props => {
  const { error } = props
  return (
      <Button
        type={'submit'}
        name={'submit-button'}
        error={error}
      >Submit</Button>
  )
}

export default Validate
