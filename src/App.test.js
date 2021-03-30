import { render, screen } from '@testing-library/react';
import App from './App';

/* eslint-disable */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Home Component');
  expect(linkElement).toBeInTheDocument();
});
