import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Rahul Rajan/i);
  expect(headerElement).toBeInTheDocument();
});
