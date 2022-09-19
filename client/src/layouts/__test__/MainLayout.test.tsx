import React from 'react';
import { render } from '@testing-library/react';
import MainLayout from '../MainLayout/MainLayout';

describe('Renderings', () => {
    it('should render the child component', () => {
      const childElement = ("<div>Testing</div>")
      const { container } = render(<MainLayout children={childElement} />)
      expect(container).toMatchSnapshot();
    });
});