import { render, screen } from '@testing-library/react';
import App from './App';

test('renders gym management app heading', () => {
  render(<App />);
  expect(screen.getByText(/Admin Workspace/i)).toBeInTheDocument();
});
