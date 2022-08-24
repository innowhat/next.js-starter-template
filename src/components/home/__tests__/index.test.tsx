import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/components/home'

describe('HomeView', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /NextJS Starter Template/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
