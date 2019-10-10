import React from 'react'
import { render } from '@testing-library/react'

import Button from './Button'

test('renders an button', () => {
  const { container } = render(<Button />)

  expect(container.firstChild).toMatchSnapshot()
})
