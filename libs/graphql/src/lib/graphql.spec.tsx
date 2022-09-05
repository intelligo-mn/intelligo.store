import { render } from '@testing-library/react';

import Graphql from './graphql';

describe('Graphql', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Graphql />);
    expect(baseElement).toBeTruthy();
  });
});
