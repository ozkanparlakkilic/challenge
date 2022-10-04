import { render } from '@testing-library/react';
import React from 'react';
import { Home } from '@/pages';

jest.mock("react-router-dom")

describe('Renderings', () => {
    it('should render the child component', () => {
      const { container } = render(<Home />)
      expect(container).toBeInTheDocument();
    });
});