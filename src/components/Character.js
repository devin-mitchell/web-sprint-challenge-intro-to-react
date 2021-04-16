import React from 'react';
import styled from 'styled-components'
import axios from 'axios';

const CharDiv = styled.div`
    font-family: Audiowide;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4% 0 0;
    width: 90%;
    border: 1px solid #0cb025;

    h2, p{
        margin: 2%;
    }

    p{  
        border-radius: 20px;
        padding: 0 5px;
        color: white;
        transition: all 300ms ease-in-out;

        :hover{
            background-color: #0cb025;
            transform: scale(1.2);
            transition: all 500ms ease-in-out;
        }
    }

`

export default function Character({ character }) {

    return (
        <CharDiv>
            <h2>{character.name}</h2>
            <p>{character.birth_year}</p>
        </CharDiv>
    )
};
