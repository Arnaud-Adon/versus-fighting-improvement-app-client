import React, { createContext, useContext, useMemo, useState } from "react";

const characterContext = createContext();
const { Provider, Consumer } = characterContext;

export const CharacterProvider = ({ children, characters }) => {
  const [character, setCharacter] = useState(characters[0]);

  const handleCharacterChange = (id) => {
    setCharacter(characters.filter((character) => character._id === id)[0]);
  };

  return (
    <Provider value={{ character, handleCharacterChange }}>{children}</Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(characterContext);
  if (!context) throw Error("context must be within a Provider");
  return context;
};

export const withCharacterContext = (WrappedComponent) => {
  return <Consumer>{(value) => <WrappedComponent {...value} />}</Consumer>;
};

export default CharacterProvider;
