import { render } from '@testing-library/react';

import Config from './config';

describe('Config', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Config />);
    expect(baseElement).toBeTruthy();
  });
});
