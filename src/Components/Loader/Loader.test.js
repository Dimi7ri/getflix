import { render } from '@testing-library/react';
import Loader from './index';
describe('Loader Component', () => {

  it('should render loader', () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId('loader')).toBeTruthy();
  });

});
