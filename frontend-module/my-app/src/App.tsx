import axios from "axios";
import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [wordInfos, setWordInfos] = useState<undefined | any[]>(undefined);
  const WORD_BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  return (
    <div>
      <h1>
        Word Search
      </h1>

      <div>
        <label>Word</label><br/>
        <input type="text" id="word" name="word" onChange={e => setSearchWord(e.target.value)}/><br/>
        <button onClick={search}>
        Search
        </button>
      </div>
      
      <p>
        You have entered {searchWord}
      </p>

      {wordInfos === undefined ? 
      <p>No words found</p> :
      wordInfos.map((wordInfo) => 
      <div>
        <h4>{wordInfo.word} | {wordInfo.meanings[0].partOfSpeech}</h4>
        <p>{wordInfo.meanings[0].definitions[0].definition}</p>
      </div>)
    }

    </div>
  );

  function search(){
    axios.get(WORD_BASE_URL + searchWord)
    .then((res) => {
      setWordInfos(res.data);
    }).catch(() => {
      setWordInfos(undefined);
    });
    ;
}
}

export default App;