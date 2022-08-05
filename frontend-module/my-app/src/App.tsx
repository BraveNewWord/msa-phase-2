import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchWord, setSearchWord] = useState("");

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
    console.log(searchWord);
}
}

export default App;