import { Platform } from 'react-native';

export const PLATFORM = Platform.OS === 'ios' ? 'ios' : 'md';

export enum TAGS {
  N = 'Neutral',
  Z = 'Zoning',
  VS = 'VSkill',
  VT = 'VTrigger',
  S = 'Saut',
  OH = 'On hit',
  OB = 'On block',
}

export enum COLORS {
  RED = '#EA2027',
  DARKER_RED = '#c0392b',
  LIGHTER_RED = '#ff7979',
  DARKER_BLUE = '#1B1464',
  LIGHTER_BLUE = '#0652DD',
  WHITE = '#ffffff',
  BLACK = '#000000',
  DARKER_YELLOW = '#ffeb7f',
  LIGHTER_YELLOW = '#fefbc7',
}
