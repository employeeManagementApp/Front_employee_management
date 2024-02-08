import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

test('renders LoginPage when path is /', () => {
  const { container } = renderWithRouter(<App />, { initialEntries: ['/'] })
  expect(container.innerHTML).toMatch(/LoginPage/i)
})

test('renders NotFound when path is not recognized', () => {
  const { container } = renderWithRouter(<App />, {
    initialEntries: ['/random'],
  })
  expect(container.innerHTML).toMatch(/NotFound/i)
})

function renderWithRouter(ui, { initialEntries = ['/'] } = {}) {
  return {
    ...render(
      <MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>,
    ),
  }
}
