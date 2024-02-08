// Import the necessary modules for testing
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


jest.mock('../Components/PrivateRoute', () => ({
  __esModule: true,
  default: jest.fn(() => <div>PrivateRoute</div>),
}));
jest.mock('../Components/AuthentRoute', () => ({
  __esModule: true,
  default: jest.fn(() => <div>AuthentRoute</div>),
}));
test('renders App component', () => {

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/LoginPage/i)).toBeInTheDocument();
  expect(screen.getByText(/PrivateRoute/i)).toBeInTheDocument();
  expect(screen.getByText(/NotFound/i)).toBeInTheDocument();
  expect(screen.getByText(/AuthentRoute/i)).toBeInTheDocument();
});
