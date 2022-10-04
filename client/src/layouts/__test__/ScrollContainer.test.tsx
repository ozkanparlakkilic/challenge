import React from 'react';
import { render } from '@testing-library/react';
import { ScrollContainer } from '@/layouts';

describe('Renderings', () => {
    it('should render the child component', () => {
      const childElement = ("<div>Testing</div>")
      const { container } = render(<ScrollContainer children={childElement} />)
      expect(container).toMatchSnapshot();
    });
});