import React, { createContext, useContext, useState } from "react";

export const CharacterContext = createContext();

export const CharacterProvider = ({ children, characters }) => {
  const [character, setCharacter] = useState(characters[0]);

  const handleCharacterChange = (id) => {
    setCharacter(characters.filter((character) => character._id === id)[0]);
  };

  return (
    <CharacterContext.Provider value={{ character, handleCharacterChange }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  return useContext(CharacterContext);
};

export const withCharacterContext = (WrappedComponent) => {
  return (
    <CharacterContext.Consumer>
      {(value) => <WrappedComponent {...value} />}
    </CharacterContext.Consumer>
  );
};

export default CharacterProvider;
