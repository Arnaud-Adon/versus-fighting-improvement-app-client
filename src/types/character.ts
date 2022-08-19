export interface Character {
  id: number;
  name: string;
  image: string;
  skills: Skills;
}

export interface Skills {
  power: number;
  health: number;
  mobility: number;
  technical: number;
  scope: number;
}

export interface CharacterResponse {
  characters: Character[];
}
