import React from 'react';
import { render } from '@testing-library/react';
import { ContentLayout } from '@/layouts';

describe('Renderings', () => {
    it('should render the child component', () => {
      const childElement = ("<div>Testing</div>")
      const { container } = render(<ContentLayout children={childElement} />)
      expect(container).toMatchSnapshot();
    });
});