import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

describe('Greeting Component', () => {
  test('renders Hello World as a text', () => {
    //Arrange
    render(<Greeting />)
    //Act

    //Assert
    const helloWorldElement = screen.getByText('Its good to see you!')
    expect(helloWorldElement).toBeInTheDocument()
  })
})
