import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure this is included for TypeScript
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Counter';

test('renders Counter component', () => {
    render(
        <Provider store={store}>
            <Counter />
        </Provider>
    );

    const decrementButton = screen.getByText('-');
    const incrementButton = screen.getByText('+');
    const count = screen.getByText('0');

    expect(decrementButton).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
    expect(count).toBeInTheDocument();
});

test('increments and decrements counter', () => {
    render(
        <Provider store={store}>
            <Counter />
        </Provider>
    );

    const decrementButton = screen.getByText('-');
    const incrementButton = screen.getByText('+');
    let count = screen.getByText('0');

    fireEvent.click(incrementButton);
    count = screen.getByText('1');
    expect(count).toBeInTheDocument();

    fireEvent.click(decrementButton);
    count = screen.getByText('0');
    expect(count).toBeInTheDocument();
});
