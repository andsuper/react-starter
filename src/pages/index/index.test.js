import React from 'react'
import { render } from '@testing-library/react'

import Index from './index'
import expectExport from 'expect'

describe('Index page', () => {
  it('Shows "Hello world!"', () => {
    const { getByText } = render(<Index />)

    expectExport(getByText('Hello world!')).not.toBeNull()
  })
})
