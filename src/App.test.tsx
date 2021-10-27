import { render } from '@testing-library/react';
import App from './App';

test('Should render App', () => {
  const { getByTestId } = render(<App />);
  const app = getByTestId('app');

  expect(app).toBeTruthy();
  expect(app.textContent).toContain('Find your favorite movies');
  expect(app.className).toBe('container');

});
