import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react-native';
import Button from '..';

const defaultProps = {
  label: 'Confirm',
  onPress: jest.fn(),
  firstColor: 'red',
  secondColor: 'blue',
};

describe('Button', () => {
  it('Should render component correctly', () => {
    render(<Button {...defaultProps} />);
    fireEvent.press(screen.getByText('Confirm'));
    expect(defaultProps.onPress).toHaveBeenCalledTimes(1);
  });
});
