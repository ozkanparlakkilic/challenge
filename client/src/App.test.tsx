import React from 'react';
import App from './App';
import { renderWithProviders } from './store/__test__/test_utils';

describe('Renderings', () => {
    it('should render the child component', () => {
      const { container } = renderWithProviders(<App />)
      expect(container).toBeInTheDocument();
    });
});
