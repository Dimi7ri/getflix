import { render } from '@testing-library/react';
import ErrorMessage from './index';

describe('Error Message Component', () => {

  it('should render error message correctly', () => {
    const { getByTestId } = render(<ErrorMessage />);
    expect(getByTestId('error-message')).toBeTruthy();
    expect(getByTestId('error-message').textContent).toBe('Opps.. It looks like the movie you are looking for cannot be found.');
  });

});
