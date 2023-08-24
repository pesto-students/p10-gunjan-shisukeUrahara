import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import axios from 'axios';
import GiftForm from '../Components/GiftForm/GiftForm';

// Mock the axios module
jest.mock('axios');

describe('GiftForm', () => {
    beforeEach(() => {
        axios.post.mockClear();
    });

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
        await screen.findByText('Football');
        expect(axios.post).toHaveBeenCalledTimes(1);
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
        const footballElement = await screen.findByText('Football', {}, { timeout: 5000 });
        expect(footballElement).toBeInTheDocument();
    });

    test('error message is displayed when API request fails', async () => {
        axios.post.mockRejectedValue(new Error('Network error'));
        render(<GiftForm />);
        fireEvent.click(screen.getByText('Get Recommendations'));
        const errorMessage = await screen.findByText('An error occurred while fetching recommendations. Please try again.');
        expect(errorMessage).toBeInTheDocument();
    });
});
