import React from 'react'

import { Button } from '../../components/Button'

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  return (
    <div>
      Hello world!
      <Button>Click</Button>
    </div>
  )
}

export default Index
