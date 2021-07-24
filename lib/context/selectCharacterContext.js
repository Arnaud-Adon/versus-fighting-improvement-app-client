import React, { createContext, useContext, useState } from "react";

const SelectCharacterContext = createContext();

export const SelectCharacterProvider = ({ children }) => {
  const [userCharacter, setUserCharacter] = useState(null);
  const [opponentCharacter, setOpponentCharacter] = useState(null);

  return (
    <SelectCharacterContext.Provider
      value={{
        userCharacter,
        opponentCharacter,
        setUserCharacter,
        setOpponentCharacter,
      }}
    >
      {children}
    </SelectCharacterContext.Provider>
  );
};

export const useSelectCharacterContext = () => {
  return useContext(SelectCharacterContext);
};
