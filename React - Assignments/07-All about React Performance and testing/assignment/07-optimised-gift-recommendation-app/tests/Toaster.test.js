import React from 'react';
import { render, screen } from '@testing-library/react';
import Toaster from '../Components/Toaster/Toaster';

describe('Toaster', () => {
    const mockMessage = { type: 'success', text: 'Success message' };

    test('renders without crashing', () => {
        render(<Toaster message={mockMessage} />);
    });

    test('does not render when there is no message', () => {
        render(<Toaster message={null} />);
        const toasterElement = screen.queryByClass('Toaster');
        expect(toasterElement).toBeNull();
    });

    test('displays the correct message text', () => {
        render(<Toaster message={mockMessage} />);
        expect(screen.getByText(mockMessage.text)).toBeInTheDocument();
    });

    test('applies the correct CSS class based on the message type', () => {
        render(<Toaster message={mockMessage} />);
        const toasterElement = screen.getByClass('Toaster');
        expect(toasterElement.classList.contains(mockMessage.type)).toBe(true);
    });
});
