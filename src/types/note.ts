import { Character } from './character';

export interface Note {
  id: number;
  character: Character['id'];
  text: string;
}
