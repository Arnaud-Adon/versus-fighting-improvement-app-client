import React from 'react';
import { screen, render } from '@testing-library/react-native';
import Loading from '..';

describe('Loading', () => {
  it('Should render component correctly', () => {
    render(<Loading />);

    expect(screen.getByTestId('loading')).toBeTruthy();
    expect(screen.getByTestId('img')).toBeTruthy();
  });
});
