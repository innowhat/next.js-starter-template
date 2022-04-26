import { render, screen } from '@testing-library/react'
import Footer from '@/components/common/Footer'

describe('Footer', () => {
  it('renders the footer section', () => {
    render(<Footer />)
    const footerElement = screen.getByTestId('footer')
    expect(footerElement).toBeInTheDocument()
  })
})
