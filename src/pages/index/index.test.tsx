import React from 'react'
import { render } from '@testing-library/react'

import Index from './index'

test('shows the hello world message', () => {
  const { getByText } = render(<Index />)

  expect(getByText('Hello world!')).not.toBeNull()
})

test('renders the cta button', () => {
  const { getByText } = render(<Index />)

  expect(getByText('Click')).not.toBeNull()
  expect(getByText('Click').tagName).toBe('BUTTON')
})
