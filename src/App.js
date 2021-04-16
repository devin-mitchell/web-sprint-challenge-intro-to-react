import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';
import { IoPlanet } from 'react-icons/io5';


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const PageTitle = styled.h1`
  color: white;
  font-size: 5rem;
  font-family: Monoton;
  padding: 0;
  margin: 2% 0;
`

const CharContainer = styled.div`
  background-color: rgb(10, 82, 9, .3);
  border-radius: 10px;
  width: 40%;
  margin: 0 30% 10%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div:last-child{
    margin: 4% 0;
  }
  `

  const App = () => {
    const [characters, setCharacters] =  useState([]);
    

    useEffect(() => {
      axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setCharacters(res.data)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])

  return (
    <div className="App">
      <PageTitle className="Header"><IoPlanet /> ReactWars <IoPlanet /></PageTitle>
      <CharContainer>
        {characters.map(character => {
          return <Character character={character} />
        })}
      </CharContainer>
    </div>
  );
}

export default App;
