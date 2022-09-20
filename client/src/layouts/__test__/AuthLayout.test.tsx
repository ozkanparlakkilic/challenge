import React from 'react';
import { render } from '@testing-library/react';
import AuthLayout from '../AuthLayout/AuthLayout';

describe('Renderings', () => {
    it('should render the child component', () => {
      const childElement = ("<div>Testing</div>")
      const { container } = render(<AuthLayout children={childElement} />)
      expect(container).toMatchSnapshot();
    });
});