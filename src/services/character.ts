import api from './axios';
import type { Character, CharacterResponse } from '../types/character';

export const service = {
  fetchCharacters: async (): Promise<Character[]> => {
    try {
      const {
        data: { characters },
      } = await api.get<CharacterResponse>('/character');

      return characters;
    } catch (error: any) {
      throw new Error(error);
    }
  },
};
