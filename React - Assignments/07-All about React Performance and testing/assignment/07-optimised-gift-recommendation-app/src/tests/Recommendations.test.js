import React from 'react';
import { render, screen } from '@testing-library/react';
import Recommendations from '../src/Components/Recommendations/Recommendations';

describe('Recommendations', () => {
    const mockRecommendations = ['Recommendation 1', 'Recommendation 2', 'Recommendation 3'];

    test('renders without crashing', () => {
        render(<Recommendations recommendations={mockRecommendations} />);
    });

    test('displays the correct number of recommendations', () => {
        render(<Recommendations recommendations={mockRecommendations} />);
        const recommendationElements = screen.getAllByClass('recommendation-card');
        expect(recommendationElements.length).toBe(mockRecommendations.length);
    });

    test('displays the correct recommendation text', () => {
        render(<Recommendations recommendations={mockRecommendations} />);
        mockRecommendations.forEach((recommendation, index) => {
            expect(screen.getByText(recommendation)).toBeInTheDocument();
            expect(screen.getByText((index + 1).toString())).toBeInTheDocument();
        });
    });

    test('handles an empty list of recommendations correctly', () => {
        render(<Recommendations recommendations={[]} />);
        const recommendationElements = screen.queryAllByClass('recommendation-card');
        expect(recommendationElements.length).toBe(0);
    });

    test('handles changes to the recommendations correctly', () => {
        const { rerender } = render(<Recommendations recommendations={mockRecommendations} />);
        const newRecommendations = ['New Recommendation 1', 'New Recommendation 2'];
        rerender(<Recommendations recommendations={newRecommendations} />);
        newRecommendations.forEach((recommendation, index) => {
            expect(screen.getByText(recommendation)).toBeInTheDocument();
            expect(screen.getByText((index + 1).toString())).toBeInTheDocument();
        });
    });
});
