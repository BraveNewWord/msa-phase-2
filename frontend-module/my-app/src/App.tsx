import axios from "axios";
import React, { useState } from 'react';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import './App.css';

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [wordInfos, setWordInfos] = useState<undefined | any[]>(undefined);
  const WORD_BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  return (
    <Grid    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}>
      <h1>
        Word Search
      </h1>

      <div>
      <TextField
          id="search-bar"
          className="text"
          value={searchWord}
          onChange={(prop: any) => {
            setSearchWord(prop.target.value);
          }}
          label="Enter a Word..."
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton
          aria-label="search"
          onClick={() => {
            search();
          }}
        >
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </div>
      <p>
        You have entered {searchWord}
      </p>

      {wordInfos === undefined ? 
      <p>No words found</p> :
      wordInfos.map((wordInfo) => 
      <div>
        <Card sx={{ width: 350, mb: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={"https://picsum.photos/seed/" + wordInfo.meanings[0].definitions[0].definition + "/350/350"}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {wordInfo.word} | {wordInfo.meanings[0].partOfSpeech}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {wordInfo.meanings[0].definitions[0].definition}
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
      </div>)
    }

    </Grid>
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