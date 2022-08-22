import { render, screen } from '@testing-library/react'
import Async from './Async'

describe('Async coponent', () => {
  test('renders posts if request succeed', () => {
    render(<Async />)

    screen.getByRole()
  })
})
