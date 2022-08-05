import axios from "axios";
import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchWord, setSearchWord] = useState("");
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

    </div>
  );

  function search(){
    axios.get(WORD_BASE_URL + searchWord).then((res) => {
      console.log(res.data);
    });
}
}

export default App;