import React, { useState, useEffect, useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OpponentCharacterList from "../components/Character/OpponentCharacterList";
import UserCharacter from "../components/Character/UserCharacter";
import UserInfo from "../components/User/UserInfo";
import {
  getUserInformations,
  getByLastUpdateUserCharacter,
  getCharacterList,
  getCharacterNotes,
  getNoteSelected,
} from "../lib/state/selectors";
import versusLogo from "../assets/images/screen/vs.png";
import OpponentCharacter from "../components/Character/OpponentCharacter";
import OpponentNote from "../components/Note/OpponentNote";
import AddNote from "../components/Note/AddNote";
import { getNote } from "../lib/state/actions";
import Loading from "../components/Loading/Loading";
import UpdateNote from "../components/Note/UpdateNote";

const initialState = {
  userCharacterSelected: "",
  infoCharacter: {},
  opponentCharacter: {},
  loading: true,
  // TODO: Ajout des attributs liées aux autres composants
};

export default function ImproveScreen(props) {
  const { container, imageStyle, imageContainer } = styles;
  const [state, setState] = useState(initialState);
  const [showOpponentList, setShowOpponentList] = useState(false);
  const [showUpdateNote, setShowUpdateNote] = useState(false);
  const [showAddNote, setShowAddNote] = useState(false);
  const {
    loading,
    userCharacterSelected,
    infoCharacter,
    opponentCharacter,
  } = state;

  const dispatch = useDispatch();

  const user = useSelector((state) => getUserInformations(state));

  const userCharacters = useSelector((state) =>
    getByLastUpdateUserCharacter(state)
  );

  const charactersList = useSelector((state) => getCharacterList(state));

  const characterNote = useSelector((state) => getCharacterNotes(state));

  const noteSelectedForUpdate = useSelector((state) => getNoteSelected(state));

  const getShowOpponentListInput = (value) => {
    setShowOpponentList(value);
  };

  const getShowAddNote = (value) => {
    setShowAddNote(value);
  };

  const getShowUpdateNote = (value) => {
    setShowUpdateNote(value);
  };

  const getOpponentIdSelected = (characterId) => {
    charactersList.filter((character) => {
      if (character._id === characterId) {
        setState((prevState) => ({
          ...prevState,
          opponentCharacter: character,
        }));
      }
    });
  };

  useEffect(() => {
    charactersList.map((character) => {
      if (character._id === userCharacters[0].characterId) {
        setState((prevState) => ({
          ...prevState,
          userCharacterSelected: character,
          infoCharacter: userCharacters[0],
          opponentCharacter: charactersList[0],
          loading: false,
        }));
      }
    });
  }, [charactersList]);

  useEffect(() => {
    console.log("getNote");
    const data = {
      userId: user._id,
      characterId: userCharacterSelected._id,
      opponentCharacterId: opponentCharacter._id,
    };
    dispatch(getNote(data));
  }, [userCharacterSelected, opponentCharacter]);

  useEffect(() => {
    if (noteSelectedForUpdate) {
      setShowUpdateNote(true);
    }
  }, [noteSelectedForUpdate]);

  console.log("noteSelectedForUpdate", noteSelectedForUpdate);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <View style={container}>
        <UserInfo username={user.username} imageId={user.imageId} />
        <UserCharacter name={userCharacterSelected.name} info={infoCharacter} />
        <View style={imageContainer}>
          <Image style={imageStyle} source={versusLogo} />
        </View>
        <OpponentCharacter
          name={opponentCharacter.name}
          getShowOpponentListInput={getShowOpponentListInput}
        />
        {showOpponentList && (
          <OpponentCharacterList
            charactersList={charactersList}
            getShowOpponentListInput={getShowOpponentListInput}
            getOpponentIdSelected={getOpponentIdSelected}
          />
        )}
        <OpponentNote notes={characterNote} getShowAddNote={getShowAddNote} />
        {showAddNote && (
          <AddNote
            userId={user._id}
            characterId={userCharacterSelected._id}
            opponentCharacterId={state.opponentCharacter._id}
            getShowAddNote={getShowAddNote}
          />
        )}
        {showUpdateNote && (
          <UpdateNote
            note={noteSelectedForUpdate}
            getShowUpdateNoteInput={getShowUpdateNote}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 100,
    height: 120,
  },
});
