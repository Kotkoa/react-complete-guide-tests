import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

describe('Greeting Component', () => {
  test('renders Hello World as a text', () => {
    //Arrange
    render(<Greeting />)
    //Act

    //Assert
    const helloWorldElement = screen.getByText('Hello World!')
    expect(helloWorldElement).toBeInTheDocument()
  })

  test('renders good to see you if the button was not clicked', () => {
    render(<Greeting />)
    const outputElement = screen.getByText('good to see you', { exact: false })
    expect(outputElement).toBeInTheDocument()
  })

  test('render changed if the button was changed', () => {
    render(<Greeting />)

    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    const outputElement = screen.getByText('Changed!')
    expect(outputElement).toBeInTheDocument()
  })

  test('does not render "good to see you"', () => {
    render(<Greeting />)

    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    const outputElement = screen.getByText('good to see you!', { exact: false })
    expect(outputElement).toBeNull()
  })
})
