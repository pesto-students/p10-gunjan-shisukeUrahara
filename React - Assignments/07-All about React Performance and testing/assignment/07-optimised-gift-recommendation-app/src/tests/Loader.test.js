import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from '../src/Components/Loader/Loader';

describe('Loader', () => {
    test('renders without crashing', () => {
        render(<Loader />);
    });

    test('displays the correct text', () => {
        render(<Loader />);
        expect(screen.getByText('Fetching Recommendations')).toBeInTheDocument();
    });

});
