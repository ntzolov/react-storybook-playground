import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('calls the onClick handler when clicked', () => {
    const mockClickHandler = jest.fn();
    const { getByText } = render(<Button onClick={mockClickHandler} label='Click me' />);
    const button = getByText(/Click me/);
    fireEvent.click(button);
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
    expect(button).toBeInstanceOf(HTMLButtonElement);
  });
});
