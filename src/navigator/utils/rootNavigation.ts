import { createRef } from 'react';
import type { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef>();

interface Props {
  name: string;
  params?: object;
}

export const navigate = ({ name, params }: Props) => {
  navigationRef.current?.navigate(name, params);
};
