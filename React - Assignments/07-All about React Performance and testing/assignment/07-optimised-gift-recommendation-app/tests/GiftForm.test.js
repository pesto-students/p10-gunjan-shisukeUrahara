import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import GiftForm from '../Components/GiftForm/GiftForm';
const axios = requie('axios');

// Mock the axios module
jest.mock('axios');

describe('GiftForm', () => {
    test('renders without crashing', () => {
        render(<GiftForm />);
    });

    test('initial state is set correctly', () => {
        render(<GiftForm />);
        expect(screen.getByDisplayValue('Male')).toBeInTheDocument();
        expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    });

    test('form inputs update the state correctly', () => {
        render(<GiftForm />);
        fireEvent.change(screen.getByDisplayValue('Male'), { target: { value: 'Female' } });
        fireEvent.change(screen.getByDisplayValue('1'), { target: { value: '2' } });
        expect(screen.getByDisplayValue('Female')).toBeInTheDocument();
        expect(screen.getByDisplayValue('2')).toBeInTheDocument();
    });

    test('interests are added correctly', () => {
        render(<GiftForm />);
        const input = screen.getByPlaceholderText('Add interest');
        fireEvent.change(input, { target: { value: 'Football' } });
        fireEvent.keyPress(input, { key: 'Enter', code: 'Enter' });
        expect(screen.getByText('Football')).toBeInTheDocument();
    });

    test('interests are removed correctly', () => {
        render(<GiftForm />);
        const input = screen.getByPlaceholderText('Add interest');
        fireEvent.change(input, { target: { value: 'Football' } });
        fireEvent.keyPress(input, { key: 'Enter', code: 'Enter' });
        fireEvent.click(screen.getByText('Remove'));
        expect(screen.queryByText('Football')).toBeNull();
    });

    test('API request is made on form submission', async () => {
        const response = {
            data: {
                choices: [
                    {
                        text: '1. Football\n2. Basketball\n3. Baseball\n',
                    },
                ],
            },
        };
        axios.post.mockResolvedValue(response);
        render(<GiftForm />);
        fireEvent.click(screen.getByText('Get Recommendations'));
        await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
    });

    test('recommendations are displayed correctly', async () => {
        const response = {
            data: {
                choices: [
                    {
                        text: '1. Football\n2. Basketball\n3. Baseball\n',
                    },
                ],
            },
        };
        axios.post.mockResolvedValue(response);
        render(<GiftForm />);
        fireEvent.click(screen.getByText('Get Recommendations'));
        await waitFor(() => expect(screen.getByText('Football')).toBeInTheDocument());
    });

    test('error message is displayed when API request fails', async () => {
        axios.post.mockRejectedValue(new Error('Network error'));
        render(<GiftForm />);
        fireEvent.click(screen.getByText('Get Recommendations'));
        await waitFor(() => expect(screen.getByText('An error occurred while fetching recommendations. Please try again.')).toBeInTheDocument());
    });
});
