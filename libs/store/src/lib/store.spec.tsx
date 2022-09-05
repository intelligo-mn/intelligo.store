import { render } from '@testing-library/react';

import Store from './store';

describe('Store', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Store />);
    expect(baseElement).toBeTruthy();
  });
});
