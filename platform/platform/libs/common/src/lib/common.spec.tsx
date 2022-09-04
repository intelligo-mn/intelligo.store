import { render } from '@testing-library/react';

import Common from './common';

describe('Common', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Common />);
    expect(baseElement).toBeTruthy();
  });
});
