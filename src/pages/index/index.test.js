import React from 'react'
import { render } from '@testing-library/react'

import Index from './index'

test('shows the hello world message', () => {
  const { getByText } = render(<Index />)

  expect(getByText('Hello world!')).not.toBeNull()
})
