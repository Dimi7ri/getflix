import { render } from '@testing-library/react';
import SearchInput from './index';
describe('Search Input Component', () => {

  it('should getByTestId search input', () => {
    const { getByTestId } = render(<SearchInput />);
    expect(getByTestId('search-input')).toBeTruthy();
  });

  it('should render search button', () => {
    const { getByTestId } = render(<SearchInput />);
    expect(getByTestId('search-button')).toBeTruthy();
  });

});
