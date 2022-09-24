import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Button from '../Button';

describe('Renderings', () => {
    it('should render the button component', () => {
        const props = {
            title: 'Test',
            style: {},
            classname: 'test',
            onClick: jest.fn(),
        };

        const { container } = render(
            <Button title={props.title} onClick={props.onClick} classname={props.classname} style={props.style} />,
        );

        const button = screen.getByRole("button");
        fireEvent.click(button)

        expect(container).toBeInTheDocument();
        expect(button).toHaveClass("btn");
        expect(props.onClick).toHaveBeenCalledTimes(1)
    });
});
