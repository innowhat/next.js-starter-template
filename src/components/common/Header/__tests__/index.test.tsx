import { render, screen } from '@testing-library/react'
import Header from '@/components/common/Header'

describe('Header', () => {
  it('renders a header section', () => {
    render(<Header />)
    const headerElement = screen.getByTestId('header')
    expect(headerElement).toBeInTheDocument()
  })
})
