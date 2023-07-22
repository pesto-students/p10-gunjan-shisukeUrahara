import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Interests from '../Components/Interests/Interests';

describe('Interests', () => {
    const interests = ['Football', 'Basketball', 'Baseball'];
    const onRemove = jest.fn();

    test('renders without crashing', () => {
        render(<Interests interests={interests} onRemove={onRemove} />);
    });

    test('renders the correct number of interests', () => {
        render(<Interests interests={interests} onRemove={onRemove} />);
        expect(screen.getAllByRole('button')).toHaveLength(interests.length);
    });

    test('interests are displayed correctly', () => {
        render(<Interests interests={interests} onRemove={onRemove} />);
        interests.forEach(interest => {
            expect(screen.getByText(interest)).toBeInTheDocument();
        });
    });

    test('remove button is displayed for each interest', () => {
        render(<Interests interests={interests} onRemove={onRemove} />);
        interests.forEach(() => {
            expect(screen.getByRole('button')).toBeInTheDocument();
        });
    });

    test('clicking remove button removes the correct interest', () => {
        render(<Interests interests={interests} onRemove={onRemove} />);
        fireEvent.click(screen.getAllByRole('button')[0]);
        expect(onRemove).toHaveBeenCalledWith(0);
    });

    test('component re-renders correctly when interests prop changes', () => {
        const { rerender } = render(<Interests interests={interests} onRemove={onRemove} />);
        const newInterests = [...interests, 'Soccer'];
        rerender(<Interests interests={newInterests} onRemove={onRemove} />);
        expect(screen.getByText('Soccer')).toBeInTheDocument();
    });

    test('component renders correctly when interests prop is an empty array', () => {
        render(<Interests interests={[]} onRemove={onRemove} />);
        expect(screen.queryByRole('button')).toBeNull();
    });

    test('component handles very long interest names correctly', () => {
        const longInterest = 'A'.repeat(100);
        render(<Interests interests={[longInterest]} onRemove={onRemove} />);
        expect(screen.getByText(longInterest)).toBeInTheDocument();
    });

    test('component handles special characters in interest names correctly', () => {
        const specialInterest = 'Football & Basketball';
        render(<Interests interests={[specialInterest]} onRemove={onRemove} />);
        expect(screen.getByText(specialInterest)).toBeInTheDocument();
    });
});
