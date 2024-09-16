import { useEffect, useState } from "react";
import { Results } from "./Results";

export function Search() {
  const [characterName, setCharacterName] = useState();
  const [characterData, setCharacterData] = useState();
  const [isTableVisible, setIsTableVisible] = useState();

  async function getData(name) {
    // api from https://amiiboapi.com/
    // example url:
    // https://www.amiiboapi.com/api/amiibo/?name=mario

    // TODO: ADD THE API CALL HERE

    setCharacterData(response);
    setIsTableVisible(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const characterNameInput = document.getElementById(
      "character-name-input"
    ).value;
    setCharacterName(characterNameInput);
    setIsTableVisible(false);
  }

  useEffect(() => {
    getData(characterName);
  }, [characterName]);

  return (
    <>
      <h1>Amiibo finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="character-name-input"
          type="text"
          placeholder="Enter Character name"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <Results result={characterData} showTable={isTableVisible} />
    </>
  );
}
