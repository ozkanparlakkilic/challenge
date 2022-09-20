import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


describe('Renderings', () => {
    it('should render the child component', () => {
      const { container } = render(<App />)
      expect(container).toMatchSnapshot();
    });
});
