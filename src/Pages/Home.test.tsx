import { render } from '@testing-library/react';
import Home from './Home';

test('Should render Home page', () => {
  const { getByTestId } = render(<Home />);
  const home = getByTestId('home-page');
  expect(home).toBeTruthy();
  expect(home.className).toBe('content');
  expect(home.textContent).toContain('Find your favorite movies');
});
