import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se tem titulo', () => {
  render(<App />);
  const titulo = screen.getByText(/Daniel Hott/i);
  expect(titulo).toBeInTheDocument();
});
