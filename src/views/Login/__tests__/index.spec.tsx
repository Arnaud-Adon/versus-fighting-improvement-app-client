import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react-native';

import Login from '..';

const defaultProps = {
  navigate: jest.fn(),
};

describe('Login', () => {
  beforeEach(() => jest.clearAllMocks());
  it('Should render component correctly', () => {
    render(<Login {...defaultProps} />);
    expect(screen.getByText('Improve Versus Fighting')).toBeTruthy();
    expect(screen.getByTestId('img')).toBeTruthy();
  });

  it('should redirect to sign up view', () => {
    render(<Login {...defaultProps} />);
    fireEvent.press(screen.getByText(/S'inscrire/));
    expect(defaultProps.navigate).toHaveBeenCalledTimes(1);
    expect(defaultProps.navigate).toHaveBeenCalledWith('SignUp');
  });

  it('should redirect to sign in view', () => {
    render(<Login {...defaultProps} />);
    fireEvent.press(screen.getByText(/Se connecter/));
    expect(defaultProps.navigate).toHaveBeenCalledTimes(1);
    expect(defaultProps.navigate).toHaveBeenCalledWith('SignIn');
  });
});
